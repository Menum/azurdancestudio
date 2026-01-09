import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ce tipuri de spectacole oferă Azur Dance Studio?",
    answer: "Oferim o gamă largă de spectacole de dans profesionist: vals vienez, tango, balet clasic și modern, dans contemporan, dans sportiv, și coregrafii personalizate. Fiecare spectacol este adaptat temei și atmosferei evenimentului dumneavoastră.",
  },
  {
    question: "În ce zone din România puteți susține spectacole?",
    answer: "Suntem disponibili pentru evenimente în toată România. Echipa noastră se deplasează oriunde pentru a oferi spectacole de dans de înaltă calitate.",
  },
  {
    question: "Cât durează un moment artistic?",
    answer: "Durata unui spectacol variază în funcție de preferințele dumneavoastră, de la 5-10 minute pentru un moment scurt, până la 30-45 minute pentru un show complet cu mai multe numere artistice.",
  },
  {
    question: "Puteți personaliza coregrafiile?",
    answer: "Absolut! Oferim servicii complete de coreografie personalizată. Discutăm împreună tema, muzica și stilul dorit pentru a crea un moment unic, adaptat perfect evenimentului dumneavoastră.",
  },
  {
    question: "Cu cât timp înainte trebuie să rezervăm?",
    answer: "Recomandăm să rezervați cu cel puțin 2-3 luni înainte, mai ales pentru evenimente în sezonul nunților. Pentru coregrafii complexe personalizate, un termen de 4-6 luni este ideal.",
  },
  {
    question: "Ce echipament este necesar la locație?",
    answer: "Avem nevoie de un spațiu plat de minimum 4x4 metri pentru dans, sistem audio pentru conectarea muzicii noastre și, ideal, iluminat scenic. Discutăm detaliile tehnice pentru fiecare locație în parte.",
  },
  {
    question: "Oferiți și servicii pentru dansul mirilor?",
    answer: "Da, oferim pregătire completă pentru dansul mirilor! Include lecții de dans personalizate, coreografie adaptată nivelului și preferințelor cuplului, și suport până în ziua evenimentului.",
  },
  {
    question: "Care sunt modalitățile de plată?",
    answer: "Acceptăm plata în numerar, transfer bancar sau card. Pentru rezervare se achită un avans de 30%, iar restul sumei se plătește înainte de eveniment.",
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="intrebari" className="section-padding bg-card" ref={ref}>
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-xs tracking-widest mb-4">ÎNTREBĂRI FRECVENTE</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Totul Ce Trebuie Să Știți
          </h2>
          <div className="line-gold mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border px-6 data-[state=open]:border-primary transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-display text-lg text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 text-muted-foreground"
        >
          Nu ai găsit răspunsul?{" "}
          <a href="#contact" className="text-primary hover:underline">
            Contactează-ne direct
          </a>
        </motion.p>
      </div>
    </section>
  );
};
