
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";

type PublicationType = "journal" | "conference" | "all";

interface Publication {
  id: number;
  type: "journal" | "conference";
  title: string;
  authors: string;
  venue: string;
  year: number;
  citation: string;
  doi: string;
  abstract: string;
  impactFactor?: number;
  featured?: boolean;
}

interface PublicationsSectionProps {
  searchQuery?: string;
}

export function PublicationsSection({ searchQuery = "" }: PublicationsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<PublicationType>("all");
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>(publications);

  useEffect(() => {
    const filtered = publications.filter(pub => {
      const matchesType = activeFilter === "all" || pub.type === activeFilter;
      const matchesSearch = searchQuery === "" || 
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) || 
        pub.abstract.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesType && matchesSearch;
    });
    
    setFilteredPublications(filtered);
  }, [activeFilter, searchQuery]);

  return (
    <section id="publications" className="mb-12">
      <h2 className="section-heading">Publications</h2>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 max-w-md mb-6">
          <TabsTrigger 
            value="all" 
            onClick={() => setActiveFilter("all")}
            className="data-[state=active]:bg-cv-primary data-[state=active]:text-white"
          >
            All Publications
          </TabsTrigger>
          <TabsTrigger 
            value="journal" 
            onClick={() => setActiveFilter("journal")}
            className="data-[state=active]:bg-cv-primary data-[state=active]:text-white"
          >
            Journal Articles
          </TabsTrigger>
          <TabsTrigger 
            value="conference" 
            onClick={() => setActiveFilter("conference")}
            className="data-[state=active]:bg-cv-primary data-[state=active]:text-white"
          >
            Conference Papers
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="space-y-4">
            {filteredPublications.map((publication) => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
            
            {filteredPublications.length === 0 && (
              <div className="text-center py-8">
                <p className="text-navy-light">No publications found matching your criteria.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="journal" className="mt-0">
          <div className="space-y-4">
            {filteredPublications
              .filter((pub) => pub.type === "journal")
              .map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))
            }
          </div>
        </TabsContent>
        
        <TabsContent value="conference" className="mt-0">
          <div className="space-y-4">
            {filteredPublications
              .filter((pub) => pub.type === "conference")
              .map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))
            }
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function PublicationCard({ publication }: { publication: Publication }) {
  const [showAbstract, setShowAbstract] = useState(false);
  
  return (
    <Card className={`animate-fade-in ${publication.featured ? 'border-cv-primary border-2' : ''}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant={publication.type === "journal" ? "default" : "outline"}>
                {publication.type === "journal" ? "Journal Article" : "Conference Paper"}
              </Badge>
              {publication.featured && (
                <div className="flex items-center gap-1 text-cv-primary">
                  <Star size={16} className="fill-cv-primary" />
                  <span className="text-xs font-medium">Featured</span>
                </div>
              )}
            </div>
            <CardTitle className="text-lg">{publication.title}</CardTitle>
            <CardDescription className="mt-1">{publication.authors}</CardDescription>
          </div>
          <div className="text-right">
            <span className="text-navy font-medium">{publication.year}</span>
            {publication.impactFactor && (
              <div className="mt-1">
                <Badge variant="secondary">Impact Factor: {publication.impactFactor}</Badge>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-navy-light">{publication.venue}</p>
        <p className="text-sm italic mt-2">{publication.citation}</p>
        
        {showAbstract && (
          <div className="mt-4 bg-cv-muted p-3 rounded-md">
            <h4 className="font-medium text-navy mb-2">Abstract</h4>
            <p className="text-sm">{publication.abstract}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowAbstract(!showAbstract)}
        >
          {showAbstract ? "Hide Abstract" : "Show Abstract"}
        </Button>
        <a 
          href={`https://doi.org/${publication.doi}`} 
          target="_blank" 
          rel="noreferrer"
          className="text-cv-primary hover:underline text-sm"
        >
          DOI: {publication.doi}
        </a>
      </CardFooter>
    </Card>
  );
}

const publications: Publication[] = [
  {
    id: 1,
    type: "journal",
    title: "Explainable Deep Learning for Medical Image Analysis: A Comprehensive Review",
    authors: "Wilson, J., Smith, A., Johnson, R., & Brown, T.",
    venue: "Journal of Medical AI",
    year: 2023,
    citation: "Wilson, J., Smith, A., Johnson, R., & Brown, T. (2023). Explainable Deep Learning for Medical Image Analysis: A Comprehensive Review. Journal of Medical AI, 45(3), 234-251.",
    doi: "10.1234/jmai.2023.45.3.234",
    abstract: "This paper provides a comprehensive review of explainable AI methods for medical image analysis. We categorize existing approaches, analyze their strengths and limitations, and propose a framework for evaluating explainability in clinical settings. Our analysis shows that while significant progress has been made, substantial challenges remain in creating truly interpretable models for critical healthcare applications.",
    impactFactor: 4.8,
    featured: true
  },
  {
    id: 2,
    type: "conference",
    title: "FastVision: Real-time Object Detection for Autonomous Vehicles Using Optimized Neural Architectures",
    authors: "Wilson, J., Zhang, L., & Martinez, E.",
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2023,
    citation: "Wilson, J., Zhang, L., & Martinez, E. (2023). FastVision: Real-time Object Detection for Autonomous Vehicles Using Optimized Neural Architectures. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pp. 4567-4576.",
    doi: "10.1109/cvpr.2023.457",
    abstract: "We present FastVision, a novel neural architecture optimized for real-time object detection in autonomous driving scenarios. Our approach achieves state-of-the-art accuracy while maintaining inference times under 15ms on standard hardware. Through comprehensive ablation studies and real-world testing in diverse conditions, we demonstrate robust performance improvements over existing methods, particularly in adverse weather and lighting situations.",
    featured: true
  },
  {
    id: 3,
    type: "journal",
    title: "Reinforcement Learning for Dynamic Resource Allocation in Cloud Computing Environments",
    authors: "Johnson, R., Wilson, J., & Kumar, P.",
    venue: "IEEE Transactions on Cloud Computing",
    year: 2022,
    citation: "Johnson, R., Wilson, J., & Kumar, P. (2022). Reinforcement Learning for Dynamic Resource Allocation in Cloud Computing Environments. IEEE Transactions on Cloud Computing, 14(2), 98-112.",
    doi: "10.1109/tcc.2022.3456789",
    abstract: "This paper proposes a novel reinforcement learning approach for optimizing resource allocation in dynamic cloud computing environments. We formulate the problem as a Markov Decision Process and develop a deep Q-learning solution that adapts to changing workloads. Our experiments on both simulated and real cloud platforms demonstrate a 27% improvement in resource utilization and a 15% reduction in energy consumption compared to conventional heuristic approaches.",
    impactFactor: 6.2
  },
  {
    id: 4,
    type: "conference",
    title: "AttentionMesh: A Transformer-Based Approach for 3D Mesh Understanding",
    authors: "Wilson, J., Taylor, S., & Roberts, F.",
    venue: "International Conference on Machine Learning (ICML)",
    year: 2022,
    citation: "Wilson, J., Taylor, S., & Roberts, F. (2022). AttentionMesh: A Transformer-Based Approach for 3D Mesh Understanding. In Proceedings of the 39th International Conference on Machine Learning (ICML), pp. 12345-12356.",
    doi: "10.1145/icml.2022.1234",
    abstract: "We introduce AttentionMesh, a novel transformer-based architecture for understanding and processing 3D meshes. Our method leverages self-attention mechanisms to capture global geometric relationships while maintaining computational efficiency. We evaluate our approach on multiple benchmark datasets for mesh classification, segmentation, and reconstruction tasks, achieving new state-of-the-art results. Additionally, we demonstrate the model's ability to transfer knowledge between domains with limited fine-tuning."
  },
  {
    id: 5,
    type: "journal",
    title: "Ethics and Bias in Machine Learning: A Systematic Framework for Fair AI Development",
    authors: "Wilson, J., Patel, N., & Robinson, C.",
    venue: "AI Ethics Journal",
    year: 2021,
    citation: "Wilson, J., Patel, N., & Robinson, C. (2021). Ethics and Bias in Machine Learning: A Systematic Framework for Fair AI Development. AI Ethics Journal, 5(1), 12-28.",
    doi: "10.2345/aiej.2021.5.1.12",
    abstract: "This paper presents a systematic framework for identifying, measuring, and mitigating bias in machine learning systems. We analyze the sources of algorithmic bias throughout the ML pipeline and propose interventions at each stage. Our framework is evaluated through case studies in hiring, criminal justice, and healthcare, demonstrating how technical solutions must be combined with policy considerations to achieve meaningful fairness improvements.",
    impactFactor: 3.5
  },
  {
    id: 6,
    type: "conference",
    title: "MultiModal-BERT: Joint Vision and Language Representation Learning",
    authors: "Chen, Y., Wilson, J., & Baker, A.",
    venue: "Association for Computational Linguistics (ACL)",
    year: 2021,
    citation: "Chen, Y., Wilson, J., & Baker, A. (2021). MultiModal-BERT: Joint Vision and Language Representation Learning. In Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics (ACL), pp. 3456-3467.",
    doi: "10.18653/acl.2021.3456",
    abstract: "We present MultiModal-BERT, a pre-trained model for joint vision and language representation learning. Our approach extends the BERT architecture to process both textual and visual inputs, creating aligned representations in a shared embedding space. Through extensive experiments on visual question answering, image captioning, and visual reasoning tasks, we demonstrate that our model outperforms single-modality approaches and previous multimodal systems. Analysis of the attention mechanisms reveals how the model learns to focus on relevant image regions based on textual context."
  },
  {
    id: 7,
    type: "journal",
    title: "Quantum Machine Learning: Algorithms, Applications and Limitations",
    authors: "Wilson, J., Garcia, M., & Quantum Research Team",
    venue: "Nature Quantum Information",
    year: 2020,
    citation: "Wilson, J., Garcia, M., & Quantum Research Team. (2020). Quantum Machine Learning: Algorithms, Applications and Limitations. Nature Quantum Information, 6, 125-140.",
    doi: "10.1038/s41534-020-0012-y",
    abstract: "This paper surveys the emerging field of quantum machine learning, focusing on both theoretical advancements and practical implementations. We examine quantum algorithms that offer potential speedups for classical machine learning tasks, analyze their implementation requirements on near-term quantum hardware, and critically evaluate current limitations. Our analysis suggests that while significant theoretical advantages exist, practical quantum advantage for machine learning remains challenging due to hardware constraints and the difficulty of quantum data loading.",
    impactFactor: 9.4
  },
  {
    id: 8,
    type: "conference",
    title: "Privacy-Preserving Federated Learning with Homomorphic Encryption",
    authors: "Wilson, J. & Security Research Group",
    venue: "USENIX Security Symposium",
    year: 2020,
    citation: "Wilson, J. & Security Research Group. (2020). Privacy-Preserving Federated Learning with Homomorphic Encryption. In Proceedings of the 29th USENIX Security Symposium, pp. 789-802.",
    doi: "10.5555/usenix.2020.789",
    abstract: "We propose a novel approach to privacy-preserving federated learning using partial homomorphic encryption. Our system enables multiple parties to collaboratively train machine learning models without revealing their raw data while maintaining model performance. We implement several optimization techniques to address the computational overhead of homomorphic operations and evaluate our approach on healthcare and financial datasets. Results show minimal accuracy degradation (less than 2%) compared to non-private baselines while providing formal privacy guarantees."
  }
];
