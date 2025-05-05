
export function ProfessionalSummary() {
  return (
    <section id="summary" className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="rounded-lg overflow-hidden shadow-md mb-4 max-w-[250px] mx-auto">
            <img
              src="public/lovable-uploads/c7ea4164-1a60-4760-a759-743729f0ba53.png"
              alt="Vasco Lopes"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="font-medium mr-2">Email:</span>
                <a href="mailto:vascoferrinholopes@gmail.com" className="text-cv-primary hover:underline">
                  vascoferrinholopes@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Phone:</span>
                <a href="tel:+351926472722" className="hover:underline">
                  +351 926472722
                </a>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Location:</span>
                <span>Portugal</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">LinkedIn:</span>
                <a href="https://linkedin.com/in/vasco-lopes" target="_blank" rel="noopener noreferrer" className="text-cv-primary hover:underline">
                  linkedin.com/in/vasco-lopes
                </a>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">GitHub:</span>
                <a href="https://github.com/VascoLopes" target="_blank" rel="noopener noreferrer" className="text-cv-primary hover:underline">
                  github.com/VascoLopes
                </a>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Scholar:</span>
                <a href="https://scholar.google.com/bvYBcRkAAAAJ" target="_blank" rel="noopener noreferrer" className="text-cv-primary hover:underline">
                  scholar.google.com/bvYBcRkAAAAJ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="section-heading">Professional Summary</h2>
          <h1 className="text-4xl font-semibold mb-4 text-navy">Vasco Lopes</h1>
          <p className="mb-4">
            Machine Learning and Computer Vision researcher with expertise in Neural Architecture Search and AI applications. 
            Currently the General Manager & Co-Founder at DeepNeuronic and Chief Technology Officer at CRIAM, with extensive research experience at Google Research and Huawei.
          </p>
          <p className="mb-4">
            PhD in Computer Science from Universidade da Beira Interior, with a focus on Computer Vision, Neural Architecture Search, and Machine Learning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-cv-muted p-4 rounded-lg">
              <h3 className="font-semibold text-navy-light mb-2">Research Focus</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Computer Vision</li>
                <li>Neural Architecture Search</li>
                <li>Deep Learning</li>
                <li>Machine Learning</li>
                <li>Action Recognition</li>
              </ul>
            </div>
            <div className="bg-cv-muted p-4 rounded-lg">
              <h3 className="font-semibold text-navy-light mb-2">Career Highlights</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Secured over 2M€ in funding</li>
                <li>World Summit Awards Portugal 2023</li>
                <li>1st Springer & ENNS Best Paper Award 2021</li>
                <li>PhD Fellowship by FCT</li>
                <li>Multiple Best Student Awards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
