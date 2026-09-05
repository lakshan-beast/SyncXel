import React, { useState, useEffect } from "react";
import { HiStar, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaQuoteRight } from "react-icons/fa";

export default function ReviewSlider() {
  const reviews = [
    {
      id: 1,
      name: "Kasun Perera",
      role: "Frontend Dev",
      comment: "Syncxel saved me tons of hours building my agency portfolio. The copy-paste feature is a lifesaver!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "SaaS Founder",
      comment: "Clean Tailwind code and the templates are gorgeous. Worth every penny for the Pro kit.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ahamed Rza",
      role: "Freelancer",
      comment: "The dark mode support and smooth animations make my client projects look top-notch.",
      rating: 5,
    },
    {
      id: 4,
      name: "Dilshan Silva",
      role: "UI/UX Designer",
      comment: "The structure is so clean. Copying code takes literally two seconds. Highly recommended!",
      rating: 4,
    },
    {
      id: 5,
      name: "Emily Watson",
      role: "Fullstack Dev",
      comment: "The photographer template alone is worth way more than the price. Amazing work!",
      rating: 5,
    },
    {
      id: 6,
      name: "Nuwan Bandara",
      role: "React Developer",
      comment: "No complex setup needed. Just grab what you need and plug it into your Vite project.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
          Community Reviews
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">What developers are saying</h2>
      </div>

      {/* Slider Container with Outer Buttons */}
      <div className="relative flex items-center justify-center gap-2 md:gap-4 lg:gap-6 ">
        
        {/* Left Arrow (Outside Card) */}
        <button 
          onClick={prevSlide}
          className="p-3 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-cyan-500/50 text-white rounded-full transition-all shadow-xl z-10 flex-shrink-0 cursor-pointer"
          aria-label="Previous Review"
        >
          <HiChevronLeft className="w-5 h-5" />
        </button>

        {/* Main Review Card */}
        <div className="w-full max-w-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 p-8 sm:p-10 rounded-3xl relative overflow-hidden shadow-2xl transition-all duration-500">
          
          {/* Background Decorative Quote Icon */}
          <div className="absolute top-6 right-8 text-white/20 pointer-events-none">
            <FaQuoteRight className="w-16 h-16" />
          </div>

          <div className="relative z-10">
            {/* Star Ratings */}
            <div className="flex items-center space-x-1 mb-4 text-amber-400">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <HiStar key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            {/* Comment Text */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium mb-8">
              "{reviews[currentIndex].comment}"
            </p>

            {/* Author Info & Dots Pagination */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <h5 className="text-sm font-bold text-white">{reviews[currentIndex].name}</h5>
                <span className="text-xs text-cyan-400 font-medium">{reviews[currentIndex].role}</span>
              </div>

              {/* Dots Indicators */}
              <div className="flex space-x-1.5 items-center">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${currentIndex === idx ? "w-6 bg-cyan-400" : "w-2 bg-slate-800 hover:bg-slate-700"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Arrow (Outside Card) */}
        <button 
          onClick={nextSlide}
          className="p-3 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-cyan-500/50 text-white rounded-full transition-all shadow-xl z-10 flex-shrink-0 cursor-pointer"
          aria-label="Next Review"
        >
          <HiChevronRight className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
}