"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

export function ScreenshotGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Mockup screenshots of app screens
  const screenshots = [
    {
      title: "Dashboard Overview",
      image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Get a quick overview of your finances at a glance"
    },
    {
      title: "Budget Planning",
      image: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Set and manage your budgets by category"
    },
    {
      title: "Expense Tracking",
      image: "https://images.pexels.com/photos/6693645/pexels-photo-6693645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Log and categorize your expenses effortlessly"
    },
    {
      title: "Financial Reports",
      image: "https://images.pexels.com/photos/6693649/pexels-photo-6693649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Detailed insights into your spending patterns"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 -right-40 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-64 h-64 rounded-full bg-teal-500/20 blur-3xl"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Beautiful Interface, Powerful Features</h2>
          <p className="text-lg text-muted-foreground">
            Take a peek at how seimbang.in helps you manage your money with style and simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`
              }}
            >
              <div className="relative mx-auto w-[220px] h-[440px] rounded-[32px] overflow-hidden shadow-xl border-8 border-black bg-black mb-6">
                <Image
                  src={screenshot.image}
                  alt={screenshot.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 right-0 h-5 bg-black rounded-t-2xl"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl"></div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-1">{screenshot.title}</h3>
                <p className="text-muted-foreground text-sm">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}