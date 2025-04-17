"use client";
import React, { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist/webpack";
import styles from "../details.module.scss";
import { CircularProgress, IconButton } from "@mui/material";
import {
  ViewList,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  Print,
  FileDownload,
  Share,
  Close,
} from "@mui/icons-material";

const PDFImageBookViewer5 = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // The direct URL/path to your PDF file
  const pdfUrl =
    "/drive-download-20250221T123148Z-001/Sample   Rear & Loft PD.pdf";


  // Zoom and Pan States
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });

  // Drawer (thumbnail panel) state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Lightbox (full-image modal) states
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Reference to the flipbook
  const flipBookRef = useRef(null);

  // Load PDF pages as images
  useEffect(() => {
    const extractImagesFromPDF = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;

        const imgArray = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 2 });

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: context, viewport }).promise;
          imgArray.push(canvas.toDataURL("image/png"));
        }
        setImages(imgArray);
      } catch (error) {
        console.error("Error extracting images from PDF:", error);
      } finally {
        setLoading(false);
      }
    };

    extractImagesFromPDF();
  }, []);

  // Zoom In/Out
  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));

  // Flip Next/Previous Page
  const nextPage = () => {
    if (flipBookRef.current && flipBookRef.current.pageFlip) {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (flipBookRef.current && flipBookRef.current.pageFlip) {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  // Print logic: open a new window with full-size images, then auto-print
  const handlePrint = () => {
    const printWindow = window.open("", "_blank", "width=800,height=600");
    if (!printWindow) {
      alert("Pop-up blocked! Please allow pop-ups for printing.");
      return;
    }

    const imagesHTML = images
      .map(
        (src) =>
          `<img src="${src}" style="width:100%; page-break-after: always;" />`
      )
      .join("");

    printWindow.document.write(`
      <html>
        <head>
          <title>Print PDF</title>
          <style>
            body {
              margin: 0;
              padding: 0;
            }
            @media print {
              img {
                display: block;
                max-width: 100%;
                height: auto;
                page-break-after: always;
              }
            }
          </style>
        </head>
        <body>
          ${imagesHTML}
          <script>
            window.print();
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  // Download the PDF file
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Sample-Double-Storey.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Share logic: file sharing if available, fallback to URL or copy link
  const handleShare = async () => {
    try {
      if (navigator.canShare && navigator.canShare({ files: [] })) {
        const response = await fetch(pdfUrl);
        const blob = await response.blob();
        const file = new File([blob], "Sample-Double-Storey.pdf", {
          type: blob.type,
        });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: "Check out this PDF",
            text: "Here's a PDF I wanted to share with you!",
            files: [file],
          });
          return;
        }
      }
      if (navigator.share) {
        await navigator.share({
          title: "Check out this PDF",
          text: "Here's a PDF I wanted to share with you!",
          url: pdfUrl,
        });
      } else {
        await navigator.clipboard.writeText(window.location.origin + pdfUrl);
        alert("PDF link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing PDF:", error);
      alert("Sharing failed, please try again.");
    }
  };

  // Panning logic (only if scale > 1)
  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setStartPoint({
        x: e.clientX - translate.x,
        y: e.clientY - translate.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTranslate({
      x: e.clientX - startPoint.x,
      y: e.clientY - startPoint.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (scale === 1) {
      setTranslate({ x: 0, y: 0 });
    }
  }, [scale]);

  // Clicking the page flips forward/back
  const handlePageClick = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - left;
    if (clickX < width / 2) {
      prevPage();
    } else {
      nextPage();
    }
  };

  // Toggle the drawer
  const handleDrawerToggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  // Lightbox open/close
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setLightboxOpen(false);
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      ) : (
        <>
          {/* Drawer Overlay with Drawer Content */}
          {isDrawerOpen && (
            <div
              className={styles.drawerOverlay}
              onClick={handleDrawerToggle}
              style={{ zIndex: 9999 }}
            >
              <div
                className={styles.drawer}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header with close button aligned to the right */}
                <div className={styles.drawerHeader}>
                  <IconButton
                    className={styles.closeDrawerButton}
                    onClick={handleDrawerToggle}
                  >
                    <Close />
                  </IconButton>
                </div>
                {images.map((thumb, idx) => (
                  <div
                    key={idx}
                    className={styles.thumbnailContainer}
                    onClick={() => openLightbox(idx)}
                  >
                    <img
                      src={thumb}
                      alt={`Thumbnail ${idx + 1}`}
                      className={styles.thumbnail}
                    />
                    {/* Display only the number */}
                    <div className={styles.thumbnailLabel}>{idx + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div
            className={styles.zoomableContainer}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Prev Page Button */}
            <IconButton className={styles.navButtonLeft} onClick={prevPage}>
              <ChevronLeft />
            </IconButton>

            <HTMLFlipBook
              ref={flipBookRef}
              className={styles.flipBook}
              width={600}
              height={800}
              flippingTime={800}
              showCover={false}
              drawShadow={true}
              useMouseEvents={false}
              style={{
                transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
                transformOrigin: "center",
                cursor: scale > 1 ? "grab" : "pointer",
              }}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className={styles.page}
                  onClick={handlePageClick}
                >
                  <img
                    src={src}
                    alt={`Page ${index + 1}`}
                    className={styles.image}
                  />
                  <div className={styles.pageGradient}></div>
                </div>
              ))}
            </HTMLFlipBook>

            {/* Next Page Button */}
            <IconButton className={styles.navButtonRight} onClick={nextPage}>
              <ChevronRight />
            </IconButton>
          </div>

          {/* Controls (drawer toggle, zoom, print, download, share) */}
          <div className={styles.controls}>
            <IconButton onClick={handleDrawerToggle}>
              <ViewList />
            </IconButton>
            <IconButton onClick={handleZoomOut}>
              <ZoomOut />
            </IconButton>
            <IconButton onClick={handleZoomIn}>
              <ZoomIn />
            </IconButton>
            <IconButton onClick={handlePrint}>
              <Print />
            </IconButton>
            <IconButton onClick={handleDownload}>
              <FileDownload />
            </IconButton>
            <IconButton onClick={handleShare}>
              <Share />
            </IconButton>
          </div>

          {/* Lightbox for showing a large version of the clicked thumbnail */}
          {lightboxOpen && lightboxIndex != null && (
            <div className={styles.lightboxOverlay}>
              <div className={styles.lightboxContent}>
                <IconButton
                  className={styles.closeButton}
                  onClick={closeLightbox}
                >
                  <Close />
                </IconButton>
                <img
                  src={images[lightboxIndex]}
                  alt={`Large Page ${lightboxIndex + 1}`}
                  className={styles.lightboxImage}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PDFImageBookViewer5;
