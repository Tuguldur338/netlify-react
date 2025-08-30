const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 px-8 py-10 h-[500px]">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <h2 className="text-white text-lg font-semibold mb-6">
          Questions? Contact us.
        </h2>

        {/* Footer links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            Help Center
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>

        {/* Small print */}
        <p className="text-xs text-gray-500">
          &copy; 2025 Netlify, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
