'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Heart, Share2, MapPin, Bed, Bath, Car, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';

const properties = [
  {
    id: 1,
    title: 'Exklusive Penthouse-Wohnung',
    location: 'München Bogenhausen',
    price: '2.450.000',
    priceType: 'Kaufpreis',
    image: '/images/1.jpg',
    beds: 4,
    baths: 3,
    parking: 2,
    area: 185,
    type: 'Penthouse',
    features: ['Dachterrasse', 'Panoramablick', 'Aufzug', 'Concierge']
  },
  {
    id: 2,
    title: 'Moderne Villa mit Garten',
    location: 'Hamburg Blankenese',
    price: '3.250.000',
    priceType: 'Kaufpreis',
    image: '/images/2.jpg',
    beds: 6,
    baths: 4,
    parking: 3,
    area: 320,
    type: 'Villa',
    features: ['Privater Garten', 'Swimmingpool', 'Sauna', 'Garage']
  },
  {
    id: 3,
    title: 'Luxus-Loft im Zentrum',
    location: 'Berlin Mitte',
    price: '1.850.000',
    priceType: 'Kaufpreis',
    image: '/images/3.jpg',
    beds: 3,
    baths: 2,
    parking: 1,
    area: 145,
    type: 'Loft',
    features: ['Hohe Decken', 'Industriedesign', 'Dachterrasse', 'Smart Home']
  },
  {
    id: 4,
    title: 'Elegante Stadtwohnung',
    location: 'Frankfurt Westend',
    price: '4.500',
    priceType: 'Monatliche Miete',
    image: '/images/4.jpg',
    beds: 3,
    baths: 2,
    parking: 1,
    area: 125,
    type: 'Wohnung',
    features: ['Balkon', 'Einbauküche', 'Parkett', 'Aufzug']
  }
];

export default function FeaturedProperties() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ausgewählte Immobilien
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Entdecken Sie unsere handverlesenen Premium-Immobilien in den begehrtesten Lagen Deutschlands
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => toggleFavorite(property.id)}
                    className={`p-2 h-auto rounded-full backdrop-blur-sm transition-all ${
                      favorites.includes(property.id)
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-white/80 text-gray-600 hover:bg-white'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${favorites.includes(property.id) ? 'fill-current' : ''}`} />
                  </Button>
                  <Button 
                    size="sm"
                    variant="secondary"
                    className="p-2 h-auto rounded-full bg-white/80 text-gray-600 hover:bg-white backdrop-blur-sm"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Property Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Price */}
                <div className="mb-3">
                  <div className="text-2xl font-bold text-gray-900">
                    €{property.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">{property.priceType}</div>
                </div>

                {/* Title & Location */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="grid grid-cols-4 gap-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-4 w-4 mr-1" />
                    <span>{property.parking}</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize className="h-4 w-4 mr-1" />
                    <span>{property.area}m²</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {property.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {property.features.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{property.features.length - 2} weitere
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                  Details ansehen
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="px-8 py-4">
            Alle Immobilien anzeigen
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
