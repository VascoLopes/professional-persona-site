
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onSearch: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm print:hidden">
      <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-navy">
            <a href="#" className="hover:text-cv-primary transition-colors">
              Dr. Jane Wilson
            </a>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search publications..."
              className="py-1 pl-3 pr-8 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-cv-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-navy-light"
            >
              <Search size={16} />
            </button>
          </form>
          <Button onClick={handlePrint} variant="outline" className="no-print">
            Print CV
          </Button>
        </div>
      </div>
    </header>
  );
}
