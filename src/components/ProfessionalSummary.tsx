
export function ProfessionalSummary() {
  return (
    <section id="summary" className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="rounded-lg overflow-hidden shadow-md mb-4">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Dr. Jane Wilson"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="font-medium mr-2">Email:</span>
                <a href="mailto:jane.wilson@university.edu" className="text-cv-primary hover:underline">
                  jane.wilson@university.edu
                </a>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Phone:</span>
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Address:</span>
                <span>Department of Computer Science<br />University of Technology<br />100 University Ave<br />Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="section-heading">Professional Summary</h2>
          <p className="mb-4">
            Associate Professor with over 15 years of experience in Artificial Intelligence and Machine Learning research. Specialized in developing novel algorithms for computer vision and natural language processing applications with a proven track record of securing competitive research grants and publishing in top-tier journals.
          </p>
          <p className="mb-4">
            I lead a research group of 12 graduate students and postdoctoral researchers, focusing on real-world applications of AI in healthcare and autonomous systems. My work bridges the gap between theoretical advancements and practical implementations through active industry collaborations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-cv-muted p-4 rounded-lg">
              <h3 className="font-semibold text-navy-light mb-2">Research Focus</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Computer Vision</li>
                <li>Natural Language Processing</li>
                <li>Reinforcement Learning</li>
                <li>Explainable AI</li>
                <li>AI Ethics</li>
              </ul>
            </div>
            <div className="bg-cv-muted p-4 rounded-lg">
              <h3 className="font-semibold text-navy-light mb-2">Career Highlights</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Published 45+ peer-reviewed papers</li>
                <li>Secured $2.5M+ in research funding</li>
                <li>IEEE Senior Member</li>
                <li>Best Paper Award, CVPR 2023</li>
                <li>University Teaching Excellence Award</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
