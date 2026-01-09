import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10+", label: "Ani de Experiență" },
  { value: "500+", label: "Evenimente Realizate" },
  { value: "100%", label: "Clienți Mulțumiți" },
  { value: "Premium", label: "Calitate Garantată" },
];

const services = [
  "Nunți de Lux",
  "Evenimente Corporate",
  "Gale & Premiere",
  "Petreceri Private",
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="despre" className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs tracking-widest mb-4">DE CE NOI</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Eleganță și Profesionalism
          </h2>
          <div className="line-gold mx-auto mb-8" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Azur Dance Studio aduce arta dansului la cel mai înalt nivel pentru evenimentele dumneavoastră. 
            Cu o echipă de dansatori profesioniști și coregrafii personalizate, transformăm fiecare moment 
            într-o experiență memorabilă.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 border border-border hover:border-primary transition-colors duration-300"
            >
              <p className="font-display text-4xl md:text-5xl text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {services.map((service, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-secondary text-foreground text-sm tracking-widest border border-border hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
            >
              {service}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
