export default function page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pb-16 pt-8 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-rose-600 mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Please read these terms and conditions carefully before using our
          website or placing an order.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              1. General Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or ordering from our website, you agree to comply
              with these Terms and Conditions. We reserve the right to update or
              modify these terms at any time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              2. Ordering Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Orders can be placed online through our website or by phone. Once
              an order is confirmed, it cannot be modified or canceled after it
              has been prepared. Please ensure that all order details, including
              delivery address and contact number, are correct before final
              submission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              3. Delivery & Service Area
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We deliver within our service area only. Delivery time may vary
              depending on traffic, weather, and order volume. A delivery charge
              applies and will be displayed at checkout.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              4. Pricing & Payment
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All prices are listed in Bangladeshi Taka (৳) and include
              applicable taxes unless stated otherwise. We accept Cash on
              Delivery, credit/debit cards, and mobile banking payments via our
              secure gateway.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              5. Refund & Replacement Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Refunds or replacements are offered only in cases of incorrect or
              defective orders. To be eligible, customers must report issues
              within 24 hours of delivery with proof (photo or receipt). Refunds
              will be processed within 5–7 business days after approval.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              6. Food Allergies & Special Instructions
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Please note that while we take precautions, we cannot guarantee a
              completely allergen-free kitchen. Customers are responsible for
              informing us of any allergies or dietary restrictions when
              ordering.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              7. Website Usage
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The content, images, and trademarks on this website are owned by
              our restaurant and protected by copyright laws. Users may not
              reproduce or distribute any part of the website without written
              permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are not liable for any indirect or consequential damages
              arising from your use of our services, including delays, system
              failures, or unauthorized access to data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              9. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For questions or concerns regarding these Terms and Conditions,
              please contact us via our
              <a href="/contact" className="text-rose-600 hover:underline ml-1">
                Contact Page
              </a>
              .
            </p>
          </div>
        </section>

        <p className="text-center text-gray-500 text-sm mt-12">
          Last updated on November 2025.
        </p>
      </div>
    </main>
  );
}
