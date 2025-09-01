import { Leaf } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-earth p-2 rounded-full">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-sage">PRANA ROOTS</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Ayurveda Clinic & Pharmacy
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-sage transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-sage transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-sage transition-colors">
              About
            </a>
            <a href="#treatments" className="text-foreground hover:text-sage transition-colors">
              Treatments
            </a>
            <a href="#contact" className="text-foreground hover:text-sage transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;