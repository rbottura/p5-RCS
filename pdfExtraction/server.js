// server.js
const express = require("express");
const PDFParser = require("pdf2json");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors()); // Allow requests from all origins
app.use(express.json());

// Endpoint to upload and parse a PDF
app.get("/upload", (req, res) => {
    const pdfPath = "./a4_pdf.pdf"; // Path to the PDF file (you can adjust this for uploads)

    const pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataReady", pdfData => {
        res.json(pdfData); // Send the parsed JSON data back to the client
    });

    pdfParser.on("pdfParser_dataError", errData => {
        res.status(500).send("Error parsing PDF.");
    });

    // Start parsing the PDF file
    pdfParser.loadPDF(pdfPath);
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
