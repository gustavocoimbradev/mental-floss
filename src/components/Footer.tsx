
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mental-soft-purple py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-mental-purple mb-2">Mental Floss</h3>
            <p className="text-gray-600 max-w-md">
              Promovendo a saúde mental no ambiente de trabalho. Um recurso para funcionários e gestores.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <span className="mr-2">Feito com</span>
              <Heart size={16} className="text-mental-purple" />
              <span className="ml-2">para sua saúde mental</span>
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Mental Floss - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
