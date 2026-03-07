import { useState, useMemo } from "react";
import useEmployees from "./hooks/useEmployees";
import EmployeeCard from "./components/EmployeeCard";
import SkeletonCard from "./components/SkeletonCard";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";

const App = () => {
  const { employees, loading, error } = useEmployees();
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const filtered = useMemo(() => {
    let result = employees.filter(
      ({ name, email }) =>
        name.toLowerCase().includes(query.toLowerCase()) ||
        email.toLowerCase().includes(query.toLowerCase())
    );
    if (sortOrder === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sortOrder === "company") result = [...result].sort((a, b) => a.company.name.localeCompare(b.company.name));
    return result;
  }, [employees, query, sortOrder]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
      <Navbar onPrintAll={() => window.print()} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Stats Banner */}
        {!loading && !error && (
          <div className="mb-6 text-center">
            <p className="text-blue-300 text-sm tracking-widest uppercase font-semibold">
              Total Employees: <span className="text-white font-bold text-lg">{employees.length}</span>
            </p>
          </div>
        )}

        {!loading && !error && (
          <SearchBar
            query={query}
            onSearch={setQuery}
            sortOrder={sortOrder}
            onSort={setSortOrder}
            resultCount={filtered.length}
          />
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-400 text-lg font-semibold">⚠️ {error}</p>
            <p className="text-slate-400 text-sm mt-1">Please check your connection and try again.</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {loading
            ? [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
            : filtered.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
              ))}
        </div>

        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-lg font-medium">No employees found</p>
            <p className="text-sm">Try searching with a different name or email.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-slate-500 text-xs">
        © 2026 Employee Directory 
      </footer>
    </div>
  );
};

export default App;