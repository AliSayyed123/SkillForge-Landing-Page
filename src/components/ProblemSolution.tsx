import { AlertCircle, CheckCircle } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problem */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium">The Challenge</span>
            </div>
            
            <h2 className="text-4xl font-bold">
              Traditional Learning Falls Short
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                The job market evolves faster than ever, but traditional education struggles to keep pace. Outdated curriculums, inflexible schedules, and generic content leave learners unprepared for real-world challenges.
              </p>
              <p>
                Many professionals find themselves stuck, lacking the specific skills needed to advance their careers or pivot to new opportunities.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">The Solution</span>
            </div>
            
            <h2 className="text-4xl font-bold">
              Learn What Actually Matters
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                SkillForge delivers practical, industry-relevant courses taught by professionals who've been there. Our curriculum updates constantly to match current market demands.
              </p>
              <p>
                Study on your schedule with hands-on projects that build real portfolio pieces. No fluff, no theory-only lectures—just the skills employers are actively seeking right now.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="text-2xl font-bold text-gradient mb-2">Join thousands</div>
              <p className="text-muted-foreground">
                who've transformed their careers with SkillForge
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
