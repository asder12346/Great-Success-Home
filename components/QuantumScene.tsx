
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
      <img 
        src="https://images.unsplash.com/photo-1600596542815-60c37c6525fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
        alt="Modern Luxury Home" 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export const BannerImage: React.FC = () => {
  return (
    <div className="w-full h-64 bg-slate-200 rounded-xl overflow-hidden relative">
       <img 
        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
        alt="Real Estate Banner" 
        className="w-full h-full object-cover"
      />
    </div>
  );
}
