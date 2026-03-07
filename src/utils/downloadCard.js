import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
  const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: [canvas.width, canvas.height] });
  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save(`${fileName}.pdf`);
};