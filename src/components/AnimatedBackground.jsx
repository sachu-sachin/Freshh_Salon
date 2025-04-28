import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 w-full h-full overflow-hidden">
      {/* Patterned background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            `repeating-linear-gradient(135deg,rgba(0,0,0,0.03) 0 2px,transparent 2px 40px),
             repeating-linear-gradient(45deg,rgba(0,0,0,0.04) 0 1.5px,transparent 1.5px 30px)`,
          backgroundSize: '40px 40px, 30px 30px',
        }}
      />
      {/* Animated SVGs */}
      <svg className="absolute left-10 top-12 md:top-20 animate-float-slow opacity-30" width="60" height="60" viewBox="0 0 60 60" fill="none"><g><path d="M10 10 L50 50 M50 10 L10 50" stroke="#222" strokeWidth="4" strokeLinecap="round"/><circle cx="10" cy="10" r="6" stroke="#222" strokeWidth="2" fill="white"/><circle cx="50" cy="10" r="6" stroke="#222" strokeWidth="2" fill="white"/></g></svg>
      {/* Scissors */}
      <svg className="absolute right-10 bottom-24 animate-float-medium opacity-20" width="70" height="30" viewBox="0 0 70 30" fill="none"><g><rect x="5" y="12" width="40" height="6" rx="3" fill="#444"/><rect x="45" y="8" width="18" height="14" rx="7" fill="#888"/><rect x="50" y="13" width="8" height="4" rx="2" fill="#fff"/></g></svg>
      {/* Comb */}
      <svg className="absolute left-1/2 top-1/3 animate-float-fast opacity-20" width="80" height="30" viewBox="0 0 80 30" fill="none"><g><rect x="10" y="10" width="60" height="10" rx="5" fill="#c2a76c"/><rect x="12" y="8" width="2" height="14" rx="1" fill="#a68b4a"/><rect x="20" y="8" width="2" height="14" rx="1" fill="#a68b4a"/><rect x="28" y="8" width="2" height="14" rx="1" fill="#a68b4a"/><rect x="36" y="8" width="2" height="14" rx="1" fill="#a68b4a"/><rect x="44" y="8" width="2" height="14" rx="1" fill="#a68b4a"/><rect x="52" y="8" width="2" height="14" rx="1" fill="#a68b4a"/><rect x="60" y="8" width="2" height="14" rx="1" fill="#a68b4a"/></g></svg>
      {/* Hair outline */}
      <svg className="absolute right-1/4 top-1/4 animate-float-slow opacity-10" width="100" height="60" viewBox="0 0 100 60" fill="none"><path d="M10 50 Q50 10 90 50" stroke="#b48b6a" strokeWidth="5" fill="none"/><path d="M30 55 Q50 30 70 55" stroke="#b48b6a" strokeWidth="2" fill="none"/></svg>
      {/* More SVGs: Hair dryer, brush, spray bottle */}
      <svg className="absolute left-16 bottom-10 animate-float-medium opacity-20" width="60" height="60" viewBox="0 0 60 60" fill="none"><ellipse cx="30" cy="40" rx="18" ry="8" fill="#e0b0ff"/><rect x="25" y="10" width="10" height="25" rx="5" fill="#b0c4de"/><rect x="28" y="35" width="4" height="10" rx="2" fill="#b0c4de"/></svg>
      <svg className="absolute right-24 top-10 animate-float-fast opacity-20" width="50" height="50" viewBox="0 0 50 50" fill="none"><rect x="10" y="20" width="30" height="8" rx="4" fill="#ffb347"/><rect x="12" y="10" width="6" height="20" rx="3" fill="#ffcc80"/><rect x="32" y="10" width="6" height="20" rx="3" fill="#ffcc80"/></svg>
      {/* Colorful balls */}
      <div className="absolute left-1/4 top-1/2 w-8 h-8 rounded-full bg-pink-400 blur-2xl opacity-40 animate-float-slow" />
      <div className="absolute right-1/3 bottom-1/4 w-12 h-12 rounded-full bg-blue-400 blur-xl opacity-30 animate-float-medium" />
      <div className="absolute left-1/2 top-1/4 w-6 h-6 rounded-full bg-yellow-300 blur-lg opacity-30 animate-float-fast" />
      <div className="absolute right-10 top-1/2 w-10 h-10 rounded-full bg-green-300 blur-2xl opacity-30 animate-float-slow" />
      {/* Animated lines */}
      <svg className="absolute left-1/3 bottom-10 animate-float-medium opacity-20" width="120" height="30" viewBox="0 0 120 30" fill="none"><path d="M10 20 Q60 0 110 20" stroke="#a5b4fc" strokeWidth="4" fill="none"/></svg>
      <svg className="absolute right-1/5 top-1/3 animate-float-fast opacity-20" width="100" height="20" viewBox="0 0 100 20" fill="none"><path d="M10 10 Q50 0 90 10" stroke="#f472b6" strokeWidth="3" fill="none"/></svg>
      {/* Animations */}
      <style>{`
        @keyframes float-slow { 0%{transform:translateY(0);} 50%{transform:translateY(-12px);} 100%{transform:translateY(0);} }
        @keyframes float-medium { 0%{transform:translateY(0);} 50%{transform:translateY(-20px);} 100%{transform:translateY(0);} }
        @keyframes float-fast { 0%{transform:translateY(0);} 50%{transform:translateY(-30px);} 100%{transform:translateY(0);} }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
