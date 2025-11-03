export default function page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pb-16 pt-8 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-rose-600 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-10">
          This Privacy Policy explains how we collect, use, and protect your
          personal information when you visit or order from our website.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We collect personal information that you provide directly to us
              when placing an order, creating an account, or contacting us. This
              includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2 space-y-1">
              <li>Name, phone number, and delivery address</li>
              <li>Email address and payment details (processed securely)</li>
              <li>Order history and customer preferences</li>
              <li>
                Device, browser, and IP information (for analytics and security)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use the collected data to:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2 space-y-1">
              <li>Process and deliver your food orders accurately</li>
              <li>Improve our website, menu, and customer service</li>
              <li>
                Communicate promotions, offers, and updates (only if you opt-in)
              </li>
              <li>Ensure security and prevent fraudulent activity</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              3. Data Protection & Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy and security are important to us. We use SSL
              encryption, secure servers, and verified payment gateways to
              protect your information. However, no online transmission is 100%
              secure, and you share information at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              4. Sharing of Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell or rent your personal data. We may share limited
              information only with:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2 space-y-1">
              <li>Delivery partners for fulfilling your order</li>
              <li>Payment processors for secure transactions</li>
              <li>Law enforcement, if required by applicable law</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              5. Cookies & Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website uses cookies to enhance your browsing experience,
              remember your preferences, and collect anonymous analytics. You
              can disable cookies in your browser settings, but some features
              may not function properly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              6. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal data only as long as necessary for order
              processing, legal compliance, and legitimate business purposes.
              You may request deletion of your data anytime by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              7. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2 space-y-1">
              <li>Access and review the personal data we hold about you</li>
              <li>Request correction or deletion of inaccurate information</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              8. Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to external sites (e.g., payment
              gateways or delivery partners). We are not responsible for the
              privacy practices or content of such third-party websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              9. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. Any changes will
              be reflected on this page with a new “Last Updated” date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              10. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions or concerns about this Privacy Policy,
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
