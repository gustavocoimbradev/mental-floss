
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TranstornosPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mental-soft-purple to-mental-light-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Transtornos Mentais no Ambiente de Trabalho
            </h1>
            <p className="text-xl text-gray-700">
              Conhecer os sinais e sintomas é o primeiro passo para o cuidado e a busca por ajuda.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-10 text-lg">
              Os transtornos mentais no ambiente de trabalho são condições que afetam o pensamento, o humor, o comportamento e a capacidade de executar tarefas. Conhecer seus sinais e sintomas pode ajudar na identificação precoce e no tratamento adequado.
            </p>
            
            <Tabs defaultValue="burnout" className="mb-16">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="burnout">Burnout</TabsTrigger>
                <TabsTrigger value="ansiedade">Ansiedade</TabsTrigger>
                <TabsTrigger value="depressao">Depressão</TabsTrigger>
                <TabsTrigger value="estresse">Estresse</TabsTrigger>
              </TabsList>
              
              <TabsContent value="burnout" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-mental-purple mb-4">Síndrome de Burnout</h2>
                    <p className="text-gray-700 mb-4">
                      A Síndrome de Burnout é um estado de esgotamento físico e mental causado pelo excesso de trabalho. É oficialmente reconhecida pela Organização Mundial da Saúde como um fenômeno ocupacional.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Sinais e Sintomas</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Exaustão emocional e física persistente</li>
                      <li>Sentimentos de cinismo e despersonalização em relação ao trabalho</li>
                      <li>Redução da eficácia profissional e da realização pessoal</li>
                      <li>Dores de cabeça e problemas gastrointestinais frequentes</li>
                      <li>Insônia e alterações no apetite</li>
                      <li>Dificuldade de concentração e tomada de decisões</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Como Lidar</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Estabelecer limites claros entre trabalho e vida pessoal</li>
                      <li>Praticar técnicas de relaxamento e mindfulness</li>
                      <li>Buscar apoio profissional com psicólogos ou psiquiatras</li>
                      <li>Reavaliar prioridades e aprender a dizer "não"</li>
                      <li>Dialogar com gestores sobre carga de trabalho e expectativas</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="ansiedade" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-mental-purple mb-4">Transtornos de Ansiedade</h2>
                    <p className="text-gray-700 mb-4">
                      Os transtornos de ansiedade são caracterizados por preocupações excessivas, medo persistente e reações físicas intensas que interferem na vida profissional e pessoal do indivíduo.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Sinais e Sintomas</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Preocupação constante com prazos e resultados</li>
                      <li>Medo de falhar ou ser avaliado negativamente</li>
                      <li>Inquietação e dificuldade para relaxar</li>
                      <li>Sintomas físicos como tremores, palpitações e sudorese</li>
                      <li>Dificuldade de concentração e de tomar decisões</li>
                      <li>Tensão muscular e fadiga constante</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Como Lidar</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Praticar técnicas de respiração profunda e relaxamento</li>
                      <li>Estabelecer uma rotina que inclua atividades físicas regulares</li>
                      <li>Limitar o consumo de cafeína e outros estimulantes</li>
                      <li>Praticar mindfulness e meditação</li>
                      <li>Buscar terapia cognitivo-comportamental (TCC)</li>
                      <li>Considerar o apoio medicamentoso com orientação médica</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="depressao" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-mental-purple mb-4">Depressão no Trabalho</h2>
                    <p className="text-gray-700 mb-4">
                      A depressão é uma condição médica séria que afeta como a pessoa se sente, pensa e age. No contexto laboral, pode ser desencadeada ou agravada por fatores como pressão excessiva, falta de reconhecimento ou ambiente de trabalho tóxico.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Sinais e Sintomas</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Perda de interesse em atividades que antes eram prazerosas</li>
                      <li>Humor deprimido durante a maior parte do dia</li>
                      <li>Perda ou ganho significativo de peso</li>
                      <li>Fadiga constante e perda de energia</li>
                      <li>Sentimentos de inutilidade ou culpa excessiva</li>
                      <li>Dificuldade para se concentrar ou tomar decisões</li>
                      <li>Pensamentos recorrentes de morte ou suicídio</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Como Lidar</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Buscar apoio profissional de psicólogos e psiquiatras</li>
                      <li>Manter uma rotina regular de sono e alimentação</li>
                      <li>Praticar exercícios físicos regularmente</li>
                      <li>Estabelecer metas realistas e celebrar pequenas conquistas</li>
                      <li>Construir uma rede de apoio com colegas, amigos e familiares</li>
                      <li>Considerar adaptações no ambiente de trabalho quando possível</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="estresse" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-mental-purple mb-4">Estresse Ocupacional</h2>
                    <p className="text-gray-700 mb-4">
                      O estresse ocupacional é uma resposta física e emocional prejudicial que ocorre quando as exigências do trabalho não correspondem às capacidades, recursos ou necessidades do trabalhador.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Sinais e Sintomas</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Irritabilidade e impaciência constantes</li>
                      <li>Dificuldade para relaxar, mesmo após o expediente</li>
                      <li>Dores de cabeça e tensão muscular frequentes</li>
                      <li>Alterações no sono e no apetite</li>
                      <li>Dificuldade de concentração e esquecimento</li>
                      <li>Diminuição da produtividade e da criatividade</li>
                      <li>Aumento do uso de substâncias como álcool, tabaco ou cafeína</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Como Lidar</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Identificar os gatilhos específicos de estresse</li>
                      <li>Praticar técnicas de gerenciamento do tempo</li>
                      <li>Aprender a estabelecer limites e prioridades</li>
                      <li>Incorporar pausas regulares durante o dia de trabalho</li>
                      <li>Praticar atividades físicas e técnicas de relaxamento</li>
                      <li>Desenvolver hobbies e interesses fora do ambiente profissional</li>
                      <li>Buscar adaptações no ambiente de trabalho quando necessário</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="bg-mental-soft-purple rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Quando buscar ajuda profissional?</h2>
              <p className="text-gray-700 mb-4">
                Se você identificar algum dos sintomas mencionados em você ou em um colega, e eles persistirem por mais de duas semanas, é importante buscar ajuda profissional. O tratamento precoce aumenta significativamente as chances de recuperação.
              </p>
              <p className="text-gray-700 font-medium">
                Lembre-se: buscar ajuda não é sinal de fraqueza, mas de autocuidado e responsabilidade com sua saúde.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TranstornosPage;
