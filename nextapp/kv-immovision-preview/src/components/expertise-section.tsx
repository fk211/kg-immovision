'use client';

import { motion } from 'framer-motion';
import { Building, TrendingUp, Key, Hammer, Shield, Users } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Building,
    title: 'Ankauf & Verkauf',
    description: 'Professionelle Abwicklung von Immobilientransaktionen mit maximaler Wertschöpfung für unsere Kunden.',
    features: ['Marktanalyse', 'Wertermittlung', 'Verhandlungsführung', 'Rechtliche Betreuung']
  },
  {
    icon: Key,
    title: 'Vermietung & Verwaltung',
    description: 'Umfassende Betreuung Ihrer Mietimmobilien von der Vermarktung bis zur laufenden Verwaltung.',
    features: ['Mietersuche', 'Objektverwaltung', 'Instandhaltung', 'Mietrechtsberatung']
  },
  {
    icon: Hammer,
    title: 'Projektentwicklung',
    description: 'Von der Idee bis zur Realisierung - wir entwickeln zukunftsweisende Immobilienprojekte.',
    features: ['Standortanalyse', 'Projektplanung', 'Baubetreuung', 'Vermarktung']
  },
  {
    icon: TrendingUp,
    title: 'Investment-Beratung',
    description: 'Strategische Beratung für nachhaltige Immobilieninvestments mit optimaler Rendite.',
    features: ['Portfolio-Analyse', 'Renditeoptimierung', 'Risikoanalyse', 'Steueroptimierung']
  }
];

const stats = [
  { number: '500+', label: 'Erfolgreich vermittelte Objekte' },
  { number: '€50M+', label: 'Vermitteltes Transaktionsvolumen' },
  { number: '98%', label: 'Kundenzufriedenheit' },
  { number: '15+', label: 'Jahre Markterfahrung' }
];

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-6 py-3 mb-8"
          >
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Immobilienexpertise</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
            Unsere 
            <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Wir sind Ihr spezialisierter Partner für den Ankauf, Verkauf, die Vermietung 
            und die Projektierung von hochwertigen Immobilien.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-slate-700 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300">
                  <area.icon className="h-8 w-8 text-slate-700 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-slate-700 transition-colors">
                {area.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {area.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Warum KG Immovision AG?
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mit über 15 Jahren Erfahrung im Premium-Immobilienmarkt verstehen wir die 
                Bedürfnisse anspruchsvoller Kunden. Unser Erfolg basiert auf Vertrauen, 
                Expertise und einem Netzwerk aus erstklassigen Partnern.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-slate-600 mr-3" />
                  <span className="text-gray-700">Vollumfängliche Versicherung und Absicherung</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-slate-600 mr-3" />
                  <span className="text-gray-700">Persönliche Betreuung durch Experten</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-slate-600 mr-3" />
                  <span className="text-gray-700">Nachgewiesene Erfolgsgeschichte</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Ihre Vorteile</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3"></div>
                    Kostenlose Erstberatung
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3"></div>
                    Transparente Kostenstruktur
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3"></div>
                    24/7 Erreichbarkeit
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3"></div>
                    Digitale Prozessabwicklung
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3"></div>
                    Exklusiver Zugang zu Off-Market Objekten
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
