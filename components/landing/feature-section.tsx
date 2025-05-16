"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { BarChart3, Wallet, PieChart, Bell, Shield, Landmark, CreditCard, LineChart } from "lucide-react";

export function FeatureSection() {
  const features = [
    {
      icon: <Wallet className="h-10 w-10 text-teal-500" />,
      title: "Expense Tracking",
      description: "Track your spending in real-time and categorize expenses automatically to always know where your money is going."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-teal-500" />,
      title: "Budget Planning",
      description: "Create personalized budgets based on your income and spending habits to stay on track with your financial goals."
    },
    {
      icon: <Bell className="h-10 w-10 text-teal-500" />,
      title: "Smart Alerts",
      description: "Receive timely notifications about unusual spending, upcoming bills, and personalized savings opportunities."
    },
    {
      icon: <PieChart className="h-10 w-10 text-teal-500" />,
      title: "Financial Insights",
      description: "Get visual reports and analytics to understand your spending patterns and make better financial decisions."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-teal-500" />,
      title: "Bill Management",
      description: "Never miss a payment with reminders for upcoming bills and subscription tracking to eliminate unwanted charges."
    },
    {
      icon: <LineChart className="h-10 w-10 text-teal-500" />,
      title: "Savings Goals",
      description: "Set and track progress toward savings goals with automated contributions and milestone celebrations."
    },
    {
      icon: <Shield className="h-10 w-10 text-teal-500" />,
      title: "Secure Integration",
      description: "Bank-level security protects your financial data with encryption and secure connections to financial institutions."
    },
    {
      icon: <Landmark className="h-10 w-10 text-teal-500" />,
      title: "Financial Education",
      description: "Learn money management tips and strategies tailored to your specific financial situation and goals."
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" className="py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-64 h-64 rounded-full bg-teal-500/20 blur-3xl"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Features to Simplify Your Finances</h2>
          <p className="text-lg text-muted-foreground">
            Powerful tools designed to give you complete control over your money with minimal effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-2xl p-6 shadow-sm border border-border/40 transition-all duration-300 hover:shadow-md hover:border-teal-500/30"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`
              }}
            >
              <div className="mb-4 p-3 bg-muted inline-block rounded-xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}