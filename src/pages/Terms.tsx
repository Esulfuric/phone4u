
const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">1. Agreement to Terms</h2>
              <p>
                By accessing and using Phone4u's services, you agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">2. Products and Services</h2>
              <p>
                Phone4u specializes in the sale of mobile phones, accessories, and related products. We strive to provide 
                accurate product descriptions and pricing, but we reserve the right to correct any errors or inaccuracies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">3. Pricing and Payment</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>All prices are listed in Nigerian Naira (₦) and are subject to change without notice</li>
                <li>Payment must be made in full before product delivery</li>
                <li>We accept cash, bank transfers, and other approved payment methods</li>
                <li>Prices do not include delivery charges unless specifically stated</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">4. Delivery and Pickup</h2>
              <p>
                Products can be collected from any of our branch locations or delivered within Lagos. 
                Delivery terms and charges will be communicated at the time of purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">5. Returns and Exchanges</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Returns are accepted within 7 days of purchase for unopened items</li>
                <li>Products must be in original packaging with all accessories</li>
                <li>Proof of purchase is required for all returns</li>
                <li>Exchanges are subject to product availability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">6. Warranty</h2>
              <p>
                All products come with manufacturer's warranty. Warranty terms vary by product and manufacturer. 
                Phone4u will facilitate warranty claims but is not responsible for manufacturer warranty policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">7. Limitation of Liability</h2>
              <p>
                Phone4u's liability is limited to the purchase price of the product. We are not liable for any 
                indirect, incidental, or consequential damages arising from the use of our products or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-black">8. Contact Information</h2>
              <p>
                For questions about these terms, please contact us at +234 705 633 0100 or visit any of our branch locations.
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

export default Terms;
