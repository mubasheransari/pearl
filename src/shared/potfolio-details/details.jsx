"use client";

import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/webpack";
import { CircularProgress, Box, Button } from "@mui/material";
import HTMLFlipBook from "react-pageflip";
import styles from "./details.module.scss";

export default function PDFBookViewer() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const bookRef = useRef(null);

  // Zoom state (1.0 = 100%)
  const [scale, setScale] = useState(1.0);

  useEffect(() => {
    const extractImagesFromPDF = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(
          "/drive-download-20250221T123148Z-001/Sample   Double Storey Rear Butterfly Roof.pdf"
        );
        const pdf = await loadingTask.promise;

        const extractedImages = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 3 });

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: context, viewport }).promise;
          extractedImages.push(canvas.toDataURL("image/png"));
        }

        setImages(extractedImages);
      } catch (error) {
        console.error("Error extracting images from PDF:", error);
      } finally {
        setLoading(false);
      }
    };

    extractImagesFromPDF();
  }, []);

  const flipPrev = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const flipNext = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  // Simple zoom-in and zoom-out
  const handleZoomIn = () => {
    setScale((prev) => prev + 0.1);
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(0.2, prev - 0.1));
  };

  return (
    <div className={styles.bookContainer}>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <button className={styles.navLeft} onClick={flipPrev}>
            {"<"}
          </button>

          <button className={styles.navRight} onClick={flipNext}>
            {">"}
          </button>

          {/* Zoom wrapper */}
          <div className={styles.zoomContainer}>
            <div className={styles.zoomControls}>
              <Button variant="contained" onClick={handleZoomOut}>
                Zoom Out
              </Button>
              <Button variant="contained" onClick={handleZoomIn}>
                Zoom In
              </Button>
            </div>

            <HTMLFlipBook
              width={600}
              height={800}
              ref={bookRef}
              className={styles.flipBook}
              style={{
                // transform: `scale(${scale})`,
                transformOrigin: "top center",
              }}
            >
              {images.map((src, index) => (
                <div key={index} className={styles.page}>
                  <img src={src} alt={`Page ${index + 1}`} />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </>
      )}
    </div>
  );
}
