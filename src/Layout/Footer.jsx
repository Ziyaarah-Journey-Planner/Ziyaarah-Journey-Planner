function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">

        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Ziyaarah</h2>
          <p className="text-sm text-gray-400">
            Helping Muslims prepare for their sacred journey with ease and guidance.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Home</li>
            <li>Dashboard</li>
            <li>Prayers</li>
            <li>Community</li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="font-semibold mb-2">Get Started</h3>
          <p className="text-sm text-gray-400 mb-3">
            Begin your Hajj or Umrah journey today.
          </p>
          <button className="bg-green-600 px-4 py-2 rounded-lg">
            Create Account
          </button>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 pb-4">
        © 2024 Ziyaarah. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;