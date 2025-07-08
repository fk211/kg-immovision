'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Search, Filter, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function SearchSection() {
  const [searchType, setSearchType] = useState('buy');

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
            >
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Premium Immobiliensuche</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
              Finden Sie Ihre
              <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                Traumimmobilie
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Durchsuchen Sie unser exklusives Portfolio an handverlesenen Premium-Immobilien 
              in den besten Lagen Deutschlands
            </p>
          </div>

          {/* Search Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8 sm:mb-12 px-4"
          >
            <div className="bg-white rounded-2xl p-1.5 sm:p-2 shadow-2xl border border-slate-100 w-full max-w-md sm:max-w-none sm:w-auto">
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
                {['buy', 'rent', 'sell'].map((type) => (
                  <Button
                    key={type}
                    variant={searchType === type ? "default" : "ghost"}
                    onClick={() => setSearchType(type)}
                    className={`px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                      searchType === type 
                        ? 'bg-slate-900 text-white shadow-lg' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {type === 'buy' ? 'Kaufen' : type === 'rent' ? 'Mieten' : 'Verkaufen'}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-slate-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Location */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-slate-900 mb-2 sm:mb-3">
                  Standort
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
                  <Input 
                    type="text" 
                    placeholder="München, Hamburg, Berlin..." 
                    className="pl-10 sm:pl-12 h-12 sm:h-14 border-slate-200 focus:border-slate-900 focus:ring-slate-900 rounded-xl text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2 sm:mb-3">
                  Immobilienart
                </label>
                <Select>
                  <SelectTrigger className="h-12 sm:h-14 border-slate-200 focus:border-slate-900 focus:ring-slate-900 rounded-xl text-sm sm:text-base">
                    <SelectValue placeholder="Typ auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wohnung">Wohnung</SelectItem>
                    <SelectItem value="haus">Haus</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="gewerbe">Gewerbe</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2 sm:mb-3">
                  Preisspanne
                </label>
                <Select>
                  <SelectTrigger className="h-12 sm:h-14 border-slate-200 focus:border-slate-900 focus:ring-slate-900 rounded-xl text-sm sm:text-base">
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500k">bis 500.000€</SelectItem>
                    <SelectItem value="500k-1m">500k - 1 Mio.€</SelectItem>
                    <SelectItem value="1m-2m">1 - 2 Mio.€</SelectItem>
                    <SelectItem value="2m-5m">2 - 5 Mio.€</SelectItem>
                    <SelectItem value="5m+">über 5 Mio.€</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Rooms */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2 sm:mb-3">
                  Zimmer
                </label>
                <Select>
                  <SelectTrigger className="h-12 sm:h-14 border-slate-200 focus:border-slate-900 focus:ring-slate-900 rounded-xl text-sm sm:text-base">
                    <SelectValue placeholder="Anzahl" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Zimmer</SelectItem>
                    <SelectItem value="2">2 Zimmer</SelectItem>
                    <SelectItem value="3">3 Zimmer</SelectItem>
                    <SelectItem value="4">4 Zimmer</SelectItem>
                    <SelectItem value="5+">5+ Zimmer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                variant="outline" 
                className="flex-1 h-12 sm:h-14 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 rounded-xl text-sm sm:text-base"
              >
                <Filter className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Erweiterte Filter
              </Button>
              <Button className="flex-1 sm:flex-initial sm:px-8 lg:px-12 h-12 sm:h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-sm sm:text-base">
                <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Immobilien durchsuchen</span>
                <span className="sm:hidden">Suchen</span>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm gap-4 sm:gap-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full sm:w-auto">
                  <div className="flex justify-between w-full sm:w-auto sm:block">
                    <span className="text-slate-600">Verfügbare Objekte:</span>
                    <span className="ml-2 font-bold text-slate-900">127</span>
                  </div>
                  <div className="flex justify-between w-full sm:w-auto sm:block">
                    <span className="text-slate-600">Durchschnittspreis:</span>
                    <span className="ml-2 font-bold text-slate-900">€1.8M</span>
                  </div>
                  <div className="flex justify-between w-full sm:w-auto sm:block">
                    <span className="text-slate-600">Neue Objekte heute:</span>
                    <span className="ml-2 font-bold text-slate-900">3</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Popular Locations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 text-center"
          >
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 sm:mb-6">Beliebte Standorte</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
              {['München', 'Hamburg', 'Berlin', 'Frankfurt', 'Düsseldorf', 'Stuttgart', 'Köln'].map((city) => (
                <Button
                  key={city}
                  variant="outline"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 rounded-full font-medium transition-all duration-300 border-slate-200 hover:border-slate-900 text-sm sm:text-base"
                >
                  {city}
                </Button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
