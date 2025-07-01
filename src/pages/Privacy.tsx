
const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">1. Information We Collect</h2>
              <p className="mb-3">We collect information you provide directly to us, such as:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Name and contact information when you make a purchase</li>
                <li>Phone number and email address for communication</li>
                <li>Delivery address for product shipments</li>
                <li>Payment information for transaction processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">2. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your purchases</li>
                <li>Provide customer support</li>
                <li>Send you promotional offers (with your consent)</li>
                <li>Improve our products and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share information with trusted partners who assist us in 
                operating our business, conducting transactions, or servicing you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">5. Cookies</h2>
              <p>
                Our website may use cookies to enhance your experience. Cookies are small files that a site or its 
                service provider transfers to your computer's hard drive through your web browser.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">6. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">7. Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13 years of age. We do not knowingly collect 
                personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any material changes 
                by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">9. Contact Us</h2>
              <p>
                If you have questions about this privacy policy, please contact us at +234 705 633 0100 or 
                visit any of our branch locations.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t text-sm text-gray-500">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
