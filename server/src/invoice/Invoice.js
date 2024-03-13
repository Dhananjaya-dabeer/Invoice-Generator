import { jsPDF } from "jspdf";

export const generateInvoices = (products, quantities, rates) => {
  var doc = new jsPDF();
 
  doc.setFontSize(22);
  doc.text("INVOICE GENERATOR", 20, 20);
  doc.setFontSize(16);
  doc.text("Sample Output should be this", 20, 30);

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Product", 25, 60);
  doc.text("Qty", 65, 60);
  doc.text("Rate", 125, 60);
  doc.text("Total", 160, 60);

  doc.setLineWidth(0.1);
  doc.line(20, 65, 180, 65);

  // Calculate the starting y-coordinate for the data rows
  let y = 70;

  // Loop through the arrays and display the data
  for (let i = 0; i < products.length; i++) {
    doc.setFontSize(12);
    doc.setFont("courier", "normal");
    doc.text(products[i], 25, y);
    doc.text(quantities[i].toString(), 65, y);
    doc.text(rates[i].toString(), 125, y);

    const total = quantities[i] * rates[i];
    doc.text(`INR ${total}`, 155, y);

    // Increment y-coordinate for the next row
    y += 10;
  }

  // Add a line after the values of the table
  doc.setLineWidth(0.1);
  doc.line(20, y, 180, y);
  y += 10;

  // Calculate the total, GST, and grand total
  const subTotal = rates.reduce((acc, rate, index) => {
    return acc + rate * quantities[index];
  }, 0);

  const gst = subTotal * 0.18; // Assuming 18% GST
  const grandTotal = subTotal + gst;

  // Display subtotal, GST, and grand total
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0); // Set text color to black
  doc.text("Subtotal", 115, y);
  doc.text(`INR ${subTotal}`, 155, y);
  y += 10;

  // Highlight the field value of GST
  doc.setTextColor(0, 0, 255); // Set text color to blue
  doc.text("GST (18%)", 115, y);
  doc.setTextColor(0); // Reset text color to black
  doc.text(`INR ${gst}`, 155, y);
  y += 10;

  // Highlight the field value of grand total
  doc.setTextColor(255, 0, 0); // Set text color to red
  doc.text("Grand Total", 115, y);
  doc.setTextColor(0); // Reset text color to black
  doc.text(`INR ${grandTotal}`, 155, y);
  y += 10;

  // Add valid till date (3 months from current date)
  const validTillDate = new Date();
  validTillDate.setMonth(validTillDate.getMonth() + 3);
  doc.text(
    `Valid Till: ${validTillDate.toLocaleDateString()}`,
    20,
    y
  );
  y += 10;

  // Add terms and conditions
  doc.setFillColor(0, 0, 0, 0.9); // Set fill color to black with reduced transparency
  doc.setDrawColor(0); // Set draw color to black
  doc.setLineWidth(0.1);
  doc.roundedRect(20, y, 160, 40, 5, 5, "F"); // Draw a rounded rectangle for terms and conditions
  doc.setTextColor(0); // Set text color to black
  doc.setFontSize(12);
  doc.text(
    "Terms and Conditions",
    25,
    y + 5
  ); // Add terms and conditions header
  doc.setFontSize(10);
  const termsContent = "We are happy to supply any further information you may need and trust that you call on us to fill your order, which will receive our prompt and careful attention.";
  const textWidth = doc.getTextWidth(termsContent);
  const xOffset = (250 - textWidth) / 2;
  doc.text(
    termsContent,
    20 + xOffset,
    y + 20,
    { maxWidth: 160 }
  ); // Add terms and conditions content

  doc.save("Invoice.pdf");

  return doc;
};
