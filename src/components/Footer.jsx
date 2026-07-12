import { Link } from "react-router";

const categories = [
  "Smartphones",
  "Laptops",
  "Audio",
  "Wearables",
  "Accessories",
];

const socials = [
  {
    name: "Facebook",
    href: "#",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.94 8.44-9.94Z",
  },
  {
    name: "Twitter",
    href: "#",
    path: "M22 5.9c-.74.33-1.54.55-2.37.65a4.13 4.13 0 0 0 1.81-2.28c-.8.47-1.69.81-2.63 1a4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.16 4.6a4.1 4.1 0 0 0 1.27 5.47 4.07 4.07 0 0 1-1.86-.51 4.1 4.1 0 0 0 3.29 4.07 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.4a11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.18 8.18 0 0 0 22 5.9Z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 2.2c2.7 0 3 .01 4.06.06 1.07.05 1.8.22 2.43.46.66.26 1.14.6 1.64 1.1.5.5.84.98 1.1 1.64.24.63.41 1.36.46 2.43.05 1.05.06 1.36.06 4.06s-.01 3-.06 4.06c-.05 1.07-.22 1.8-.46 2.43a4.6 4.6 0 0 1-1.1 1.64c-.5.5-.98.84-1.64 1.1-.63.24-1.36.41-2.43.46-1.06.05-1.36.06-4.06.06s-3-.01-4.06-.06c-1.07-.05-1.8-.22-2.43-.46a4.6 4.6 0 0 1-1.64-1.1 4.6 4.6 0 0 1-1.1-1.64c-.24-.63-.41-1.36-.46-2.43C2.21 15 2.2 14.7 2.2 12s.01-3 .06-4.06c.05-1.07.22-1.8.46-2.43.26-.66.6-1.14 1.1-1.64.5-.5.98-.84 1.64-1.1.63-.24 1.36-.41 2.43-.46C8.99 2.21 9.3 2.2 12 2.2Zm0 1.8c-2.66 0-2.97.01-4.02.06-.87.04-1.34.18-1.65.31-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.13.31-.27.78-.31 1.65C4.29 9 4.28 9.31 4.28 12s.01 2.97.06 4.02c.04.87.18 1.34.31 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.13.78.27 1.65.31 1.05.05 1.36.06 4.02.06s2.97-.01 4.02-.06c.87-.04 1.34-.18 1.65-.31.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.13-.31.27-.78.31-1.65.05-1.05.06-1.36.06-4.02s-.01-2.97-.06-4.02c-.04-.87-.18-1.34-.31-1.65a2.8 2.8 0 0 0-.66-1.02 2.8 2.8 0 0 0-1.02-.66c-.31-.13-.78-.27-1.65-.31-1.05-.05-1.36-.06-4.02-.06Zm0 3.27a4.73 4.73 0 1 1 0 9.46 4.73 4.73 0 0 1 0-9.46Zm0 1.8a2.93 2.93 0 1 0 0 5.86 2.93 2.93 0 0 0 0-5.86Zm5.5-2.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z",
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">
            Electro<span className="text-blue-500">Store</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Your one-stop shop for the latest electronics — phones, laptops,
            audio gear and more, delivered to your door.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category}>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm text-slate-400 mb-4">
            Subscribe to get special offers and the latest product drops.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm rounded-l-md bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium rounded-r-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} ElectroStore. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
