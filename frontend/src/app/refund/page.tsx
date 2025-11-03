export default function page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pb-16 pt-8 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-rose-600 mb-6 text-center">
          Refund & Cancellation Policy
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Please read our refund and cancellation policy carefully before
          placing any order on our website.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              1. Order Cancellation
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Orders can be cancelled **within 5–10 minutes of placement** only
              if the food preparation has not yet started. Once cooking begins,
              the order cannot be cancelled as we prepare food fresh for every
              customer.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              To cancel an order, please contact our support team immediately
              via phone or the{" "}
              <a href="/contact" className="text-rose-600 hover:underline">
                Contact Page
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              2. Refund Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Refunds are applicable under the following conditions:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2 space-y-1">
              <li>
                Order cancelled by the restaurant before preparation starts
              </li>
              <li>
                Payment deducted but order not confirmed due to a system error
              </li>
              <li>Order delivered incorrectly (wrong item or missing dish)</li>
              <li>
                Severe delay in delivery beyond the committed time (case-by-case
                basis)
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              All refund requests will be reviewed, and approved refunds will be
              processed to the original payment method within **5–7 business
              days**.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              3. Non-Refundable Situations
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Refunds will not be issued in the following cases:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2 space-y-1">
              <li>
                Customer provides incorrect delivery address or phone number
              </li>
              <li>Customer unavailable or unresponsive at delivery time</li>
              <li>Unsatisfactory taste or personal preference issues</li>
              <li>Partial consumption of food before reporting a complaint</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              4. Payment Reversals
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you paid via online payment (e.g., card, bKash, Nagad), refund
              will be made through the same channel. For cash-on-delivery
              orders, refund will be issued as store credit or coupon in special
              cases.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              5. Delivery Issues
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If an order is marked “Delivered” but you have not received it,
              please contact our support within **30 minutes** of the delivery
              time shown in the system. We will investigate and resolve the
              issue promptly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              6. Changes & Updates
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or update this Refund Policy at any
              time without prior notice. Updates will be reflected on this page
              with a new “Last Updated” date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              7. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions or concerns regarding refunds or order
              cancellations, please reach out to our support team through the{" "}
              <a href="/contact" className="text-rose-600 hover:underline">
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
