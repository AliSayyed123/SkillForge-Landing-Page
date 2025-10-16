import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Lifetime access to all materials",
  "Industry-recognized certificates",
  "Expert instructor support",
  "30-day money-back guarantee",
];

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Join over 50,000 learners who've already leveled up their skills with SkillForge
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto py-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card/50 backdrop-blur border border-border rounded-xl p-4"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow shadow-3d hover:shadow-3d-hover transition-smooth text-lg px-10 py-7 group"
            >
              Start Learning Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-smooth text-lg px-10 py-7"
            >
              View Course Catalog
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 text-sm text-muted-foreground">
            <p>No credit card required • Start learning in under 5 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
