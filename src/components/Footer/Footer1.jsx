import React from "react";

const Footer1 = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm">
              We are committed to providing the best products at unbeatable
              prices. Our mission is to enhance your shopping experience with
              exceptional service.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="/" className="hover:text-yellow-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-yellow-500">
                  Products
                </a>
              </li>
              <li>
                <a href="/stores" className="hover:text-yellow-500">
                  Stores
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">
              1234 Store St, Suite 100
              <br />
              City, State, 12345
            </p>
            <p className="text-sm">Email: support@mystore.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-yellow-500">
                Facebook
              </a>
              <a href="https://twitter.com" className="hover:text-yellow-500">
                Twitter
              </a>
              <a href="https://instagram.com" className="hover:text-yellow-500">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm">
            © {new Date().getFullYear()} MyStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
