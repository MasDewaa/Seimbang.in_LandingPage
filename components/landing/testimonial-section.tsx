"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Jessica T.",
      role: "Small Business Owner",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Seimbang.in has revolutionized how I manage both personal and business finances. The custom categories and reporting tools have given me insights I never had before.",
      rating: 5
    },
    {
      name: "Michael L.",
      role: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "As someone who was terrible at budgeting, this app has been a game-changer. The automatic expense categorization and budget alerts keep me accountable.",
      rating: 5
    },
    {
      name: "Sophia K.",
      role: "Marketing Manager",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "I've tried many money management apps, but seimbang.in offers the perfect balance of powerful features and ease of use. I finally feel in control of my finances.",
      rating: 5
    },
    {
      name: "Raj P.",
      role: "Healthcare Professional",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      quote: "The savings goals feature helped me save for my wedding in half the time I expected. The visual progress charts kept me motivated every step of the way.",
      rating: 4
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Thousands of Users</h2>
          <p className="text-lg text-muted-foreground">
            See how seimbang.in has helped people take control of their financial lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-8 shadow-sm border border-border/40"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-muted'}`} 
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* App ratings */}
        <div 
          className="mt-16 bg-muted/40 rounded-2xl p-8 max-w-3xl mx-auto"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-2xl font-bold">4.9</p>
              <p className="text-sm text-muted-foreground">App Store</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-2xl font-bold">4.8</p>
              <p className="text-sm text-muted-foreground">Google Play</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">100k+</p>
              <p className="text-sm text-muted-foreground">Downloads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}