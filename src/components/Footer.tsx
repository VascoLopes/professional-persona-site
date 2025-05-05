
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-6 mt-12 print:hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Dr. Jane Wilson. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-cv-secondary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-cv-secondary transition-colors">
              Google Scholar
            </a>
            <a href="#" className="hover:text-cv-secondary transition-colors">
              ResearchGate
            </a>
            <a href="#" className="hover:text-cv-secondary transition-colors">
              ORCID
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
