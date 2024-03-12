import { jsPDF } from "jspdf"


export const generateInvoices = () => {


    var doc = new jsPDF();
    
    doc.setFontSize(22);
    doc.text("INVOICE GENERATOR", 20, 20);

    doc.setFontSize(16);
    doc.text("Sample Output should be this", 20, 30);

    doc.addImage(img, "PNG", 140, 10, 60, 20);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Product", 25, 60);
    doc.text("Qty", 65, 60);
    doc.text("Rate", 125, 60);
    doc.text("Total", 160, 60);

    doc.setLineWidth(0.1);
    doc.line(20, 65, 180, 65);

    doc.setLineWidth(0.1);
    doc.line(20, 95, 180, 95);

    doc.setLineWidth(0.1);
    doc.line(180, 152, 115, 152);

    doc.setLineWidth(0.1);
    doc.line(180, 165, 115, 165);




    doc.setFontSize(12);
    doc.setFont("courier", "normal");
    doc.text("product1", 25, 70);
    doc.text("product2", 25, 80);
    doc.text("product3", 25, 90)

    doc.text("34", 65, 70);
    doc.text("34", 65, 80);
    doc.text("34", 65, 90);

    doc.text("120", 125, 70);
    doc.text("120", 125, 80);
    doc.text("120", 125, 90);

    doc.text("INR 4,080", 155, 70);
    doc.text("INR 4,080", 155, 80);
    doc.text("INR 4,080", 155, 90);



    doc.text("INR 16,240", 155, 140);
    doc.setTextColor("gray");
    doc.text("18%", 155, 150);
    doc.setTextColor(0, 0, 255);
    doc.text("19,163.20", 155, 160);

    doc.setTextColor("black");
    doc.text("GST", 115, 150);

    doc.setFont("helvetica", "bold");
    doc.text("Total", 115, 140);
    doc.text("Grand Total", 115, 160);
    doc.save("Invoice.pdf")

    return doc





}