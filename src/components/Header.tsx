
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-mental-soft-purple sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-mental-purple">Mental Floss</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-mental-purple transition duration-300">
              Início
            </Link>
            <Link to="/transtornos" className="text-gray-700 hover:text-mental-purple transition duration-300">
              Transtornos
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-mental-purple transition duration-300">
              Contato
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 z-50 bg-white pt-16 px-4 transition-transform duration-300 ease-in-out transform md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col space-y-6 items-center">
            <Link 
              to="/" 
              className="text-xl font-medium text-gray-700 hover:text-mental-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/transtornos" 
              className="text-xl font-medium text-gray-700 hover:text-mental-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Transtornos
            </Link>
            <Link 
              to="/contato" 
              className="text-xl font-medium text-gray-700 hover:text-mental-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
