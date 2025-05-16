"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "Is my financial data secure with seimbang.in?",
      answer: "Absolutely. We employ bank-level 256-bit encryption to protect your financial data. We don't store your bank credentials, and our security protocols are regularly audited by independent experts to ensure your information remains safe."
    },
    {
      question: "How does the automatic expense categorization work?",
      answer: "Our app uses machine learning algorithms to analyze your transaction descriptions and automatically assign them to appropriate categories. The system becomes more accurate over time as it learns from your spending patterns and any manual category adjustments you make."
    },
    {
      question: "Can I sync multiple bank accounts and credit cards?",
      answer: "Yes! With our Premium and Family plans, you can connect unlimited bank accounts, credit cards, investment accounts, and other financial institutions to get a complete picture of your finances in one place."
    },
    {
      question: "Do I need to manually enter all my transactions?",
      answer: "Not at all. While manual entry is available, our Premium and Family plans offer automatic synchronization with your financial institutions, importing transactions securely and automatically categorizing them for you."
    },
    {
      question: "Can I share access to my finances with my partner?",
      answer: "Yes, our Family plan allows you to share financial management with up to 5 family members. You can control what information is shared, set up shared savings goals, and manage household expenses together."
    },
    {
      question: "Is there a web version or only mobile apps?",
      answer: "Seimbang.in is primarily designed as a mobile app for iOS and Android, offering the convenience of managing your finances on the go. However, Premium and Family plan subscribers also get access to our web dashboard for more detailed analysis on larger screens."
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="faq" className="py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-64 h-64 rounded-full bg-teal-500/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="max-w-2xl mx-auto text-center mb-16"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about seimbang.in.
          </p>
        </div>

        <div 
          className="max-w-3xl mx-auto"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s'
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div 
          className="mt-12 text-center"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s'
          }}
        >
          <p className="text-muted-foreground">
            Still have questions? <a href="#" className="text-teal-500 font-medium hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
}