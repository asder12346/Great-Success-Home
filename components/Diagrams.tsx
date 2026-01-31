
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { Bed, Bath, Square, ArrowRight, DollarSign, Calendar, Percent, ChevronLeft, ChevronRight, Camera, Star, Quote, X, MapPin, Phone, Mail, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- PROPERTY CARD ---
export const PropertyCard = ({ title, location, price, beds, baths, sqft, images = [], onClick }: any) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Fallback images
  const displayImages = images.length > 0 ? images : [
    `https://images.unsplash.com/photo-1600596542815-60c37c6525fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
    `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`
  ];

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  return (
    <div 
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group flex flex-col h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel Area */}
      <div className="h-48 relative overflow-hidden" onClick={onClick}>
        <AnimatePresence initial={false}>
            <motion.img 
                key={currentImgIndex}
                src={displayImages[currentImgIndex]} 
                alt={`${title} - View ${currentImgIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
            />
        </AnimatePresence>
        
        <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-md text-xs font-semibold">
            {currentImgIndex + 1}/{displayImages.length}
        </div>

        {/* Navigation Buttons */}
        <div className={`absolute inset-y-0 left-0 flex items-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
             <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="p-2 rounded-full bg-white/80 text-gray-800 shadow-md m-2 hover:bg-white"
            >
                <ChevronLeft size={18} />
            </button>
        </div>
        <div className={`absolute inset-y-0 right-0 flex items-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
             <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="p-2 rounded-full bg-white/80 text-gray-800 shadow-md m-2 hover:bg-white"
            >
                <ChevronRight size={18} />
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 onClick={onClick} className="font-semibold text-lg text-gray-800 mb-1 truncate group-hover:text-gs-green transition-colors cursor-pointer">{title}</h3>
        <p className="text-gray-600 text-xs mb-3 flex items-center gap-1"><MapPin size={12} className="text-gs-gold"/> {location}</p>
        
        <div className="flex items-center gap-3 text-xs text-gray-700 mb-4 border-t border-gray-100 pt-3 mt-auto">
            <div className="flex items-center gap-1"><Bed size={14} className="text-gs-green"/> <span>{beds} Beds</span></div>
            <div className="flex items-center gap-1"><Bath size={14} className="text-gs-green"/> <span>{baths} Baths</span></div>
            <div className="flex items-center gap-1"><Square size={14} className="text-gs-green"/> <span>{sqft || '--'} sqft</span></div>
        </div>

        <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gs-green">{price}</span>
            <button onClick={onClick} className="text-xs font-semibold text-white bg-gs-green px-4 py-2 rounded-md hover:bg-gs-darkGreen transition-colors">
                View Details
            </button>
        </div>
      </div>
    </div>
  );
};

// --- PROPERTY MODAL ---
export const PropertyModal = ({ property, onClose }: any) => {
    const displayImages = property.images.length > 0 ? property.images : [
        "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ];
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row"
            >
                <button onClick={onClose} className="absolute top-4 right-4 z-20 bg-white/50 backdrop-blur p-2 rounded-full hover:bg-gs-green hover:text-white transition-colors">
                    <X size={24} />
                </button>

                {/* Left: Image Gallery */}
                <div className="w-full md:w-1/2 bg-slate-100 relative h-64 md:h-auto">
                    <img 
                        src={displayImages[currentImgIndex]} 
                        alt={property.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Carousel Controls */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                        {displayImages.map((img: string, idx: number) => (
                            <button 
                                key={idx}
                                onClick={() => setCurrentImgIndex(idx)}
                                className={`rounded-full transition-all border border-white/50 shadow-sm ${currentImgIndex === idx ? 'bg-gs-gold w-6 h-2' : 'bg-white w-2 h-2 hover:bg-gs-gold'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Details */}
                <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                    <span className="bg-gs-green/10 text-gs-green px-3 py-1 rounded-full font-bold uppercase text-xs tracking-wider mb-4 inline-block">{property.category}</span>
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-2">{property.title}</h2>
                    <p className="flex items-center gap-2 text-slate-500 mb-6">
                        <MapPin size={16} className="text-gs-gold" /> {property.location}
                    </p>

                    <div className="text-3xl font-bold text-gs-green mb-6 border-b border-slate-100 pb-6">
                        {property.price}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100 hover:border-gs-green/50 transition-colors">
                            <Bed size={24} className="mx-auto mb-2 text-gs-green" />
                            <div className="font-bold text-slate-900">{property.beds} Bedrooms</div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100 hover:border-gs-green/50 transition-colors">
                            <Bath size={24} className="mx-auto mb-2 text-gs-green" />
                            <div className="font-bold text-slate-900">{property.baths} Bathrooms</div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100 hover:border-gs-green/50 transition-colors">
                            <Square size={24} className="mx-auto mb-2 text-gs-green" />
                            <div className="font-bold text-slate-900">{property.sqft || 'N/A'} Sq Ft</div>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <h4 className="font-bold text-slate-900">Description</h4>
                        <p className="text-slate-600 leading-relaxed">
                            {property.description || "Experience luxury living with this exquisite property. Featuring state-of-the-art finishes, spacious interiors, and situated in a prime location."}
                        </p>
                    </div>

                    <button className="w-full bg-gs-green text-white py-4 rounded-xl font-bold hover:bg-gs-darkGreen transition-all shadow-lg flex items-center justify-center gap-2 hover:-translate-y-1">
                        <Phone size={20} /> Contact Agent
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

// --- FEATURE ICON ---
export const FeatureIcon = ({ icon, title }: any) => {
    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
            <div className="w-14 h-14 bg-gs-lightGreen text-gs-green rounded-full flex items-center justify-center mb-4 border border-gs-green/20 group-hover:bg-gs-green group-hover:text-white transition-colors duration-300">
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h4 className="font-bold text-slate-900 text-sm group-hover:text-gs-green transition-colors">{title}</h4>
        </div>
    )
}

// --- TESTIMONIAL CAROUSEL ---
export const TestimonialCarousel = ({ testimonials }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden relative h-[400px] md:h-[300px]">
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center px-4"
                    >
                        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-2xl w-full text-center relative border border-white/20">
                            <Quote size={48} className="text-gs-gold/20 absolute top-6 left-6" />
                            <div className="flex justify-center mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} className="text-gs-gold fill-gs-gold" />
                                ))}
                            </div>
                            <p className="text-xl md:text-2xl font-serif text-slate-800 italic mb-8 leading-relaxed">
                                "{testimonials[currentIndex].content}"
                            </p>
                            <div className="flex flex-col items-center">
                                <h4 className="font-bold text-lg text-slate-900">{testimonials[currentIndex].name}</h4>
                                <p className="text-gs-green font-bold text-xs uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Controls */}
            <div className="flex justify-center gap-4 mt-8">
                <button onClick={prev} className="p-3 rounded-full bg-white/20 hover:bg-white hover:text-gs-green text-white transition-all backdrop-blur-sm">
                    <ChevronLeft size={24} />
                </button>
                <div className="flex items-center gap-2">
                    {testimonials.map((_: any, idx: number) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`transition-all rounded-full ${idx === currentIndex ? 'w-8 h-2 bg-gs-gold' : 'w-2 h-2 bg-white/40 hover:bg-white'}`}
                        />
                    ))}
                </div>
                <button onClick={next} className="p-3 rounded-full bg-white/20 hover:bg-white hover:text-gs-green text-white transition-all backdrop-blur-sm">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

// --- LOGO MARQUEE (COLORED) ---
export const LogoMarquee = () => {
    // Array of brand colors for the marquee
    const logos = [
        { text: "Trusted Partner", color: "text-gs-green" },
        { text: "Premium Estates", color: "text-gs-gold" },
        { text: "Urban Living", color: "text-gs-darkGreen" },
        { text: "Skyline Properties", color: "text-gs-green" },
        { text: "Green Homes", color: "text-gs-gold" },
        { text: "Luxury Nest", color: "text-gs-darkGreen" },
        { text: "Future Build", color: "text-gs-green" },
        { text: "City Space", color: "text-gs-gold" }
    ];
    
    return (
        <div className="w-full overflow-hidden bg-white py-12 border-b border-slate-100 relative">
             <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
             <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {/* First set */}
                    {logos.map((logo, i) => (
                        <div key={`a-${i}`} className="mx-8 md:mx-12 flex items-center justify-center group cursor-pointer">
                            <span className={`text-xl md:text-3xl font-serif font-bold ${logo.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all uppercase tracking-widest`}>
                                {logo.text}
                            </span>
                        </div>
                    ))}
                    {/* Second set (duplicate) */}
                    {logos.map((logo, i) => (
                        <div key={`b-${i}`} className="mx-8 md:mx-12 flex items-center justify-center group cursor-pointer">
                            <span className={`text-xl md:text-3xl font-serif font-bold ${logo.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all uppercase tracking-widest`}>
                                {logo.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } 
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </div>
    );
};

// --- MORTGAGE CALCULATOR ---
export const MortgageCalculator = () => {
    const [amount, setAmount] = useState(100000);
    const [years, setYears] = useState(30);
    const [rate, setRate] = useState(3.5);

    const calculate = () => {
        const r = rate / 100 / 12;
        const n = years * 12;
        if (r === 0) return (amount / n).toFixed(2);
        const monthly = amount * ( (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) );
        return isNaN(monthly) || !isFinite(monthly) ? "0" : monthly.toFixed(2);
    };

    const monthlyPayment = calculate();
    const totalPayment = (parseFloat(monthlyPayment) * years * 12).toFixed(2);

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gs-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gs-gold/10 transition-colors duration-500"></div>
            <div className="space-y-6 relative z-10">
                <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                        <DollarSign size={16} className="text-gs-green" /> Mortgage Amount (₦)
                    </label>
                    <div className="relative">
                        <input 
                            type="number" 
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-gs-green font-mono text-lg z-10 relative transition-shadow" 
                        />
                    </div>
                    <input 
                        type="range" min="1000000" max="100000000" step="1000000" 
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full mt-4 accent-gs-green h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                            <Calendar size={16} className="text-gs-green" /> Period (Years)
                        </label>
                        <input 
                            type="number" 
                            value={years}
                            onChange={(e) => setYears(Number(e.target.value))}
                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-gs-green font-mono text-lg" 
                        />
                    </div>
                    <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                            <Percent size={16} className="text-gs-green" /> Interest Rate
                        </label>
                        <input 
                            type="number" 
                            value={rate}
                            onChange={(e) => setRate(Number(e.target.value))}
                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-gs-green font-mono text-lg" 
                        />
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 mt-6">
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-slate-600 font-bold uppercase text-xs tracking-wider">Monthly Payment</span>
                        <span className="text-5xl font-serif font-bold text-gs-green tracking-tight">₦{monthlyPayment}</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="text-slate-500 text-sm font-medium">Total Repayment</span>
                        <span className="text-slate-900 font-bold text-lg">₦{totalPayment}</span>
                    </div>
                </div>
                
                <button className="w-full bg-gs-green text-white py-4 rounded-xl font-bold hover:bg-gs-gold transition-all shadow-lg shadow-gs-green/20 border border-gs-green hover:border-gs-gold hover:shadow-xl mt-4 text-lg transform hover:-translate-y-1">
                    Calculate Mortgage
                </button>
            </div>
        </div>
    );
};
