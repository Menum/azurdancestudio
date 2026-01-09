import { ChevronDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroBgSrcset from "@/assets/hero-bg.jpg?srcset-hero";
import heroBgFallback from "@/assets/hero-bg.jpg?webp";

export const Hero = () => {
  return (
    <section id="acasa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBgFallback}
          srcSet={heroBgSrcset}
          sizes="100vw"
          alt="Spectacol de dans Azur Dance Studio"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-dark-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <Sparkles className="text-primary w-6 h-6 animate-float" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-ultra text-foreground mb-4"
        >
          AZUR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-xl md:text-2xl lg:text-3xl tracking-ultra text-primary mb-8"
        >
          DANCE STUDIO
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 h-0.5 bg-gradient-gold mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-muted-foreground text-lg md:text-xl mb-4 font-light"
        >
          Spectacole premium de dans create pentru evenimente care trebuie să impresioneze
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-primary text-sm tracking-widest mb-12"
        >
          NUNȚI • EVENIMENTE CORPORATE • GALE • PETRECERI PRIVATE
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#galerie"
            className="px-8 py-4 bg-gradient-gold text-primary-foreground text-xs tracking-widest font-medium hover:opacity-90 transition-opacity shadow-gold"
          >
            DESCOPERĂ SPECTACOLELE
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-foreground/30 text-foreground text-xs tracking-widest hover:border-primary hover:text-primary transition-all duration-300"
          >
            SOLICITĂ O OFERTĂ
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-muted-foreground">
          CONTINUĂ
        </span>
        <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
};