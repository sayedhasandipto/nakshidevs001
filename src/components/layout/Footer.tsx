import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#002045] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ServiceHub</h3>
            <p className="text-white/70 text-sm" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>আপনার সমস্ত ডিজিটাল সেবার এক-মুখী সমাধান।</p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">© 2024 ServiceHub. All rights reserved.</p>
          <div className="flex gap-3 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
