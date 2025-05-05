
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
    title: "Teaching Excellence Award",
    organization: "University of Technology",
    year: "2023",
    description: "Recognized for innovative teaching methods and outstanding student feedback.",
    category: "academic"
  },
  {
    title: "Best Paper Award",
    organization: "Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: "2023",
    description: "For the paper 'FastVision: Real-time Object Detection for Autonomous Vehicles'",
    category: "academic"
  },
  {
    title: "NSF CAREER Award",
    organization: "National Science Foundation",
    year: "2019",
    description: "Five-year grant to support early career faculty who exemplify the role of teacher-scholars.",
    category: "academic"
  },
  {
    title: "Rising Star in AI Research",
    organization: "AI Research Foundation",
    year: "2018",
    description: "Recognized as one of the top 50 early-career researchers in artificial intelligence.",
    category: "academic"
  },
  {
    title: "Outstanding Dissertation Award",
    organization: "Special Interest Group on AI, ACM",
    year: "2010",
    description: "Recognition for doctoral thesis on reinforcement learning algorithms.",
    category: "academic"
  },
  {
    title: "AI Innovator of the Year",
    organization: "TechCorp Industries",
    year: "2021",
    description: "For contributions to industrial applications of computer vision technology.",
    category: "industrial"
  },
  {
    title: "IEEE Senior Member",
    organization: "Institute of Electrical and Electronics Engineers",
    year: "2020",
    category: "industrial"
  },
  {
    title: "Certified TensorFlow Developer",
    organization: "Google",
    year: "2019",
    category: "industrial"
  },
  {
    title: "Innovation Excellence Award",
    organization: "National Association of Technology Professionals",
    year: "2022",
    category: "industrial"
  },
  {
    title: "Patent for 'Neural Network Architecture for Real-time Vision Processing'",
    organization: "US Patent Office",
    year: "2021",
    description: "Patent #US12345678",
    category: "industrial"
  },
  {
    title: "Patent for 'Method for Privacy-Preserving Machine Learning'",
    organization: "US Patent Office",
    year: "2020",
    description: "Patent #US87654321",
    category: "industrial"
  }
];
