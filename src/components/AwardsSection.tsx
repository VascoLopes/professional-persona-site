
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Award {
  title: string;
  organization: string;
  year: string;
  description?: string;
  category: "academic" | "industrial";
}

export function AwardsSection() {
  const academicAwards = awards.filter(award => award.category === "academic");
  const industrialAwards = awards.filter(award => award.category === "industrial");
  
  return (
    <section id="awards" className="mb-12">
      <h2 className="section-heading">Awards & Recognition</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="subsection-heading">Academic Awards</h3>
          <div className="space-y-3">
            {academicAwards.map((award, index) => (
              <AwardCard key={index} award={award} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="subsection-heading">Industrial Awards & Certifications</h3>
          <div className="space-y-3">
            {industrialAwards.map((award, index) => (
              <AwardCard key={index} award={award} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardCard({ award }: { award: Award }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-medium text-navy">{award.title}</h4>
          <Badge variant={award.category === "academic" ? "default" : "outline"}>
            {award.year}
          </Badge>
        </div>
        <p className="text-sm text-cv-primary mb-1">{award.organization}</p>
        {award.description && (
          <p className="text-sm text-navy-light">{award.description}</p>
        )}
      </CardContent>
    </Card>
  );
}

const awards: Award[] = [
  {
    title: "Smart Settlements & Urbanization",
    organization: "World Summit Awards Portugal",
    year: "2023",
    description: "1st place out of all national projects",
    category: "industrial"
  },
  {
    title: "Huawei and PT Academic Merit Award",
    organization: "Huawei & Portugal Telecom",
    year: "2022",
    description: "1st out of 3000 candidates",
    category: "academic"
  },
  {
    title: "1st Springer & ENNS Best Paper Award",
    organization: "ICANN Conference",
    year: "2021",
    description: "For the paper 'EPE-NAS: Efficient Performance Estimation Without Training for Neural Architecture Search'",
    category: "academic"
  },
  {
    title: "PhD Fellowship",
    organization: "Fundação para Ciência e Tecnologia",
    year: "2020",
    description: "10th out of 161 applicants",
    category: "academic"
  },
  {
    title: "Healthcare Solutions Innovation Award",
    organization: "HealthCup 2020",
    year: "2020",
    description: "1st out of 25 teams",
    category: "industrial"
  },
  {
    title: "BioHealth Hackathon Winner",
    organization: "BioHealth Hackathon",
    year: "2020",
    description: "1st out of 50 teams",
    category: "industrial"
  },
  {
    title: "Best National MSc Dissertation on Pattern Recognition",
    organization: "APRP (Portuguese Association for Pattern Recognition)",
    year: "2020",
    description: "1st nationwide",
    category: "academic"
  },
  {
    title: "Best Student Award - Masters Degree",
    organization: "University of Beira Interior",
    year: "2019",
    description: "1st out of 40 students",
    category: "academic"
  },
  {
    title: "Best Student Award - 1st year Masters",
    organization: "University of Beira Interior",
    year: "2018",
    description: "2nd out of 55 students",
    category: "academic"
  },
  {
    title: "HealthCup 2018 Winner",
    organization: "Healthcare Monitoring Solutions Competition",
    year: "2018",
    description: "1st out of 45 teams",
    category: "industrial"
  },
  {
    title: "Hack the Brain Winner",
    organization: "Brain-Computer Interface Hackathon",
    year: "2018",
    description: "2nd out of 40 teams",
    category: "industrial"
  },
  {
    title: "Portuguese ACM ICPC Contest",
    organization: "MIUP 2018",
    year: "2018",
    description: "Bronze medal (27th place)",
    category: "academic"
  },
  {
    title: "Best Student Award - Bachelors Conclusion",
    organization: "University of Beira Interior",
    year: "2017",
    category: "academic"
  },
  {
    title: "Best Student Award - 3rd year",
    organization: "University of Beira Interior",
    year: "2017",
    description: "1st out of 60 students",
    category: "academic"
  },
  {
    title: "Best Student Award - 2nd year",
    organization: "University of Beira Interior",
    year: "2016",
    description: "1st out of 65 students",
    category: "academic"
  },
  {
    title: "OutSystems Software Engineering Competition",
    organization: "OutSystems",
    year: "2016",
    description: "1st out of 70 teams",
    category: "industrial"
  },
  {
    title: "Karate National Championships",
    organization: "Portuguese Karate Federation",
    year: "2006-2013",
    description: "Multiple team and individual medals (1st, 2nd, 3rd)",
    category: "academic"
  }
];
