import { Award, Clock, Users, Video, TrendingUp, Shield } from "lucide-react";
import featuresImage from "@/assets/features-bg.jpg";

const features = [
  {
    icon: Video,
    title: "Expert-Led Content",
    description: "Learn from industry professionals with years of real-world experience",
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Flexible scheduling that fits your life, available 24/7 from anywhere",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a vibrant community of learners and get help when you need it",
  },
  {
    icon: Award,
    title: "Verified Certificates",
    description: "Earn recognized credentials that boost your professional profile",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Access career resources and job placement assistance after completion",
  },
  {
    icon: Shield,
    title: "Lifetime Access",
    description: "One-time payment for permanent access to all course materials and updates",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: `url(${featuresImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need to <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A complete learning experience designed to help you achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-3d transition-smooth hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blur */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Features;
