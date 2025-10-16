import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long do I have access to the courses?",
    answer: "You get lifetime access to all course materials, including future updates. Learn at your own pace without worrying about deadlines or expiration dates.",
  },
  {
    question: "Are the certificates recognized by employers?",
    answer: "Yes! Our certificates are industry-recognized and can be added to your LinkedIn profile, resume, and portfolio. Many of our graduates have successfully used them to advance their careers.",
  },
  {
    question: "What if I don't have prior experience?",
    answer: "Our courses are designed for all skill levels, from complete beginners to advanced learners. Each course clearly indicates the recommended experience level, and we provide all the resources you need to succeed.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Absolutely. We offer a 30-day money-back guarantee. If you're not completely satisfied with your learning experience, simply contact us for a full refund—no questions asked.",
  },
  {
    question: "How much time should I dedicate per week?",
    answer: "Most students spend 5-10 hours per week and complete courses within 8-12 weeks. However, since you have lifetime access, you can go at whatever pace works best for your schedule.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment plans to make learning accessible for everyone. You can choose to pay upfront or split payments over 3-6 months with no interest.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about learning with SkillForge
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-card hover:shadow-3d transition-smooth"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
