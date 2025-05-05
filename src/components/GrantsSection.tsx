
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Grant {
  title: string;
  agency: string;
  role: string;
  period: string;
  amount: string;
  description: string;
  outcomes: string[];
  status: "completed" | "ongoing";
  progress?: number;
}

export function GrantsSection() {
  return (
    <section id="grants" className="mb-12">
      <h2 className="section-heading">Grants & Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {grants.map((grant, index) => (
          <Card key={index} className="h-full">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-navy">{grant.title}</h3>
                <Badge variant={grant.status === "completed" ? "outline" : "default"}>
                  {grant.status === "completed" ? "Completed" : "Ongoing"}
                </Badge>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-navy-light">Agency:</span>
                  <span className="font-medium">{grant.agency}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy-light">Role:</span>
                  <span className="font-medium">{grant.role}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy-light">Period:</span>
                  <span className="font-medium">{grant.period}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy-light">Amount:</span>
                  <span className="font-medium text-cv-primary">{grant.amount}</span>
                </div>
              </div>
              
              {grant.status === "ongoing" && grant.progress && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{grant.progress}%</span>
                  </div>
                  <Progress value={grant.progress} className="h-2" />
                </div>
              )}
              
              <p className="text-sm text-navy-light mb-4">{grant.description}</p>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Key Outcomes:</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {grant.outcomes.map((outcome, i) => (
                    <li key={i} className="text-navy-light">{outcome}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const grants: Grant[] = [
  {
    title: "DeepNeuronic PI",
    agency: "CENTRO-01-0247-FEDER-113023",
    role: "Principal Investigator",
    period: "2020-2023",
    amount: "522,650.22€",
    description: "Development of an automated and autonomous CCTV action recognition system.",
    outcomes: [
      "Created automated CCTV action recognition system",
      "Implemented real-time processing for security footage",
      "Developed custom neural architecture for action detection",
      "Deployed solutions in real-world security environments"
    ],
    status: "completed"
  },
  {
    title: "A1 Benchmarking CNNs for Neural Architecture Search Development",
    agency: "CPCA/A1/468306/2021",
    role: "Co-Principal Investigator",
    period: "2021-2022",
    amount: "HPC Computing (100000 CPU and 2190 GPU hours)",
    description: "Using HPC computation to benchmark AutoML methods and neural networks.",
    outcomes: [
      "Benchmarked various AutoML methods",
      "Evaluated performance across different neural network architectures",
      "Optimized computational efficiency for neural architecture search",
      "Published results in high-impact journals"
    ],
    status: "completed"
  },
  {
    title: "A0 Benchmarking CNNs for Neural Architecture Search Development",
    agency: "CPCA/A0/396969/2021",
    role: "Co-Principal Investigator",
    period: "2021-2022",
    amount: "HPC Computing (15000 CPU and 350 GPU hours)",
    description: "Using HPC computation to benchmark AutoML methods and neural networks.",
    outcomes: [
      "Extended previous benchmarking with additional models",
      "Analyzed computational efficiency of various architectures",
      "Created standardized evaluation protocols",
      "Shared results with research community"
    ],
    status: "completed"
  },
  {
    title: "RobotChain",
    agency: "Tezos Foundation",
    role: "Member",
    period: "2018-2020",
    amount: "37k€",
    description: "Creation and development of a blockchain, based on Tezos, for robots to be used in factories.",
    outcomes: [
      "Developed blockchain system for factory robots",
      "Implemented secure communication between robotic systems",
      "Created anomaly detection for robot operations",
      "Demonstrated feasibility in industrial settings"
    ],
    status: "completed"
  },
  {
    title: "μPATO: Ultimate Performance Analysis Tool",
    agency: "UID/EEA/50008/2013",
    role: "Member",
    period: "2013-2015",
    amount: "130k€",
    description: "Innovating match analysis in team sports by generating GPS and matrix data with network metrics calculations.",
    outcomes: [
      "Developed tools for sports match analysis",
      "Implemented GPS tracking and data visualization",
      "Created network analysis for team performance",
      "Deployed solutions for professional sports teams"
    ],
    status: "completed"
  }
];
