
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MessageCircle, Shield } from 'lucide-react';

const formSchema = z.object({
  nome: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Email inválido.",
  }),
  departamento: z.string().min(2, {
    message: "Por favor, informe seu departamento.",
  }),
  assunto: z.string().min(5, {
    message: "Assunto deve ter pelo menos 5 caracteres.",
  }),
  mensagem: z.string().min(10, {
    message: "Mensagem deve ter pelo menos 10 caracteres.",
  }),
});

const ContatoPage: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      departamento: "",
      assunto: "",
      mensagem: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Aqui você implementaria a lógica para enviar o formulário para o backend
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Nossa equipe de psicólogos entrará em contato em breve.",
    });
    
    form.reset();
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mental-light-blue to-mental-soft-green py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-700">
              Nossa equipe de psicólogos está pronta para te ajudar. Todas as comunicações são confidenciais.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie uma mensagem</h2>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="nome"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                  <Input placeholder="Seu nome" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                  <Input placeholder="seu.email@empresa.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="departamento"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Departamento</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu departamento ou função" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="assunto"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Assunto</FormLabel>
                              <FormControl>
                                <Input placeholder="Sobre o que você quer conversar?" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="mensagem"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mensagem</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Descreva como podemos ajudá-lo(a)..." 
                                  className="min-h-[150px]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                Sua mensagem será tratada com total confidencialidade.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex justify-end">
                          <Button type="submit" className="bg-mental-purple hover:bg-mental-purple/90">
                            Enviar mensagem
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="bg-mental-soft-purple border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Confidencialidade</h3>
                    <div className="flex items-center mb-4">
                      <Shield className="text-mental-purple mr-3" size={24} />
                      <p className="text-gray-700">Todas as conversas são confidenciais</p>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8">Outras formas de contato</h3>
                    
                    <div className="flex items-center mb-4">
                      <MessageCircle className="text-mental-purple mr-3" size={24} />
                      <p className="text-gray-700">Chat ao vivo (dias úteis, 9h às 17h)</p>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="font-semibold text-gray-800 mb-2">Atendimento de emergência</h4>
                      <p className="text-gray-700 text-sm">
                        Se você está em crise ou precisa de ajuda imediata, ligue para o CVV:
                      </p>
                      <p className="font-bold text-mental-purple mt-1">188</p>
                      <p className="text-gray-700 text-sm mt-4">
                        Centro de Valorização da Vida - Disponível 24h, todos os dias
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Meu gestor saberá que procurei ajuda?</h3>
                <p className="text-gray-600">
                  Não. Todas as comunicações são estritamente confidenciais. Seu gestor ou colegas não serão informados sobre sua consulta, a menos que você autorize expressamente.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Quais tipos de problemas posso trazer?</h3>
                <p className="text-gray-600">
                  Você pode discutir qualquer problema que esteja afetando seu bem-estar mental, seja relacionado ao trabalho (estresse, burnout, conflitos) ou pessoal (ansiedade, depressão, problemas familiares).
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Quanto tempo demora para receber uma resposta?</h3>
                <p className="text-gray-600">
                  Nossa equipe se compromete a responder todas as mensagens em até 24 horas úteis. Para casos urgentes, recomendamos utilizar o chat ao vivo durante o horário comercial.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Os atendimentos são gratuitos?</h3>
                <p className="text-gray-600">
                  Sim, todos os serviços de apoio psicológico oferecidos fazem parte dos benefícios da empresa e são totalmente gratuitos para os colaboradores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContatoPage;
