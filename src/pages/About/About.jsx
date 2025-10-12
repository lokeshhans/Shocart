function About() {
  return (
    <>
      <section className="grid grid-cols-1 pt-4 lg:grid-cols-3 gap-8 ">
        <article className="lg:col-span-2 bg-gray-500 p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Who we are</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in <strong>2019</strong>, Shop Cart was created with a
            single purpose — make quality products available to everyone at fair
            prices. We started as a small marketplace and grew because customers
            trusted our selection and service.
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-medium">Our mission</h3>
            <p className="text-gray-700 mt-2"></p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium">Our vision</h3>
            <p className="text-gray-700 mt-2">My vision</p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium">Our story</h3>
            <ol className="list-decimal list-inside mt-3 text-gray-700 space-y-3">
              <li>
                <strong>Humble beginnings:</strong> We began as a small seller
                focused on curated essentials.
              </li>
              <li>
                <strong>Customer-driven growth:</strong> We expanded product
                categories and logistics to serve more customers reliably.
              </li>
              <li>
                <strong>Ongoing improvement:</strong> We continuously optimize
                for speed, fairness, and ease.
              </li>
            </ol>
          </div>
        </article>

        <aside className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-sm">
            <h4 className="text-sm font-semibold text-gray-500">Fast facts</h4>
            <ul className="mt-3 text-gray-700 space-y-2">
              <li>
                <strong>Founded:</strong> 2022
              </li>
              <li>
                <strong>Based in:</strong> Palwal
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  className="text-indigo-400"
                  href={`mailto:lokeshhanswork@gmail.com`}
                >
                  lokeshhanswork@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white border rounded-2xl">
            <h4 className="font-medium">Care & Guarantee</h4>
            <p className="text-gray-600 text-sm mt-2">
              We stand by our products: easy returns, secure payments, and
              customer support that resolves issues quickly.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-2xl text-center">
            <h4 className="font-semibold mb-2">Ready to shop?</h4>
            <Link
              to="/"
              className="inline-block px-5 py-2 rounded-full bg-gray-600 text-white font-medium shadow"
            >
              Browse Products
            </Link>
          </div>
        </aside>
      </section>

      <section className="m-12">
        <h3 className="text-2xl font-semibold mb-4">Contact us</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-400 border rounded-lg">
            <h4 className="font-medium">Customer Support</h4>
            <p className="text-sm text-gray-600 mt-2">
              Have questions? We’re here to help — contact us via email or
              through our support page.
            </p>
            <a
              className="text-indigo-600 mt-3 inline-block"
              href={`mailto:lokeshhanswork@gmail.com`}
            >
              lokeshhanswork@gmail.com
            </a>
          </div>
          <div className="p-6 bg-gray-400 border rounded-lg">
            <h4 className="font-medium">Wholesale & Partners</h4>
            <p className="text-sm text-gray-600 mt-2">
              Interested in partnering or bulk orders? Reach out and let’s
              collaborate.
            </p>
          </div>
          <div className="p-6 bg-gray-400 border rounded-lg">
            <h4 className="font-medium">Feedback</h4>
            <p className="text-sm text-gray-600 mt-2">
              We love hearing from our customers — suggestions help us improve.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
