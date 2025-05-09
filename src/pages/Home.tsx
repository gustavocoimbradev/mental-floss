
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, UserPlus, BookOpen, MessageCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mental-light-blue to-mental-soft-purple py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Cuide da sua saúde mental no trabalho
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Seu bem-estar mental é tão importante quanto sua saúde física. 
              Descubra recursos para manter o equilíbrio no ambiente profissional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/transtornos" className="bg-mental-purple text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300">
                Conhecer os transtornos
              </Link>
              <Link to="/contato" className="bg-white text-mental-purple border border-mental-purple px-6 py-3 rounded-full hover:bg-mental-soft-purple transition duration-300">
                Falar com psicólogos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A importância da saúde mental no trabalho</h2>
            <p className="text-gray-600">
              Entender e priorizar a saúde mental no ambiente profissional beneficia tanto os colaboradores quanto a empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition duration-300 bg-mental-soft-purple">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <ShieldCheck size={48} className="text-mental-purple" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Previne o burnout</h3>
                <p className="text-gray-600 text-center">
                  Práticas saudáveis previnem esgotamento e aumentam a resiliência emocional no trabalho.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition duration-300 bg-mental-light-blue">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Heart size={48} className="text-mental-purple" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Melhora o bem-estar</h3>
                <p className="text-gray-600 text-center">
                  Colaboradores mentalmente saudáveis têm maior satisfação e qualidade de vida.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition duration-300 bg-mental-soft-green">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <UserPlus size={48} className="text-mental-purple" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Aumenta a produtividade</h3>
                <p className="text-gray-600 text-center">
                  Mentes saudáveis são mais criativas, engajadas e eficientes na realização de tarefas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Entendendo os números</h2>
            <p className="text-gray-600">
              A saúde mental afeta milhões de trabalhadores no Brasil. Veja alguns dados importantes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-4xl font-bold text-mental-purple mb-2">30%</p>
              <p className="text-gray-600">dos trabalhadores brasileiros já enfrentaram burnout</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-4xl font-bold text-mental-purple mb-2">45%</p>
              <p className="text-gray-600">relatam altos níveis de estresse no ambiente profissional</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-4xl font-bold text-mental-purple mb-2">75%</p>
              <p className="text-gray-600">consideram a saúde mental importante para o desempenho</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-4xl font-bold text-mental-purple mb-2">15%</p>
              <p className="text-gray-600">das faltas no trabalho são relacionadas a transtornos mentais</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-mental-purple text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Precisa conversar com um profissional?</h2>
              <p className="text-lg opacity-90 mb-6">
                Nossa equipe de psicólogos está disponível para ajudar você a lidar com desafios emocionais no ambiente de trabalho.
              </p>
              <div className="flex gap-4 items-center">
                <Link to="/contato" className="bg-white text-mental-purple px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition duration-300 inline-flex items-center">
                  <MessageCircle size={18} className="mr-2" />
                  Agendar conversa
                </Link>
                <Link to="/transtornos" className="text-white underline hover:text-opacity-80 transition duration-300 inline-flex items-center">
                  <BookOpen size={18} className="mr-2" />
                  Ler mais
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <h3 className="text-xl font-semibold mb-3 text-center">Não está sozinho</h3>
                <p className="opacity-90 text-center mb-4">
                  Muitos profissionais enfrentam desafios semelhantes. Buscar ajuda é um sinal de força, não de fraqueza.
                </p>
                <div className="flex justify-center">
                  <Heart size={48} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
