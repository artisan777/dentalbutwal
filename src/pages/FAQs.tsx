import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "Is teeth whitening painful?",
      answer: "No, professional teeth whitening at Butwal Dental is not painful. You may experience mild sensitivity for a day or two after treatment, which is completely normal and temporary. We use gentle, proven techniques that minimize discomfort.",
    },
    {
      question: "How much do dental treatments cost?",
      answer: "Costs vary depending on the treatment. We offer competitive pricing and various payment options. During your consultation, we'll provide a detailed treatment plan with transparent pricing. Many of our procedures are more affordable than you might expect!",
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting every 6 months for routine checkups and cleanings. Regular visits help us catch potential problems early, preventing more serious (and expensive) issues down the line.",
    },
    {
      question: "Do you treat children?",
      answer: "Yes! We specialize in pediatric dentistry and create a fun, comfortable environment for kids. We recommend bringing children for their first visit by age 2 or when their first tooth appears.",
    },
    {
      question: "Are root canals really that painful?",
      answer: "This is a common myth! Modern root canal procedures at Butwal Dental are no more uncomfortable than getting a filling. We use advanced anesthesia and gentle techniques to ensure you feel minimal to no discomfort.",
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care, dental implants can last 20-30 years or even a lifetime. They're the most durable tooth replacement option available and look and function just like natural teeth.",
    },
    {
      question: "Can I get braces as an adult?",
      answer: "Absolutely! It's never too late to straighten your teeth. We offer both traditional braces and clear aligners for adults. Many of our adult patients are thrilled with their results.",
    },
    {
      question: "What should I do in a dental emergency?",
      answer: "Call us immediately at +977 71-234567. For after-hours emergencies, our answering service will connect you with our on-call dentist. Common emergencies include severe pain, knocked-out teeth, or broken dental work.",
    },
    {
      question: "Do you accept insurance?",
      answer: "We work with most major insurance providers. Please bring your insurance card to your appointment, and our staff will help you understand your coverage and file claims.",
    },
    {
      question: "How can I prevent cavities?",
      answer: "Brush twice daily with fluoride toothpaste, floss once a day, limit sugary foods and drinks, and visit us every 6 months for cleanings and checkups. These simple habits can prevent most dental problems!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Got questions about dental care? We've got answers! Browse our most common questions below.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border rounded-xl px-6 shadow-soft hover:shadow-card transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="fas fa-question text-primary text-sm"></i>
                      </div>
                      <span className="font-semibold text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pl-12">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-comments text-4xl text-primary"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find what you're looking for? Our friendly team is here to help! Reach out via WhatsApp or give us a call.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/9771234567890?text=Hi, I have a question about dental services at Butwal Dental."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg font-semibold transition-smooth text-lg shadow-card hover:shadow-lg">
                  <i className="fab fa-whatsapp mr-2"></i>
                  Ask on WhatsApp
                </button>
              </a>
              <a href="tel:+97771234567">
                <button className="px-8 py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg font-semibold transition-smooth text-lg shadow-card hover:shadow-lg">
                  <i className="fas fa-phone mr-2"></i>
                  Call Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
