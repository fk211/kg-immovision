'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactSectionProps {
  onContactClick: () => void;
}

export default function ContactSection({ onContactClick }: ContactSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Bereit für Ihr nächstes Immobilienprojekt?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Kontaktieren Sie unsere Experten für eine unverbindliche Beratung. 
            Wir freuen uns darauf, Ihre Immobilienträume zu verwirklichen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-8">Kontaktieren Sie uns</h3>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Telefon</h4>
                  <p className="text-slate-300 mb-2">Sofortige Beratung - sprechen Sie direkt mit unseren Experten</p>
                  <div className="space-y-1">
                    <a href="tel:+4915127276715" className="block hover:text-white transition-colors">
                      Valentin Leon Köller: +49 151 27276715
                    </a>
                    <a href="tel:+4915175091716" className="block hover:text-white transition-colors">
                      Clarissa Franziska Görnandt: +49 151 75091716
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">E-Mail</h4>
                  <p className="text-slate-300 mb-2">Detaillierte Anfragen und Unterlagen</p>
                  <a href="mailto:info@kg-immovision.ag" className="hover:text-white transition-colors">
                    info@kg-immovision.ag
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Büro</h4>
                  <p className="text-slate-300 mb-2">Besuchen Sie uns in unserem Büro</p>
                  <address className="not-italic">
                    KG Immovision AG<br />
                    Maximilianstraße 35<br />
                    80539 München
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Öffnungszeiten</h4>
                  <div className="text-slate-300 space-y-1">
                    <p>Montag - Freitag: 9:00 - 18:00 Uhr</p>
                    <p>Samstag: 10:00 - 16:00 Uhr</p>
                    <p>Sonntag: Nach Vereinbarung</p>
                    <p className="text-sm mt-2">24/7 Notfall-Hotline verfügbar</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Wie können wir Ihnen helfen?</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <Button 
                onClick={onContactClick}
                className="w-full bg-white text-slate-900 hover:bg-slate-100 justify-start h-auto p-3 sm:p-4"
              >
                <MessageCircle className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base">Kostenlose Beratung</div>
                  <div className="text-xs sm:text-sm opacity-80">Unverbindliche Erstberatung zu Ihrem Projekt</div>
                </div>
              </Button>

              <Button 
                variant="outline" 
                className="w-full border-white/50 bg-white/5 text-white hover:bg-white hover:text-slate-900 hover:border-white justify-start h-auto p-3 sm:p-4 transition-all duration-300"
              >
                <Calendar className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base">Termin vereinbaren</div>
                  <div className="text-xs sm:text-sm opacity-80">Persönlicher Beratungstermin in unserem Büro</div>
                </div>
              </Button>

              <Button 
                variant="outline" 
                className="w-full border-white/50 bg-white/5 text-white hover:bg-white hover:text-slate-900 hover:border-white justify-start h-auto p-3 sm:p-4 transition-all duration-300"
              >
                <MapPin className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base">Objektbewertung</div>
                  <div className="text-xs sm:text-sm opacity-80">Kostenlose Marktbewertung Ihrer Immobilie</div>
                </div>
              </Button>

              <Button 
                variant="outline" 
                className="w-full border-white/50 bg-white/5 text-white hover:bg-white hover:text-slate-900 hover:border-white justify-start h-auto p-3 sm:p-4 transition-all duration-300"
              >
                <Phone className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base">Rückruf anfordern</div>
                  <div className="text-xs sm:text-sm opacity-80">Wir rufen Sie zum gewünschten Zeitpunkt an</div>
                </div>
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 p-4 bg-red-500/20 rounded-2xl border border-red-300/30">
              <h4 className="font-semibold mb-2 flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                24/7 Notfall-Hotline
              </h4>
              <p className="text-sm text-slate-300 mb-2">
                Für dringende Immobilienangelegenheiten außerhalb der Geschäftszeiten
              </p>
              <a href="tel:+4915127276715" className="font-semibold hover:text-white transition-colors">
                +49 151 27276715
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Warum warten?</h4>
            <p className="text-slate-300 mb-6">
              Der perfekte Zeitpunkt für Ihre Immobilienziele ist jetzt. 
              Lassen Sie uns gemeinsam den ersten Schritt gehen.
            </p>
            <Button 
              onClick={onContactClick}
              size="lg" 
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4"
            >
              Jetzt kostenlos beraten lassen
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
