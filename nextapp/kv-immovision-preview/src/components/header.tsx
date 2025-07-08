'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onContactClick: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  const [atTop, setAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY < 50);
    
    // Set initial state
    setAtTop(window.scrollY < 50);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    atTop ? 'bg-transparent' : 'bg-white/95 backdrop-blur-xl border-b shadow-lg'
  );

  const logoClasses = cn(
    'text-2xl font-bold tracking-tight transition-colors duration-300',
    atTop ? 'text-white' : 'text-gray-900'
  );

  const navLinkClasses = cn(
    'transition-colors duration-300 hover:text-slate-900 font-medium',
    atTop ? 'text-gray-200' : 'text-gray-700'
  );

  const navigation = [
    { href: '#immobilien', label: 'Immobilien' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#referenzen', label: 'Referenzen' },
    { href: '#team', label: 'Team' },
    { href: '#kontakt', label: 'Kontakt' }
  ];

  return (
    <>
      {/* Top Bar */}
      {atTop && (
        <div className="hidden sm:block fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-sm text-white text-sm py-2">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a href="tel:+4915127276715" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                +49 151 27276715
              </a>
              <a href="mailto:info@kg-immovision.ag" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                info@kg-immovision.ag
              </a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span>Öffnungszeiten: Mo-Fr 9:00-18:00</span>
            </div>
          </div>
        </div>
      )}

      <header className={headerClasses} style={{ marginTop: atTop ? '36px' : '0' }}>
        <div className="container mx-auto px-4 h-16 sm:h-20 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className={logoClasses}>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl">KG Immovision AG</span>
              <span className="text-xs font-normal opacity-80 hidden sm:block">Exklusivität. Vision. Vertrauen.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClasses}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Search Button - Desktop */}
            <Button
              size="icon"
              variant="ghost"
              className={cn(
                'hidden md:flex transition-all duration-300',
                atTop 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-600 hover:bg-gray-100'
              )}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Contact Button - Desktop */}
            <Button
              onClick={onContactClick}
              className={cn(
                'hidden md:inline-flex transition-all duration-300 font-medium',
                atTop 
                  ? 'bg-slate-900 hover:bg-slate-800 text-white' 
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              )}
            >
              <Phone className="mr-2 h-4 w-4" />
              Beratung anfragen
            </Button>

            {/* Mobile Menu Button */}
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                'lg:hidden transition-all duration-300',
                atTop 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-600 hover:bg-gray-100'
              )}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-slate-900 font-medium py-2 border-b border-gray-100 last:border-0"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="pt-4 space-y-3">
                  <Button
                    onClick={() => {
                      onContactClick();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Beratung anfragen
                  </Button>
                  
                  <div className="text-center space-y-2 text-sm text-gray-600">
                    <a href="tel:+4915127276715" className="block hover:text-slate-700">
                      📞 +49 151 27276715
                    </a>
                    <a href="mailto:info@kg-immovision.ag" className="block hover:text-slate-700">
                      ✉️ info@kg-immovision.ag
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
