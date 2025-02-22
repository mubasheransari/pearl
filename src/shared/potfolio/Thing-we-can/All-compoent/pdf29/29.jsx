"use client";

import { useEffect, useState, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist/webpack";
import { CircularProgress, Box } from "@mui/material";
import styles from "../Development.module.scss"; // SCSS import

export default function Pdf29() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const isLoaded = useRef(false); // Prevent re-fetching

  useEffect(() => {
    if (isLoaded.current) return; // ✅ Prevents multiple renders
    isLoaded.current = true; // ✅ Mark as loaded

    const extractImagesFromPDF = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument("/drive-download-20250221T123148Z-001/sample report land sliding.pdf");
        const pdf = await loadingTask.promise;

        let extractedImages = [];

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

  return (
    <div className={styles.container}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.grid}>
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className={`${styles.imageContainer} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <img
                src={imgSrc}
                alt={`Extracted ${index}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}