import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, CheckCircle } from "lucide-react";
import ayurvedaHerbs from "@/assets/ayurveda-herbs.jpg";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Patients" },
    { icon: Clock, value: "15+", label: "Years Experience" },
    { icon: Award, value: "50+", label: "Certified Treatments" },
    { icon: CheckCircle, value: "98%", label: "Success Rate" }
  ];

  const principles = [
    "Personalized treatment based on individual constitution",
    "Natural healing using pure herbal medicines",
    "Holistic approach addressing root causes",
    "Traditional knowledge with modern understanding",
    "Emphasis on prevention and lifestyle modification",
    "Safe and effective therapeutic interventions"
  ];

  return (
    <section id="about" className="py-20 bg-natural/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-earth mb-6">
                About Prana Roots
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                At Prana Roots, we believe in the power of ancient Ayurvedic wisdom 
                to heal and restore balance in modern lives. Our clinic combines 
                traditional knowledge with contemporary understanding to provide 
                authentic, effective treatments.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Founded with a mission to make authentic Ayurveda accessible to all, 
                we specialize in personalized treatment plans that address the root 
                cause of health issues rather than just symptoms.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-earth mb-4">Our Principles</h3>
              <ul className="space-y-3">
                {principles.map((principle, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage mt-1 mr-3 flex-shrink-0" />
                    <span className="text-foreground/80">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img 
                src={ayurvedaHerbs} 
                alt="Traditional Ayurvedic herbs and spices" 
                className="w-full h-auto rounded-3xl shadow-natural object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/20 to-transparent rounded-3xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 bg-card/80 backdrop-blur-sm border-border/50">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-3">
                      <div className="bg-gradient-earth p-3 rounded-full">
                        <stat.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-earth mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;