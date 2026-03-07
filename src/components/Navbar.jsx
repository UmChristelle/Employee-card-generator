import { Printer } from "lucide-react";

const Navbar = ({ onPrintAll }) => {
  return (
    <nav className="no-print bg-gradient-to-r from-blue-700 to-indigo-800 text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">🏢 Employee Directory</h1>
        <p className="text-blue-200 text-sm">Dynamic Employee Card Generator</p>
      </div>
      <button
        onClick={onPrintAll}
        className="flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition"
      >
        <Printer size={18} />
        Print All
      </button>
    </nav>
  );
};

export default Navbar;