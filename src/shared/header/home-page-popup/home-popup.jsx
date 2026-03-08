import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function HomePopup() {
  const [openModal, setOpenModal] = useState(true);

  const handleOpen = () => {
    setOpenModal(false);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  // Style for the modal Box
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: 400, md: 500 },
    bgcolor: "#fff",
    // Removing any border
    border: "none",
    boxShadow: 24,
    borderRadius: 2,
    overflow: "hidden",
    zIndex: 9999,
  };

  return (
    // Center everything (including the "Show Modal" button)
    <div style={{ padding: 20, textAlign: "center" }}>
      {/* Button to show/open the modal */}
      <Button variant="contained" onClick={handleOpen}>
        Show Modal
      </Button>

      <Modal open={openModal} onClose={handleClose}>
        <Box sx={modalStyle}>
          {/* Close IconButton with no black color override */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              svg: {
                fontSize: { xs: 20, sm: 24 },
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Centered heading */}
          <Typography
            align="center"
            sx={{
              mt: 2,
              fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            }}
          >
            Download Our Mobile App Now!
          </Typography>

          {/* Centered content */}
          <Box sx={{ p: 1.5, textAlign: "center" }}>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Our mobile app is now live on the App Store!
              Get seamless access to our services anytime, anywhere.
            </Typography>

            {/* Button with hover background change, text remains white */}
            <Button
              component="a"
              href="https://apps.apple.com/us/app/pepp/id6503652490"
              target="_blank"
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                color: "#fff", // White text
                padding: "8px 20px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "primary.dark", // Slightly darker background
                  color: "#fff", // Keep text white
                },
              }}
            >
              Download now and stay connected!
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
