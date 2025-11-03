"use client";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";
import { Button } from "@/components/ui/button";

const downloadInvoice = async () => {
  const invoice = document.getElementById("invoice");
  if (!invoice) return;

  const canvas = await html2canvas(invoice, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("invoice.pdf");
};

export default function page() {
  const order = {
    id: "INV-2025-00123",
    date: "November 3, 2025",
    customer: {
      name: "Shrestha Shome",
      email: "shrestha@example.com",
      phone: "+880 1700 123 456",
      address: "House 123, Dhanmondi, Dhaka",
    },
    items: [
      { name: "Classic Kachchi", qty: 2, price: 320 },
      { name: "BBQ Dinner", qty: 3, price: 400 },
      { name: "Mango Smoothie", qty: 2, price: 120 },
    ],
    shipping: 100,
  };

  const subtotal = order.items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );
  const total = subtotal + order.shipping;

  return (
    <main className="min-h-screen flex flex-col justify-center items-center py-16 px-4">
      <div
        id="invoice"
        className="bg-white border-3 shadow-lg rounded-2xl w-full max-w-3xl p-8"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-rose-600 my-2">
            Order Invoice
          </h1>
          <p className="text-gray-500">Order ID: {order.id}</p>
          <p className="text-gray-500">Date: {order.date}</p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-2">
            Customer Details
          </h2>
          <div className="space-y-1 text-gray-700">
            <p>
              <span className="font-medium">Name:</span> {order.customer.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {order.customer.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {order.customer.phone}
            </p>
            <p>
              <span className="font-medium">Address:</span>{" "}
              {order.customer.address}
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
            Order Summary
          </h2>
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-rose-600 text-white">
                  <th className="p-3 text-left">Product</th>
                  <th className="p-3 text-center">Qty</th>
                  <th className="p-3 text-center">Price</th>
                  <th className="p-3 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-rose-100 transition-colors"
                  >
                    <td className="p-3">{item.name}</td>
                    <td className="p-3 text-center">{item.qty}</td>
                    <td className="p-3 text-center">
                      <span className="text-2xl my-0 py-0">৳</span>
                      {item.price}
                    </td>
                    <td className="p-3 text-right font-semibold">
                      <span className="text-2xl my-0 py-0">৳</span>
                      {item.qty * item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-1 text-right text-gray-700">
            <p>
              <span className="font-medium">Subtotal:</span>{" "}
              <span className="text-2xl my-0 py-0">৳</span>
              {subtotal}
            </p>
            <p>
              <span className="font-medium">Shipping:</span>{" "}
              <span className="text-2xl my-0 py-0">৳</span>
              {order.shipping}
            </p>
            <p className="text-xl font-bold text-rose-700">
              Total: <span className="my-0 py-0 text-3xl">৳</span>
              {total}
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-2">
            Payment Method
          </h2>
          <p className="text-gray-700">💵 Cash on Delivery</p>
        </section>

        <p className="text-center text-green-600 font-semibold mt-6">
          Thank you for ordering with us! 🍽️
        </p>
      </div>

      <Button
        onClick={downloadInvoice}
        className="mt-6 bg-gray-300 hover:bg-rose-700 text-black font-semibold rounded-lg hover:cursor-pointer hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Download as PDF
      </Button>
    </main>
  );
}
