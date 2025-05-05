
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfessionalSummary } from "@/components/ProfessionalSummary";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { GrantsSection } from "@/components/GrantsSection";
import { SupervisionSection } from "@/components/SupervisionSection";
import { AwardsSection } from "@/components/AwardsSection";
import { ContactMe } from "@/components/ContactMe";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Scroll to publications section when searching
    const publicationsSection = document.getElementById("publications");
    if (publicationsSection) {
      publicationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header onSearch={handleSearch} />
      
      <main className="flex-grow container mx-auto py-8 px-4">
        <ProfessionalSummary />
        <ExperienceSection />
        <PublicationsSection searchQuery={searchQuery} />
        <GrantsSection />
        <SupervisionSection />
        <AwardsSection />
        <ContactMe />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
