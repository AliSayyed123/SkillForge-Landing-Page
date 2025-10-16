import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ProblemSolution />
      <Features />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
