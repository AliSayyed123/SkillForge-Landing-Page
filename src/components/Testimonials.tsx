import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Developer",
    content: "SkillForge helped me transition from marketing to tech in just 6 months. The instructors are incredible and the hands-on projects gave me the confidence to land my dream job.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Product Manager",
    content: "I've tried other platforms, but SkillForge is different. The content is always current, and the community support made all the difference when I was stuck on difficult concepts.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "UX Designer",
    content: "The certificate I earned actually opened doors. Hiring managers recognized SkillForge immediately. Best investment I've made in my career development.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Trusted by <span className="text-gradient">Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real stories from learners who transformed their careers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-3d transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full" />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
