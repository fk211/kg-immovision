'use client';

import { motion } from 'framer-motion';
import { Search, ArrowRight, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/1.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white order-2 lg:order-1"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 mb-6"
              >
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">Vertrauenswürdig seit 2009</span>
              </motion.div>

              {/* Main Brand */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                  <span className="text-white">KG</span>{' '}
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Immovision
                  </span>
                  <span className="text-white"> AG</span>
                </h1>
                <div className="flex items-center gap-2 sm:gap-3 mb-6">
                  <div className="h-px bg-gradient-to-r from-white to-transparent flex-1 max-w-16 sm:max-w-24"></div>
                  <p className="text-sm sm:text-base lg:text-xl text-gray-300 font-light tracking-wider text-center">
                    Exklusivität. Vision. Vertrauen.
                  </p>
                  <div className="h-px bg-gradient-to-l from-white to-transparent flex-1 max-w-16 sm:max-w-24"></div>
                </div>
              </motion.div>

              {/* Value Proposition */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-4 text-white">
                  Ihr Partner für außergewöhnliche Immobilien
                </h2>
                <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed max-w-xl">
                  Spezialisiert auf Ankauf, Verkauf, Vermietung und Projektierung 
                  von hochwertigen Immobilien. Mit über 15 Jahren Erfahrung und 
                  einem Netzwerk von Vertrauen.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
              >
                <Button 
                  size="lg" 
                  className="h-12 sm:h-14 px-6 sm:px-8 bg-white text-slate-900 hover:bg-gray-100 font-semibold text-sm sm:text-base"
                >
                  Portfolio entdecken
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-12 sm:h-14 px-6 sm:px-8 border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 font-semibold transition-all duration-300 text-sm sm:text-base"
                >
                  Beratung vereinbaren
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="grid grid-cols-3 gap-4 sm:gap-8"
              >
                <div>
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Vermittelte Objekte</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1">€50M+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Transaktionsvolumen</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Kundenzufriedenheit</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Search Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0 order-1 lg:order-2"
            >
              <Card className="p-6 bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Immobilie finden
                  </h3>
                  <p className="text-sm text-slate-600">
                    Entdecken Sie exklusive Objekte in bester Lage
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input 
                      placeholder="Standort eingeben..." 
                      className="pl-10 h-12 border-slate-200 focus:border-slate-400" 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Select>
                      <SelectTrigger className="h-12 border-slate-200 focus:border-slate-400">
                        <SelectValue placeholder="Kauf" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kauf">Kauf</SelectItem>
                        <SelectItem value="miete">Miete</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="h-12 border-slate-200 focus:border-slate-400">
                        <SelectValue placeholder="Typ wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wohnung">Wohnung</SelectItem>
                        <SelectItem value="haus">Haus</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="penthouse">Penthouse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-semibold">
                    <Search className="mr-2 h-4 w-4" />
                    Suchen
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Aktuelle Objekte:</span>
                    <span className="font-semibold text-slate-900">127 verfügbar</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-wider">Scrollen</span>
          <div className="w-5 h-8 border border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
