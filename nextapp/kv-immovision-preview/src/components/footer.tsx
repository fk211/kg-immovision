'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">KG Immovision AG</h3>
            <p className="text-3xl font-light text-slate-300 mb-4">
              Exklusivität. Vision. Vertrauen.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ihr spezialisierter Partner für den Ankauf, Verkauf, die Vermietung und 
              die Projektierung von hochwertigen Immobilien. Mit über 15 Jahren Erfahrung 
              im Premium-Immobilienmarkt setzen wir neue Maßstäbe in der Branche.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-slate-400" />
                <span>Maximilianstraße 35, 80539 München</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-slate-400" />
                <span>+49 151 27276715</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-slate-400" />
                <span>info@kg-immovision.ag</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Unsere Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Immobilien kaufen</Link></li>
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Immobilien verkaufen</Link></li>
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Vermietung</Link></li>
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Projektentwicklung</Link></li>
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Investment-Beratung</Link></li>
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Objektverwaltung</Link></li>
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Marktanalysen</Link></li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Wichtige Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Über uns</Link></li>
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Aktuelle Objekte</Link></li>
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Referenzen</Link></li>
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Blog & News</Link></li>
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Karriere</Link></li>
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Kontakt</Link></li>
              <li><Link href="#" className="hover:text-slate-400 transition-colors">Impressum</Link></li>
            </ul>
          </motion.div>
        </div>

        {/* Social Media & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">Folgen Sie uns:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-slate-300 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-slate-300 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-slate-300 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-slate-300 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Newsletter:</span>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail"
                  className="bg-gray-800 border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:border-slate-400"
                />
                <Button className="bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-r-lg rounded-l-none">
                  Abonnieren
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 KG Immovision AG. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-slate-400 transition-colors">Datenschutz</Link>
              <Link href="#" className="hover:text-slate-400 transition-colors">AGB</Link>
              <Link href="#" className="hover:text-slate-400 transition-colors">Cookie-Richtlinie</Link>
              <Link href="#" className="hover:text-slate-400 transition-colors">Sitemap</Link>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
              <span>Mitglied im IVD (Immobilienverband Deutschland)</span>
              <span>•</span>
              <span>Zertifiziert nach DIN EN 15733</span>
              <span>•</span>
              <span>FIABCI Member</span>
              <span>•</span>
              <span>Versichert bei Allianz Immobilien</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
