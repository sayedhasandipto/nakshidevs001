export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full px-6 py-4 max-w-5xl mx-auto bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-[#002045]">GovService BD</h1>
      </div>
      
      <nav className="hidden lg:flex items-center gap-8">
        <a className="text-sm font-medium text-[#002045] border-b-2 border-[#002045] pb-1" href="/">Home</a>
        <a className="text-sm font-medium text-gray-600 hover:text-[#002045] transition-colors" href="/gov-services">Gov Services</a>
        <a className="text-sm font-medium text-gray-600 hover:text-[#002045] transition-colors" href="#business">Business Solutions</a>
        <a className="text-sm font-medium text-gray-600 hover:text-[#002045] transition-colors" href="#webdev">Web Dev</a>
        <a className="text-sm font-medium text-gray-600 hover:text-[#002045] transition-colors" href="#about">About</a>
      </nav>
      
      <button className="hidden md:flex items-center px-6 py-2 bg-[#002045] text-white rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors">
        Track Application
      </button>
      <button className="lg:hidden p-2 text-gray-600">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
