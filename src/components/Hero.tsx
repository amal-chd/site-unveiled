import { Button } from "@/components/ui/button";
import { Leaf, Heart, Sparkles } from "lucide-react";
import chakraMeditation from "@/assets/chakra-meditation-new.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-healing relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-sage rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-healing rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-sage/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-healing/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-sage">
              <Leaf className="h-6 w-6" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Natural Healing
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-earth leading-tight">
              HEALING AT THE
              <span className="block bg-gradient-earth bg-clip-text text-transparent">
                ROOT
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Naturally with Ayurveda
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              Discover the ancient wisdom of Ayurveda through personalized treatments, 
              natural medicines, and holistic healing approaches that address your unique constitution.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="healing" size="lg" className="text-lg px-8">
              Book Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Heart className="h-8 w-8 text-healing" />
              </div>
              <h3 className="font-semibold text-earth">Holistic Care</h3>
              <p className="text-sm text-muted-foreground">Mind, body & spirit</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Leaf className="h-8 w-8 text-sage" />
              </div>
              <h3 className="font-semibold text-earth">Natural Medicine</h3>
              <p className="text-sm text-muted-foreground">Pure herbal remedies</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Sparkles className="h-8 w-8 text-chakra" />
              </div>
              <h3 className="font-semibold text-earth">Ancient Wisdom</h3>
              <p className="text-sm text-muted-foreground">5000+ years of tradition</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-natural">
            <img 
              src={chakraMeditation} 
              alt="Meditation and chakra healing" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth/20 to-transparent"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 bg-card p-4 rounded-2xl shadow-soft border border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-sage">500+</div>
              <div className="text-sm text-muted-foreground">Happy Patients</div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-soft border border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-healing">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;