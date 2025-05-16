"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutButton } from "@/components/checkout-button";

export function PricingSection() {
  const plans = [
    {
      id: "free",
      name: "Free",
      price: "Rp0",
      description: "Perfect for getting started",
      features: [
        "Basic expense tracking",
        "Up to 5 budget categories",
        "Monthly spending reports",
        "Bill reminders",
        "Manual transaction entry"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp49,000",
      period: "/month",
      description: "Everything you need for personal finances",
      features: [
        "Unlimited expense tracking",
        "Unlimited budget categories",
        "Advanced financial reports",
        "Automatic bank synchronization",
        "Customizable savings goals",
        "Investment tracking",
        "Export to Excel/CSV",
        "Priority customer support"
      ],
      cta: "Get Premium",
      popular: true
    },
    {
      id: "family",
      name: "Family",
      price: "Rp89,000",
      period: "/month",
      description: "Share finances with family members",
      features: [
        "All Premium features",
        "Up to 5 user accounts",
        "Shared budgeting",
        "Group savings goals",
        "Family finance dashboard",
        "Expense allocation",
        "Shared bill management",
        "Financial planning tools"
      ],
      cta: "Get Family Plan",
      popular: false
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-20 w-64 h-64 rounded-full bg-teal-500/20 blur-3xl"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Perfect Plan</h2>
          <p className="text-lg text-muted-foreground">
            Flexible options to fit your financial management needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-2xl p-8 border ${plan.popular ? 'border-teal-500/70 shadow-lg shadow-teal-500/10' : 'border-border/40 shadow-sm'} relative`}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <CheckoutButton 
                productId={plan.id as "free" | "premium" | "family"}
                className={`w-full ${plan.popular ? 'bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700' : ''}`}
              />
            </div>
          ))}
        </div>

        <div 
          className="mt-16 text-center"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s'
          }}
        >
          <p className="text-muted-foreground">
            All plans come with a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}