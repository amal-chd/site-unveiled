import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Poweloom Metta", "Mambaram - 670741"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@pranaroots.com", "consultation@pranaroots.com"]
    },
    {
      icon: Clock,
      title: "Timings",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-earth mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your healing journey? Contact us to schedule your consultation 
            or learn more about our treatments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-earth mb-6">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-lg text-earth">
                        <div className="bg-gradient-earth p-2 rounded-lg mr-3">
                          <info.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-foreground/80 text-sm">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-healing border-border/50">
              <CardHeader>
                <CardTitle className="text-earth">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                    <span className="text-foreground/80">Experienced Ayurvedic practitioners</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                    <span className="text-foreground/80">Authentic herbal medicines</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                    <span className="text-foreground/80">Personalized treatment plans</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                    <span className="text-foreground/80">Holistic approach to wellness</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-earth">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone
                  </label>
                  <Input type="tel" placeholder="+91 98765 43210" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your health concerns or questions..."
                    rows={5}
                  />
                </div>
                
                <Button variant="healing" className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;