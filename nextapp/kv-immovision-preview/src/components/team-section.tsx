'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, Linkedin, Award, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const team = [
  {
    name: 'Valentin Leon Köller',
    position: 'Geschäftsführer',
    phone: '+49 151 27276715',
    email: 'valentin.koeller@kg-immovision.ag',
    image: '/images/valentin.jpg',
    specialties: ['Luxusimmobilien', 'Investment-Beratung', 'Projektentwicklung'],
    experience: '15+ Jahre',
    languages: ['Deutsch', 'Englisch', 'Französisch'],
    awards: ['Top Makler 2023', 'IVD Auszeichnung'],
    description: 'Als Geschäftsführer mit über 15 Jahren Erfahrung im Premium-Immobilienmarkt führt Valentin unser Team mit Leidenschaft und Expertise. Seine Spezialisierung auf Luxusimmobilien und komplexe Transaktionen macht ihn zum idealen Partner für anspruchsvolle Projekte.'
  },
  {
    name: 'Clarissa Franziska Görnandt',
    position: 'Partner',
    phone: '+49 151 75091716',
    email: 'clarissa.goernandt@kg-immovision.ag',
    image: '/images/clarissa.jpg',
    specialties: ['Vermietung', 'Kundenbtreuung', 'Marktanalyse'],
    experience: '12+ Jahre',
    languages: ['Deutsch', 'Englisch', 'Spanisch'],
    awards: ['Kundenservice Excellence 2023', 'FIABCI Mitglied'],
    description: 'Clarissa bringt ihre umfassende Expertise in der Vermietung und Kundenbetreuung ein. Ihre analytischen Fähigkeiten und ihr Gespür für Markttrends machen sie zur ersten Anlaufstelle für strategische Immobilienentscheidungen.'
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
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
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Erstklassiges Expertenteam</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
            Ihr 
            <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              Expertenteam
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Lernen Sie die Experten kennen, die Ihre Immobilienträume mit Leidenschaft und 
            professioneller Expertise verwirklichen.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="w-30 h-30 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-slate-700 text-white p-2 rounded-full">
                    <Award className="h-4 w-4" />
                  </div>
                </div>

                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg text-slate-600 font-semibold mb-3">
                    {member.position}
                  </p>
                  
                  {/* Contact Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center md:justify-start text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <a href={`tel:${member.phone}`} className="hover:text-slate-600 transition-colors">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-center md:justify-start text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <a href={`mailto:${member.email}`} className="hover:text-slate-600 transition-colors">
                        {member.email}
                      </a>
                    </div>
                  </div>

                  {/* Experience & Rating */}
                  <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-600">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                      {member.experience}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1">5.0 Bewertung</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {member.description}
              </p>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Spezialisierungen:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages & Awards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Sprachen:</h5>
                  <div className="text-sm text-gray-600">
                    {member.languages.join(', ')}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Auszeichnungen:</h5>
                  <div className="text-sm text-gray-600">
                    {member.awards.join(', ')}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 bg-slate-700 hover:bg-slate-800">
                  <Phone className="mr-2 h-4 w-4" />
                  Anrufen
                </Button>
                <Button variant="outline" className="flex-1">
                  <Mail className="mr-2 h-4 w-4" />
                  E-Mail senden
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Unser Team in Zahlen</h3>
            <p className="text-slate-100">Die Erfolgsgeschichte unseres Expertenteams</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-slate-200 text-sm">Jahre kombinierte Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-slate-200 text-sm">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-slate-200 text-sm">Erreichbarkeit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">5★</div>
              <div className="text-slate-200 text-sm">Durchschnittsbewertung</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
