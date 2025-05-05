
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industrialExperiences.map((exp, index) => (
            <Card key={index} className="p-5 h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-col justify-between mb-2">
                    <h4 className="font-semibold text-lg text-navy">{exp.position}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-cv-primary font-medium">{exp.company}</span>
                      <span className="text-cv-secondary text-sm">{exp.dates}</span>
                    </div>
                  </div>
                  <p className="text-navy-light mb-3 text-sm">{exp.location}</p>
                  <p className="text-navy-light mb-3">{exp.description}</p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="achievements">
                    <AccordionTrigger className="text-sm text-cv-primary">
                      Key Achievements
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-navy-light text-sm">{achievement}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Academic Experience */}
      <div>
        <h3 className="subsection-heading">Academic Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {academicExperiences.map((exp, index) => (
            <Card key={index} className="p-5 h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-col justify-between mb-2">
                    <h4 className="font-semibold text-lg text-navy">{exp.position}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-cv-primary font-medium">{exp.institution}</span>
                      <span className="text-cv-secondary text-sm">{exp.dates}</span>
                    </div>
                  </div>
                  <p className="text-navy-light mb-3 text-sm">{exp.location}</p>
                  <p className="text-navy-light mb-3">{exp.description}</p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="responsibilities">
                    <AccordionTrigger className="text-sm text-cv-primary">
                      Responsibilities & Accomplishments
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-navy-light text-sm">{responsibility}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const industrialExperiences = [
  {
    position: "General Manager & Co-Founder",
    company: "DeepNeuronic",
    dates: "Jun. 2020 - Present",
    location: "Portugal",
    description: "Leading a team of 12 people in all business aspects, developing computer vision algorithms that perform in-the-wild real-time action recognition.",
    achievements: [
      "Secured over 2M€ in funding",
      "Managing a team of 12 people across all business aspects",
      "Responsible for development of computer vision algorithms",
      "Lead the development of all sales and software strategies"
    ]
  },
  {
    position: "Chief Technology Officer",
    company: "CRIAM",
    dates: "Jan. 2022 - Present",
    location: "Portugal",
    description: "Responsible for the software team and machine learning pipelines. Built blood-typing analysis using Computer Vision with exceptional performance.",
    achievements: [
      "Responsible for the software team, including hardware and machine learning pipelines",
      "Built blood-typing analysis using Computer Vision",
      "Achieved 99.79% accuracy in real-world trials",
      "Implemented fast classification in under 3 minutes using low-powered computation"
    ]
  },
  {
    position: "Research Scientist",
    company: "Google Research",
    dates: "Sept. 2022 - Dec. 2022",
    location: "Zurich, Switzerland",
    description: "Developed an on-device message retrieval model with top-5 retrieval performance and designed systems for query-message tasks.",
    achievements: [
      "Developed on-device message retrieval model with >70% performance",
      "Achieved mean latency of 0.1 seconds",
      "Designed and used LLMs to generate synthetic datasets for query-message tasks",
      "Designed a two-tower model to map query-answers to feature space using ScaNN"
    ]
  },
  {
    position: "Machine Learning Researcher",
    company: "Huawei Noah's Ark",
    dates: "Mar. 2022 - Sept. 2022",
    location: "London, United Kingdom",
    description: "Worked on improving computer vision methods using large pre-trained models as feature extractors.",
    achievements: [
      "Worked on improving computer vision methods using large pre-trained models",
      "Developed NAS-Model ZOO for autonomous combination of models",
      "Improved current best methods' accuracy by 3.7% using neural architecture search",
      "Created novel feature extraction methods for vision tasks"
    ]
  },
  {
    position: "Machine Learning Researcher",
    company: "Huawei R&D Center",
    dates: "Oct. 2021 - Jan. 2022",
    location: "Paris, France",
    description: "Developed anomaly detection systems using neural architecture search for time-sensitive data.",
    achievements: [
      "Developed anomaly detection systems using neural architecture search",
      "Created algorithms capable of detecting 85% of 5G antennas anomalies in real-time",
      "Implemented efficient processing for time-sensitive data",
      "Designed novel architecture search methods for anomaly detection"
    ]
  },
  {
    position: "Computer Vision Engineer",
    company: "Stellantis (PSA Group) & UBI",
    dates: "Nov. 2019 - Oct. 2020",
    location: "Covilhã, Portugal",
    description: "Responsible for developing automated car defect detection systems using CV and building auto-classification systems.",
    achievements: [
      "Responsible for developing automated car defect detection systems",
      "Built Auto-Classifier in PyTorch, complementing CNNs by automatically designing new classification components",
      "Achieved 100% defect detection in controlled environments",
      "Implemented real-time processing for assembly line inspection"
    ]
  }
];

const academicExperiences = [
  {
    position: "Invited Professor",
    institution: "University of Beira Interior",
    dates: "Sept. 2019 - Present",
    location: "Covilhã, Portugal",
    description: "Responsible for practical lessons in Programming I, Functional Programming, Multimedia I, and Multimedia II courses.",
    responsibilities: [
      "Teaching Programming I practical lessons",
      "Leading Functional Programming tutorials",
      "Guiding students in Multimedia I and II projects",
      "Developing course materials and assessments",
      "Mentoring undergraduate students"
    ]
  },
  {
    position: "Machine Learning Engineer",
    institution: "TEZOS & UBI",
    dates: "Oct. 2018 - Nov. 2019",
    location: "Covilhã, Portugal",
    description: "Worked on the RobotChain project to automate factories using blockchain and machine learning (Master thesis project).",
    responsibilities: [
      "Worked on the RobotChain project for factory automation",
      "Developed methods leveraging blockchain and ML to detect anomalies",
      "Created systems for people and physical space violation detection",
      "Implemented automatic robot control mechanisms",
      "Integrated blockchain for secure data handling"
    ]
  },
  {
    position: "Software Developer",
    institution: "Instituto de Telecomunicações (IT)",
    dates: "Oct. 2017 - Sept. 2018",
    location: "Covilhã, Portugal",
    description: "Optimized API and back-end implementations, reducing processing time by 80%, and developed Android applications.",
    responsibilities: [
      "Optimized API and back-end by implementing guidelines and graph algorithms",
      "Reduced processing time by 80% using Python & Java",
      "Developed Android application for social network analysis",
      "Created graph entropy metrics for social networks",
      "Published 3 research papers from this work"
    ]
  }
];
