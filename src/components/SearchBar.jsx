import { Search, SortAsc } from "lucide-react";

const SearchBar = ({ query, onSearch, sortOrder, onSort, resultCount }) => (
  <div className="no-print flex flex-col sm:flex-row gap-3 items-center justify-between bg-white shadow-sm border border-gray-200 rounded-xl px-4 py-3 mb-6">
    <div className="relative w-full sm:w-auto flex-1">
      <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search by name or email..."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="flex items-center gap-2">
      <SortAsc size={18} className="text-gray-500" />
      <select
        value={sortOrder}
        onChange={(e) => onSort(e.target.value)}
        className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="default">Sort: Default</option>
        <option value="name">Sort: Name (A–Z)</option>
        <option value="company">Sort: Company (A–Z)</option>
      </select>
      <span className="text-sm text-gray-500 whitespace-nowrap">{resultCount} result{resultCount !== 1 ? "s" : ""}</span>
    </div>
  </div>
);

export default SearchBar;