
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-12">
      <h2 className="section-heading">Experience</h2>
      
      {/* Industrial Experience */}
      <div className="mb-8">
        <h3 className="subsection-heading">Industrial Experience</h3>
        <div className="space-y-4">
          {industrialExperiences.map((exp, index) => (
            <Card key={index} className="p-5">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="font-semibold text-lg text-navy">{exp.position}</h4>
                <span className="text-cv-secondary font-medium">{exp.dates}</span>
              </div>
              <p className="text-navy-light mb-3">{exp.company}</p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="achievements">
                  <AccordionTrigger className="text-sm text-cv-primary">
                    Key Achievements
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-navy-light">{achievement}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Academic Experience */}
      <div>
        <h3 className="subsection-heading">Academic Experience</h3>
        <div className="space-y-4">
          {academicExperiences.map((exp, index) => (
            <Card key={index} className="p-5">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="font-semibold text-lg text-navy">{exp.position}</h4>
                <span className="text-cv-secondary font-medium">{exp.dates}</span>
              </div>
              <p className="text-navy-light mb-3">{exp.institution}</p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="responsibilities">
                  <AccordionTrigger className="text-sm text-cv-primary">
                    Responsibilities & Accomplishments
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="text-navy-light">{responsibility}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const industrialExperiences = [
  {
    position: "AI Research Consultant",
    company: "TechCorp Industries",
    dates: "2019 - Present",
    achievements: [
      "Led a team of 5 researchers in developing novel computer vision algorithms for autonomous vehicle perception systems",
      "Improved object detection accuracy by 18% through advanced neural network architecture design",
      "Filed 2 patents for innovative machine learning techniques in real-time object tracking",
      "Presented findings at industry conferences, establishing TechCorp as a leader in AI research",
    ]
  },
  {
    position: "Senior Machine Learning Engineer",
    company: "DataSmart Solutions",
    dates: "2016 - 2019",
    achievements: [
      "Designed and implemented production-grade machine learning pipelines for financial fraud detection",
      "Reduced false positive rates by 35% while maintaining high recall of actual fraud cases",
      "Mentored junior engineers and established best practices for model deployment and monitoring",
      "Collaborated with cross-functional teams to integrate ML solutions with existing business processes"
    ]
  },
  {
    position: "Research Scientist",
    company: "Global AI Research Lab",
    dates: "2012 - 2016",
    achievements: [
      "Conducted fundamental research in natural language processing techniques",
      "Developed novel attention mechanism for language models, improving performance by 12%",
      "Published 6 papers in top-tier conferences (ACL, EMNLP) with industry applications",
      "Created open-source libraries for efficient NLP model training, adopted by over 500 organizations"
    ]
  }
];

const academicExperiences = [
  {
    position: "Associate Professor",
    institution: "University of Technology, Department of Computer Science",
    dates: "2018 - Present",
    responsibilities: [
      "Direct the Intelligent Systems Research Group with 12 graduate students and post-docs",
      "Secured over $1.8M in competitive research grants from NSF, NIH, and industry partners",
      "Teach graduate and undergraduate courses in Machine Learning and AI",
      "Serve on university research committee and departmental curriculum development team",
      "Collaborate with medical school on AI applications for diagnostic imaging"
    ]
  },
  {
    position: "Assistant Professor",
    institution: "University of Technology, Department of Computer Science",
    dates: "2012 - 2018",
    responsibilities: [
      "Established new research direction in explainable AI for the department",
      "Advised 8 PhD students and 15 Master's students to successful completion",
      "Developed new curriculum for undergraduate AI specialization",
      "Secured initial funding of $700K through early career research grants",
      "Published 22 peer-reviewed papers in leading journals and conferences"
    ]
  },
  {
    position: "Postdoctoral Researcher",
    institution: "National Research Institute for Artificial Intelligence",
    dates: "2010 - 2012",
    responsibilities: [
      "Conducted research on reinforcement learning algorithms for robotic control",
      "Collaborated with international researchers on multi-agent systems",
      "Mentored graduate students in research methodologies",
      "Published 7 papers in premier AI venues (ICML, NeurIPS)",
      "Participated in grant writing, securing $450K for continued research"
    ]
  }
];
