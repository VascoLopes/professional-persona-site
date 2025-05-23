
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="mb-12">
      <h2 className="section-heading">Contact Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-4">
          <Card className="p-6">
            <h3 className="font-semibold text-lg text-navy mb-4">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-cv-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-cv-primary" />
                </div>
                <div>
                  <p className="text-sm text-navy-light">Email</p>
                  <a href="mailto:vascoferrinholopes@gmail.com" className="text-navy hover:text-cv-primary transition-colors">
                    vascoferrinholopes@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-cv-primary/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-cv-primary" />
                </div>
                <div>
                  <p className="text-sm text-navy-light">Phone</p>
                  <a href="tel:+351926472722" className="text-navy hover:text-cv-primary transition-colors">
                    +351 926472722
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-cv-primary/10 p-2 rounded-full">
                  <Linkedin className="h-5 w-5 text-cv-primary" />
                </div>
                <div>
                  <p className="text-sm text-navy-light">LinkedIn</p>
                  <a href="https://linkedin.com/in/vasco-lopes" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-cv-primary transition-colors">
                    linkedin.com/in/vasco-lopes
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-cv-primary/10 p-2 rounded-full">
                  <Github className="h-5 w-5 text-cv-primary" />
                </div>
                <div>
                  <p className="text-sm text-navy-light">GitHub</p>
                  <a href="https://github.com/VascoLopes" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-cv-primary transition-colors">
                    github.com/VascoLopes
                  </a>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-semibold text-lg text-navy mb-4">Location</h3>
            <p className="text-navy-light mb-2">Based in</p>
            <p className="text-navy">Portugal</p>
            <p className="text-navy-light mt-4 mb-2">Available for</p>
            <p className="text-navy">Remote work</p>
            <p className="text-navy">Consulting opportunities</p>
            <p className="text-navy">Research collaborations</p>
            <p className="text-navy">Guest lectures</p>
          </Card>
        </div>
        
        <Card className="p-6 md:col-span-2">
          <h3 className="font-semibold text-lg text-navy mb-4">Send a Message</h3>
          
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
              <p className="text-green-700 font-medium">Thank you for your message! I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-navy-light">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-navy-light">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-navy-light">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-navy-light">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-cv-primary hover:bg-cv-primary/90 w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
