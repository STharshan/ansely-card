import React, { useRef, useState, useEffect } from 'react';
import { 
  FaInstagram, 
  FaTiktok, 
  FaFacebookF, 
  FaWhatsapp, 
  FaStar, 
  FaPhone, 
  FaGlobe,
  FaCaretLeft,
  FaCaretRight
} from 'react-icons/fa6';
import { HiMapPin, HiArrowDownTray } from 'react-icons/hi2';

const LOCATIONS_DATA = [
  {
    id: 1,
    name: 'Ratby',
    description: 'Refined Indian cuisine with a modern twist in the heart of Ratby',
    locationName: 'Ratby, Leicester',
    image: '/ratby.png',
    phone: '+44 116 XXXX XXXX',
    telUrl: 'tel:+441164000000',
    whatsappUrl: 'https://wa.me/+441164000000',
    websiteUrl: 'https://harrisonspice.com/ratby'
  },
  {
    id: 2,
    name: 'Coalville',
    description: 'Modern Indian dining with warm hospitality',
    locationName: 'Coalville, Leicestershire',
    image: '/coalville.png',
    phone: '+44 1530 XXXX XXXX',
    telUrl: 'tel:+441530000000',
    whatsappUrl: 'https://wa.me/+441530000000',
    websiteUrl: 'https://harrisonspice.com/coalville'
  },
  {
    id: 3,
    name: 'Leicester',
    description: 'Contemporary Indian cuisine in vibrant Leicester',
    locationName: 'Leicester City Centre',
    image: '/leicester.png',
    phone: '+44 116 XXXX XXXX',
    telUrl: 'tel:+441164000001',
    whatsappUrl: 'https://wa.me/+441164000001',
    websiteUrl: 'https://harrisonspice.com/leicester'
  }
];

export default function HarrisonsSpice() {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle progress bar tracking and active pagination dots dynamically
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const totalScroll = container.scrollWidth - container.clientWidth;
    if (totalScroll > 0) {
      const progress = (container.scrollLeft / totalScroll) * 100;
      setScrollProgress(progress);
    }

    // Calculate current visible card index
    const index = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(index);
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <main className="bg-[#111111] text-white min-h-screen">
      <div className="min-h-screen py-8 md:py-16 px-4 flex flex-col items-center justify-center">
        
        {/* Logo Section */}
        <div className="mb-8 md:mb-12">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harrison%20spice%20logo-vr0wOqMnWBwxqWiKZopD1yXO0LsK5o.png" 
            alt="Harrison's Spice Logo" 
            className="h-24 md:h-32 w-auto drop-shadow-2xl mx-auto"
          />
        </div>

        {/* Rating Section */}
        <div className="flex items-center justify-center gap-2 mb-8 px-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" aria-hidden="true" />
            ))}
          </div>
          <span className="text-[#FFD700] font-semibold text-sm md:text-base">5.0 Google Rating</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 px-4">
          <a href="https://instagram.com/harrisonspice" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 transition-all">
            <FaInstagram className="w-5 h-5 text-[#FFD700]" />
          </a>
          <a href="https://tiktok.com/@harrisonspice" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 transition-all">
            <FaTiktok className="w-5 h-5 text-[#FFD700]" />
          </a>
          <a href="https://facebook.com/harrisonspice" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 transition-all">
            <FaFacebookF className="w-5 h-5 text-[#FFD700]" />
          </a>
          <a href="https://wa.me/441164000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 transition-all">
            <FaWhatsapp className="w-5 h-5 text-[#FFD700]" />
          </a>
        </div>

        {/* Locations Section */}
        <div className="w-full px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold mb-8 text-center text-white">
              <span className="text-[#FFD700]">Check Out</span> Our Locations
            </h2>
            
            <div className="relative">
              {/* Horizontal Scrollable Container */}
              <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto scroll-smooth gap-6 pb-6 no-scrollbar" 
                style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
              >
                {LOCATIONS_DATA.map((location) => (
                  <div 
                    key={location.id} 
                    className="flex-shrink-0 w-full sm:w-80 md:w-[380px] rounded-2xl overflow-hidden backdrop-blur-md bg-[#222222]/80 border border-white/10 hover:border-[#FFD700]/50 transition-all duration-300 group shadow-lg"
                  >
                    {/* Card Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img 
                        alt={location.name} 
                        loading="lazy" 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        src={location.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-[#FFD700] mb-2">{location.name}</h3>
                      <p className="text-white/70 text-sm md:text-base mb-4 line-clamp-2">{location.description}</p>
                      
                      {/* Details with strict adherence to alignment */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2.5">
                          <HiMapPin className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                          <span className="text-sm text-white/90">{location.locationName}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <FaPhone className="w-3.5 h-3.5 text-[#FFD700] flex-shrink-0" />
                          <a href={location.telUrl} className="text-sm text-white/90 hover:text-[#FFD700] transition-colors">
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <FaWhatsapp className="w-3.5 h-3.5 text-[#FFD700] flex-shrink-0" />
                          <a href={location.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-[#FFD700] transition-colors">
                            WhatsApp
                          </a>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <FaGlobe className="w-3.5 h-3.5 text-[#FFD700] flex-shrink-0" />
                          <a href={location.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-[#FFD700] transition-colors">
                            Visit Website
                          </a>
                        </div>
                      </div>

                      <button className="w-full py-2.5 rounded-lg bg-[#E1B700] hover:bg-[#FFD700] text-black font-bold transition-all text-sm md:text-base shadow-md">
                        Get Directions
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Slider Track Line Component (from image_528ed2.png) */}
              <div className="flex items-center gap-4 mt-4 px-2 w-full max-w-md mx-auto">
                <button 
                  onClick={() => scroll('left')} 
                  className="text-[#FFD700] hover:text-white transition-colors"
                  aria-label="Scroll left"
                >
                  <FaCaretLeft className="w-5 h-5" />
                </button>
                
                <div className="relative flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-[#FFD700] transition-all duration-150 rounded-full"
                    style={{ width: `${Math.max(20, scrollProgress)}%`, left: `${scrollProgress * 0.8}%` }}
                  />
                </div>

                <button 
                  onClick={() => scroll('right')} 
                  className="text-[#FFD700] hover:text-white transition-colors"
                  aria-label="Scroll right"
                >
                  <FaCaretRight className="w-5 h-5" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {LOCATIONS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? 'bg-[#FFD700] w-8' : 'bg-white/20 w-2'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="w-full px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#222222]/80 border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-[#FFD700]">Why Choose Us?</h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                We deliver exceptional food, service, and ambiance for an unforgettable dining experience. Our carefully curated menu features refined Indian cuisine with a modern twist, prepared by expert chefs using premium ingredients. Each location offers a warm, welcoming atmosphere perfect for family gatherings, business dinners, or special celebrations.
              </p>
            </div>
          </div>
        </div>

        {/* Download Action */}
        <div className="w-full px-4 pb-8">
          <div className="max-w-4xl mx-auto">
            <button className="w-full py-3.5 rounded-lg bg-[#E1B700] hover:bg-[#FFD700] text-black font-bold transition-all flex items-center justify-center gap-2 text-sm md:text-base shadow-md">
              <HiArrowDownTray className="w-5 h-5 text-black stroke-2" />
              Download Contact
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full max-w-4xl border-t border-white/10 pt-6 px-4 text-center text-white/50 text-xs">
          <p>© 2026 Harrison's Spice. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}