
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
    title: "Explainable AI for Medical Diagnostics",
    agency: "National Institutes of Health (NIH)",
    role: "Principal Investigator",
    period: "2021-2024",
    amount: "$1,250,000",
    description: "Developing interpretable deep learning models for medical image analysis with a focus on radiological applications.",
    outcomes: [
      "Created novel attention-based architecture for X-ray analysis",
      "Reduced false negative rate by 35% compared to previous methods",
      "Published 5 papers in top medical imaging journals",
      "Developed open-source library for medical AI transparency"
    ],
    status: "ongoing",
    progress: 65
  },
  {
    title: "Privacy-Preserving Machine Learning",
    agency: "National Science Foundation (NSF)",
    role: "Principal Investigator",
    period: "2019-2022",
    amount: "$850,000",
    description: "Researched techniques for training machine learning models on sensitive data while maintaining privacy guarantees.",
    outcomes: [
      "Developed federated learning approach with differential privacy",
      "Demonstrated practical implementation in healthcare setting",
      "Released privacy-preserving ML toolkit used by 15+ organizations",
      "Trained 3 PhD students who secured industry research positions"
    ],
    status: "completed"
  },
  {
    title: "Autonomous Systems Safety Verification",
    agency: "Department of Transportation",
    role: "Co-Principal Investigator",
    period: "2020-2023",
    amount: "$750,000",
    description: "Creating formal verification methods for neural network-based autonomous driving systems.",
    outcomes: [
      "Built framework for safety verification of perception systems",
      "Identified critical edge cases in existing autonomous vehicles",
      "Collaborated with major automotive manufacturer on implementation",
      "Presented findings to transportation safety board"
    ],
    status: "ongoing",
    progress: 80
  },
  {
    title: "Natural Language Understanding for Human-Robot Interaction",
    agency: "DARPA",
    role: "Co-Principal Investigator",
    period: "2018-2021",
    amount: "$1,100,000",
    description: "Developed advanced NLP capabilities for robots to understand complex human instructions in dynamic environments.",
    outcomes: [
      "Created contextual language understanding system for robots",
      "Achieved 87% accuracy in understanding ambiguous commands",
      "Demonstrated system at DARPA Robotics Challenge",
      "Filed 2 patents for innovation in human-robot communication"
    ],
    status: "completed"
  },
  {
    title: "Industry-Academia Partnership for AI Innovation",
    agency: "TechCorp Industries",
    role: "Principal Investigator",
    period: "2022-2025",
    amount: "$950,000",
    description: "Collaborative research program to bridge theoretical advancements with practical industrial applications of AI.",
    outcomes: [
      "Established joint research lab with industry partner",
      "Created student internship pipeline with 8 placements",
      "Developed 3 technologies being integrated into products",
      "Organized annual industry-academia AI symposium"
    ],
    status: "ongoing",
    progress: 35
  },
  {
    title: "Advanced Reinforcement Learning for Robotics",
    agency: "Office of Naval Research",
    role: "Senior Researcher",
    period: "2017-2020",
    amount: "$680,000",
    description: "Investigated reinforcement learning techniques for robotic control in uncertain and dynamic environments.",
    outcomes: [
      "Developed sample-efficient RL algorithms for robotic manipulation",
      "Reduced training time by 70% while improving performance",
      "Published influential paper with 500+ citations",
      "Transitioned technology to practical robotic systems"
    ],
    status: "completed"
  }
];
