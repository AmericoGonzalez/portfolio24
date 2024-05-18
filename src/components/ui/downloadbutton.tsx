// components/DownloadButton.js


import React from 'react';

const DownloadButton = ({ Resume }: { Resume: string }) => {
  const handleDownload = () => {
    // Construct the URL to the PDF file
    const pdfUrl = `${process.env.PUBLIC_URL}/${Resume}.pdf`;

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;

    // Set the download attribute and trigger a click event
    link.download = Resume;
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Download PDF
    </button>
  );
};

export default DownloadButton;
