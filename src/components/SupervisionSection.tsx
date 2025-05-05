
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Student {
  name: string;
  title: string;
  year: string;
  status: "completed" | "ongoing";
  achievements?: string;
}

export function SupervisionSection() {
  return (
    <section id="supervision" className="mb-12">
      <h2 className="section-heading">Supervision Experience</h2>
      
      <Tabs defaultValue="phd" className="w-full">
        <TabsList className="grid grid-cols-3 max-w-md mb-6">
          <TabsTrigger 
            value="phd" 
            className="data-[state=active]:bg-cv-primary data-[state=active]:text-white"
          >
            PhD Students
          </TabsTrigger>
          <TabsTrigger 
            value="masters" 
            className="data-[state=active]:bg-cv-primary data-[state=active]:text-white"
          >
            Master's Students
          </TabsTrigger>
          <TabsTrigger 
            value="undergrad" 
            className="data-[state=active]:bg-cv-primary data-[state=active]:text-white"
          >
            Undergraduate
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="phd" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {phdStudents.map((student, index) => (
              <StudentCard key={index} student={student} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="masters" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mastersStudents.map((student, index) => (
              <StudentCard key={index} student={student} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="undergrad" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {undergradStudents.map((student, index) => (
              <StudentCard key={index} student={student} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function StudentCard({ student }: { student: Student }) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between mb-2">
        <h4 className="font-medium text-navy">{student.name}</h4>
        <span className={`text-sm ${student.status === "completed" ? "text-green-600" : "text-cv-secondary"}`}>
          {student.status === "completed" ? "Completed" : "Ongoing"}
        </span>
      </div>
      <p className="text-sm text-navy-light mb-1">{student.title}</p>
      <p className="text-sm mb-2">{student.year}</p>
      {student.achievements && (
        <p className="text-xs text-navy-light italic">{student.achievements}</p>
      )}
    </Card>
  );
}

const phdStudents: Student[] = [
  {
    name: "Sarah Johnson",
    title: "Deep Reinforcement Learning for Adaptive Robotic Control",
    year: "2018-2022",
    status: "completed",
    achievements: "Now Assistant Professor at Carnegie Mellon University"
  },
  {
    name: "Michael Zhang",
    title: "Explainable Computer Vision for Medical Applications",
    year: "2019-2023",
    status: "completed",
    achievements: "Best Dissertation Award, 2023"
  },
  {
    name: "Elena Rodriguez",
    title: "Privacy-Preserving Methods for Federated Learning",
    year: "2020-Present",
    status: "ongoing",
    achievements: "Google PhD Fellowship 2022"
  },
  {
    name: "David Kim",
    title: "Transformer-Based Architectures for Multimodal Understanding",
    year: "2021-Present",
    status: "ongoing"
  },
  {
    name: "Aisha Patel",
    title: "Computational Methods for Fair Machine Learning Systems",
    year: "2019-2023",
    status: "completed",
    achievements: "Now Research Scientist at Microsoft Research"
  },
  {
    name: "James Wilson",
    title: "Neural Architecture Search for Resource-Constrained Environments",
    year: "2022-Present",
    status: "ongoing"
  }
];

const mastersStudents: Student[] = [
  {
    name: "Carlos Mendes",
    title: "Efficient Implementation of Vision Transformers on Edge Devices",
    year: "2021-2022",
    status: "completed",
    achievements: "Paper accepted at CVPR 2023"
  },
  {
    name: "Priya Sharma",
    title: "Transfer Learning for Low-Resource NLP Applications",
    year: "2020-2021",
    status: "completed",
    achievements: "Joined Amazon AI as Applied Scientist"
  },
  {
    name: "Thomas Anderson",
    title: "Reinforcement Learning for Resource Management in Cloud Computing",
    year: "2022-2023",
    status: "completed"
  },
  {
    name: "Grace Liu",
    title: "Few-Shot Learning for Medical Image Segmentation",
    year: "2023-Present",
    status: "ongoing"
  },
  {
    name: "Raj Patel",
    title: "Adversarial Robustness of Computer Vision Systems",
    year: "2023-Present",
    status: "ongoing"
  },
  {
    name: "Olivia Martinez",
    title: "Knowledge Distillation for Efficient Deep Learning Models",
    year: "2022-2023",
    status: "completed",
    achievements: "Now PhD student at UC Berkeley"
  },
  {
    name: "William Jackson",
    title: "Autonomous Drone Navigation Using Reinforcement Learning",
    year: "2023-Present",
    status: "ongoing"
  },
  {
    name: "Emma Thompson",
    title: "Multimodal Sentiment Analysis for Social Media Content",
    year: "2021-2022",
    status: "completed"
  }
];

const undergradStudents: Student[] = [
  {
    name: "Jason Lee",
    title: "Web-Based Tool for Visualizing Neural Network Decisions",
    year: "2022",
    status: "completed",
    achievements: "Undergraduate Research Award"
  },
  {
    name: "Maya Johnson",
    title: "Evaluating Bias in Language Models for Healthcare Applications",
    year: "2023",
    status: "completed",
    achievements: "Now graduate student at MIT"
  },
  {
    name: "Tyler Robinson",
    title: "Mobile App for Accessible AI Education",
    year: "2022",
    status: "completed"
  },
  {
    name: "Sophia Chen",
    title: "Benchmark Dataset for Emotion Recognition in Conversation",
    year: "2023-Present",
    status: "ongoing"
  },
  {
    name: "Daniel Garcia",
    title: "Comparing Traditional ML and Deep Learning for Time Series Forecasting",
    year: "2023",
    status: "completed"
  },
  {
    name: "Amelia Wright",
    title: "Human Activity Recognition Using Smartphone Sensors",
    year: "2023-Present",
    status: "ongoing"
  }
];
