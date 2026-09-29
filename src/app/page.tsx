"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    setTimeout(revealOnScroll, 100);

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Le Guide de Confiance",
    "description": "Un guide complet et un protocole confidentiel pour surmonter le trac et maîtriser la prise de parole en public.",
    "category": "EducationalCourse",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": "https://guide-de-confiance.vercel.app/"
    }
  };

  const scrollToOffer = () => {
    document.getElementById('decouvrir')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="noise"></div>

      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-serif italic text-xl text-text-main tracking-wide">Le Guide de Confiance</span>
          <a href="https://wyvmgyhr.mychariow.com/prd_vqzd2xnd" className="px-6 py-2 text-xs uppercase tracking-[0.2em] font-medium text-accent border border-accent/20 rounded hover:bg-accent hover:text-black transition-all duration-500">
            Accéder
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center pt-32 pb-20 px-6 z-10">
        <section className="max-w-4xl mx-auto text-center mt-12 md:mt-24 flex flex-col gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-accent text-xs md:text-sm uppercase tracking-[0.4em] font-medium">Une méthode confidentielle</p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-text-main">
            Il y a ceux qui <span className="italic text-text-muted">tremblent</span>.<br />
            Et il y a ceux qui <span className="text-accent text-glow italic">savent</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto font-light leading-relaxed mt-6">
            La prise de parole n'est pas un don naturel. C'est une architecture silencieuse. Découvrez le protocole exact utilisé par ceux qui transforment le trac en charisme.
          </p>
          
          <div className="mt-10">
            <a href="https://wyvmgyhr.mychariow.com/prd_vqzd2xnd" className="inline-block px-10 py-5 bg-accent text-black font-semibold tracking-[0.15em] uppercase text-xs hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(205,168,124,0.15)] hover:shadow-[0_0_60px_rgba(205,168,124,0.3)]">
              Déverrouiller le protocole
            </a>
          </div>
        </section>

        {/* The Problem (Mysterious) */}
        <section className="max-w-3xl mx-auto w-full mt-48 reveal">
          <div className="glass-panel p-10 md:p-16 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-white">Le paradoxe du silence</h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6 font-light">
              Vous possédez l'expertise. Vos idées sont justes. Mais lorsque vient le moment crucial de prendre la parole, une mécanique implacable s'enclenche : la voix s'altère, le souffle se coupe, l'impact s'évapore.
            </p>
            <p className="text-text-main text-lg font-medium">
              La majorité cherche à &quot;combattre&quot; ce stress. <span className="text-accent italic">C'est leur première erreur.</span>
            </p>
          </div>
        </section>

        {/* Teasing the Content (No details, just desire) */}
        <section className="max-w-5xl mx-auto w-full mt-48 reveal">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-accent mb-6">Ce qui vous est caché</h2>
            <p className="text-text-muted uppercase tracking-[0.2em] text-xs font-medium">À l'intérieur du Guide</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Teaser 1 */}
            <div className="glass-panel p-10 rounded-sm border-l border-l-accent/30 hover:border-l-accent transition-colors duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-accent/10 font-serif text-7xl absolute top-4 right-6 pointer-events-none transition-transform duration-700 group-hover:scale-110">I</span>
              <h3 className="relative z-10 font-serif text-2xl mb-4 mt-2 text-white">L'interrupteur physiologique</h3>
              <p className="text-text-muted relative z-10 font-light leading-relaxed">La technique méconnue de 180 secondes pour forcer votre système nerveux à redescendre, juste avant de monter sur scène. L'angoisse s'éteint, la lucidité revient.</p>
            </div>
            
            {/* Teaser 2 */}
            <div className="glass-panel p-10 rounded-sm border-l border-l-accent/30 hover:border-l-accent transition-colors duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-accent/10 font-serif text-7xl absolute top-4 right-6 pointer-events-none transition-transform duration-700 group-hover:scale-110">II</span>
              <h3 className="relative z-10 font-serif text-2xl mb-4 mt-2 text-white">L'architecture de l'attention</h3>
              <p className="text-text-muted relative z-10 font-light leading-relaxed">Comment structurer vos mots pour que l'auditoire n'ait pas d'autre choix que de vous écouter. Une trame invisible qui remplace l'effort de mémorisation.</p>
            </div>

            {/* Teaser 3 */}
            <div className="glass-panel p-10 rounded-sm border-l border-l-accent/30 hover:border-l-accent transition-colors duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-accent/10 font-serif text-7xl absolute top-4 right-6 pointer-events-none transition-transform duration-700 group-hover:scale-110">III</span>
              <h3 className="relative z-10 font-serif text-2xl mb-4 mt-2 text-white">Le langage de l'ombre</h3>
              <p className="text-text-muted relative z-10 font-light leading-relaxed">Ce que vos mains, votre posture et vos silences doivent imposer à la salle avant même que vous ne prononciez une seule syllabe.</p>
            </div>

            {/* Teaser 4 */}
            <div 
              className="glass-panel p-10 rounded-sm border-l border-l-accent/30 hover:border-l-accent transition-colors duration-500 flex flex-col justify-center items-center text-center group cursor-pointer overflow-hidden relative" 
              onClick={() => { window.location.href='https://wyvmgyhr.mychariow.com/prd_vqzd2xnd'; }}
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-accent italic font-serif text-2xl group-hover:scale-105 transition-transform duration-700 relative z-10">Et le reste du protocole...</p>
              <p className="text-text-muted text-xs uppercase tracking-[0.2em] mt-4 relative z-10">Une immersion totale sur 30 jours.</p>
            </div>
          </div>
        </section>

        {/* Social Proof (Mysterious tone) */}
        <section className="max-w-4xl mx-auto w-full mt-48 reveal">
          <div className="relative py-16 px-10 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-accent/50"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent to-accent/50"></div>
            
            <p className="font-serif italic text-2xl md:text-4xl text-white leading-relaxed">
              &quot;J'ai appliqué le principe du chapitre 4. Le lendemain, lors du comité de direction, le silence s'est fait. Ils n'écoutaient plus une présentation... <span className="text-accent">ils m'écoutaient moi.</span>&quot;
            </p>
            <p className="mt-10 text-text-muted uppercase tracking-[0.2em] text-xs font-medium">— Marc V., Directeur Associé</p>
          </div>
        </section>

        {/* The Offer / CTA */}
        <section id="decouvrir" className="max-w-3xl mx-auto w-full mt-48 mb-20 reveal">
          <div className="glass-panel p-12 md:p-20 rounded-sm text-center relative overflow-hidden border border-accent/20">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none"></div>
            
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">L'accès au Protocole</h2>
            <p className="text-text-muted mb-10 leading-relaxed font-light max-w-lg mx-auto">
              Ce guide n'est pas disponible en librairie. C'est un document numérique privé, condensé, dépourvu de théorie inutile et conçu pour une application immédiate.
            </p>
            
            <div className="mb-4"></div>
            
            <a href="https://wyvmgyhr.mychariow.com/prd_vqzd2xnd" className="inline-block w-full md:w-auto md:px-16 py-5 bg-accent text-black font-semibold tracking-[0.15em] uppercase text-xs hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(205,168,124,0.2)] hover:shadow-[0_0_50px_rgba(205,168,124,0.4)]">
              Obtenir mon exemplaire
            </a>
            
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-text-muted uppercase tracking-[0.1em]">
              <span><span className="text-accent mr-2">✦</span> Téléchargement immédiat</span>
              <span className="hidden md:inline">|</span>
              <span><span className="text-accent mr-2">✦</span> Format PDF Interactif</span>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 py-12 text-center relative z-10 bg-[#020202]">
        <p className="font-serif italic text-text-muted text-lg mb-2">Guide de Confiance</p>
        <p className="text-[10px] text-text-muted/50 uppercase tracking-[0.2em]">© 2024 · Le savoir appartient à ceux qui l'appliquent.</p>
      </footer>
    </>
  );
}
