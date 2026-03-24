export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🏥 Landis Medical</h1>
          <a href="tel:856-213-2737" className="bg-white text-blue-600 px-4 py-2 rounded font-bold">
            📞 Call: 856-213-2737
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Landis Medical Executives</h1>
        <p className="text-xl mb-8">Your partner in healthcare excellence.</p>
        <a href="tel:856-213-2737" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100">
          📞 Call Now: 856-213-2737
        </a>
      </section>

      {/* About Us */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          We are dedicated to providing top-quality healthcare solutions tailored to your needs.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">💉 Interventional Pain Management</h3>
              <p className="text-gray-700">Innovative approaches to pain management and relief.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">🔬 Diagnostic Testing & Care Coordination</h3>
              <p className="text-gray-700">Comprehensive testing and personalized care coordination.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">⚖️ Strategic Mid-Legal Support</h3>
              <p className="text-gray-700">Expertise in navigating the complexities of mid-legal processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-900 text-white py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-xl mb-8">Get in touch with us for more information about our services.</p>
        <p className="text-3xl font-bold mb-4">
          <a href="tel:856-213-2737" className="hover:text-blue-200">📞 856-213-2737</a>
        </p>
        <p className="text-blue-100">Monday - Friday, 9:00 AM - 5:00 PM EST</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <p>&copy; 2026 Landis Medical Executives. All rights reserved.</p>
      </footer>
    </div>
  );
}
