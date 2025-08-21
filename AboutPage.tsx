import React from 'react';
import { Link } from 'react-router-dom';

const ValueCard: React.FC<{icon: React.ReactNode, title: string, children: React.ReactNode}> = ({icon, title, children}) => (
    <div className="bg-white p-6 rounded-xl shadow-lg h-full">
        <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-unistal-yellow/10 text-unistal-yellow">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-unistal-dark">{title}</h3>
        </div>
        <div className="text-slate-600">{children}</div>
    </div>
);


const AboutPage: React.FC = () => {
    return (
        <>
            <div className="bg-unistal-dark text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tighter">
                        UNISTAL: Mais de 30 Anos Construindo Confiança na Indústria Gráfica
                    </h1>
                </div>
            </div>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="prose prose-lg max-w-none text-slate-700">
                            <h2 className="text-3xl font-extrabold text-unistal-dark">Nossa Jornada: Tradição e Inovação Desde 1993</h2>
                            <p>
                                Fundada em 1993, a UNISTAL Serviços e Equipamentos de Máquinas Gráficas nasceu da visão de suprir uma demanda crescente por manutenção e peças de alta qualidade no setor gráfico. Ao longo de mais de três décadas, transformamos essa visão em uma realidade sólida, tornando-nos referência no mercado.
                            </p>
                            <p>
                                Com um legado de mais de 30 anos, nossa trajetória é marcada pela paixão por máquinas gráficas e pelo compromisso inabalável com a excelência. Crescemos e evoluímos junto com a indústria, adaptando-nos às novas tecnologias e, ao mesmo tempo, mantendo a expertise insubstituível em equipamentos clássicos.
                            </p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/600/400?random=30" alt="Equipe de técnicos especialistas UNISTAL em manutenção de máquinas gráficas" className="rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-5xl tracking-tight">Nossa Missão: Impulsionar Sua Produção com Excelência</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                            Nossa missão é ser o parceiro essencial para gráficas de todos os portes e profissionais autônomos, oferecendo soluções completas em serviços e equipamentos que garantam a máxima performance, durabilidade e confiabilidade de suas máquinas.
                        </p>
                    </div>

                    <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-4xl tracking-tight text-center mb-12">Nossos Valores: Os Pilares da UNISTAL</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                       <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>} title="Excelência"><p>Busca contínua pela qualidade superior em cada serviço e peça.</p></ValueCard>
                       <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} title="Confiabilidade"><p>Construção de relações duradouras baseadas na transparência.</p></ValueCard>
                       <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>} title="Expertise"><p>Conhecimento profundo e constantemente atualizado sobre o setor.</p></ValueCard>
                       <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.94l-2.5 5M14 10L9 15m0 0l-2-2m2 2v-2a2 2 0 012-2h.085a2 2 0 011.736.94l2.5 5" /></svg>} title="Compromisso"><p>Dedicação total em entregar soluções que superem as expectativas.</p></ValueCard>
                       <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} title="Inovação"><p>Disposição para evoluir e incorporar novas técnicas e tecnologias.</p></ValueCard>
                    </div>
                </div>
            </section>

             <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto prose prose-lg text-slate-700 text-center">
                         <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-4xl tracking-tight">O Diferencial UNISTAL: Experiência que Gera Resultados</h2>
                         <p>
                            O que nos destaca no mercado? A combinação única de um conhecimento técnico aprofundado, construído ao longo de 30 anos de atuação, e um atendimento focado na necessidade real de cada cliente. Não apenas consertamos máquinas; garantimos que sua produção continue fluindo, minimizando paradas e maximizando sua eficiência.
                         </p>
                         <p>
                            Somos especialistas em desafios, principalmente no suporte a máquinas gráficas antigas e modelos sem garantia, onde a expertise e a capacidade de encontrar soluções inovadoras são cruciais. Conte com a UNISTAL para transformar seus desafios em oportunidades.
                         </p>
                    </div>
                </div>
            </section>

             <section className="bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold text-unistal-dark">Faça Parte da Nossa História de Sucesso</h3>
                        <p className="mt-4 text-lg text-slate-600">
                           Descubra a diferença de trabalhar com uma empresa que entende profundamente suas máquinas. Explore nossos serviços ou entre em contato para uma consultoria.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                             <Link to="/servicos" className="bg-unistal-yellow text-unistal-dark font-bold py-3 px-8 rounded-full hover:bg-unistal-yellow-darker transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Ver Nossos Serviços
                            </Link>
                             <Link to="/contato" className="bg-transparent border-2 border-unistal-dark text-unistal-dark font-bold py-3 px-8 rounded-full hover:bg-unistal-dark hover:text-white transition-all duration-300">
                                Fale Conosco
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
