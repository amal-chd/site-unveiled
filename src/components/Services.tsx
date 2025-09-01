import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Droplet, Hand, Zap, Flower, Pill } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Ayurvedic Consultation",
      description: "Comprehensive health assessment based on your unique constitution (Prakriti) and current imbalances.",
      features: ["Pulse diagnosis", "Lifestyle analysis", "Personalized treatment plan"]
    },
    {
      icon: Pill,
      title: "Herbal Medicine",
      description: "Authentic Ayurvedic formulations prepared with the finest quality herbs and traditional methods.",
      features: ["Custom formulations", "Quality assured herbs", "Traditional preparation"]
    },
    {
      icon: Hand,
      title: "Panchakarma Therapy",
      description: "Detoxification and rejuvenation treatments to cleanse toxins and restore balance.",
      features: ["Abhyanga massage", "Shirodhara", "Nasya therapy"]
    },
    {
      icon: Droplet,
      title: "Specialized Treatments",
      description: "Targeted therapies for specific conditions using time-tested Ayurvedic protocols.",
      features: ["Arthritis care", "Stress management", "Digestive disorders"]
    },
    {
      icon: Flower,
      title: "Beauty & Wellness",
      description: "Natural skincare and wellness treatments for radiant health and beauty.",
      features: ["Herbal facials", "Anti-aging therapy", "Hair treatments"]
    },
    {
      icon: Zap,
      title: "Lifestyle Counseling",
      description: "Guidance on diet, exercise, and daily routines aligned with Ayurvedic principles.",
      features: ["Nutrition planning", "Yoga therapy", "Meditation guidance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-earth mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Ayurvedic treatments and therapies designed to restore balance 
            and promote natural healing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-natural transition-gentle border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto bg-gradient-earth p-3 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-gentle">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-earth">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground/80">
                      <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;