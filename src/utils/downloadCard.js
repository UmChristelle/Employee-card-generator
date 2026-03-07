import html2canvas from "html2canvas";

export const downloadAsImage = async (elementId, fileName) => {
  const element = document.getElementById(elementId);
  const canvas = await html2canvas(element, { scale: 2, useCORS: true });
  const link = document.createElement("a");
  link.download = `${fileName}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
};

export const downloadAsPDF = async (elementId, fileName) => {
  const element = document.getElementById(elementId);
  const canvas = await html2canvas(element, { scale: 2, useCORS: true });
  const imgData = canvas.toDataURL("image/png");

  const win = window.open("", "_blank");
  win.document.write(`
    <html>
      <head>
        <title>${fileName}</title>
        <style>
          body { margin: 0; }
          img { width: 100%; }
          @media print { body { margin: 0; } }
        </style>
      </head>
      <body>
        <img src="${imgData}" />
        <script>
          window.onload = function() {
            window.print();
            window.onafterprint = function() { window.close(); };
          }
        </script>
      </body>
    </html>
  `);
  win.document.close();
};