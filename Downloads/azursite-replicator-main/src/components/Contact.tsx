import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+40 737 560 839", href: "tel:+40737560839" },
  { icon: Mail, label: "Email", value: "contact@azurdancestudio.ro", href: "mailto:contact@azurdancestudio.ro" },
  { icon: MapPin, label: "Locație", value: "București, România", href: null },
  { icon: Clock, label: "Program", value: "Luni - Vineri: 10:00 - 20:00", href: null },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/azurdancestudio", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/azurdancestudio", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@azurdancestudio", label: "YouTube" },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cerere trimisă!",
      description: "Vă vom contacta în cel mai scurt timp posibil.",
    });
    setFormData({ name: "", phone: "", email: "", eventType: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs tracking-widest mb-4">HAI SĂ VORBIM</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Solicită O Ofertă
          </h2>
          <div className="line-gold mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Spune-ne despre evenimentul tău și vom crea împreună un moment artistic de neuitat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8 mb-12">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors text-lg"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground text-lg">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/40737560839?text=Bună%20ziua!%20Sunt%20interesat%2Fă%20de%20serviciile%20Azur%20Dance%20Studio%20pentru%20un%20eveniment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white text-sm tracking-widest hover:opacity-90 transition-opacity mb-12"
            >
              <MessageCircle className="w-5 h-5" />
              SCRIE-NE PE WHATSAPP
            </a>

            <div>
              <p className="text-muted-foreground text-sm mb-4">Urmărește-ne</p>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm text-muted-foreground mb-2">Nume complet *</label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-4 bg-card border border-border focus:border-primary outline-none transition-colors text-foreground"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-phone" className="block text-sm text-muted-foreground mb-2">Telefon *</label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-4 bg-card border border-border focus:border-primary outline-none transition-colors text-foreground"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm text-muted-foreground mb-2">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 bg-card border border-border focus:border-primary outline-none transition-colors text-foreground"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-event-type" className="block text-sm text-muted-foreground mb-2">Tipul evenimentului</label>
              <select
                id="contact-event-type"
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full px-4 py-4 bg-card border border-border focus:border-primary outline-none transition-colors text-foreground"
              >
                <option value="">Selectează tipul</option>
                <option value="nunta">Nuntă</option>
                <option value="corporate">Eveniment Corporate</option>
                <option value="privata">Petrecere Privată</option>
                <option value="gala">Gală / Premieră</option>
                <option value="altul">Altul</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm text-muted-foreground mb-2">Mesaj</label>
              <textarea
                id="contact-message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-4 bg-card border border-border focus:border-primary outline-none transition-colors text-foreground resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-gold text-primary-foreground text-sm tracking-widest font-medium hover:opacity-90 transition-opacity shadow-gold"
            >
              TRIMITE CEREREA
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
