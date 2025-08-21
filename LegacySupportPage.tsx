
import React from 'react';
import { Link } from 'react-router-dom';

const LegacySupportPage: React.FC = () => {
    return (
        <>
            <div className="bg-unistal-dark text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tighter">
                        Suporte para Equipamentos Antigos e Fora de Linha
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
                        Onde a maioria vê um problema, nós vemos a solução. Damos vida nova a máquinas clássicas.
                    </p>
                </div>
            </div>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="prose prose-lg max-w-none text-slate-700">
                            <h2 className="text-3xl font-extrabold text-unistal-dark">O Valor da Experiência</h2>
                            <p>
                                Equipamentos gráficos antigos ou fora de linha muitas vezes são robustos e confiáveis, representando um ativo valioso para sua empresa. No entanto, encontrar suporte técnico qualificado e peças de reposição pode ser um grande desafio. É aqui que a expertise de mais de 30 anos da UNISTAL faz toda a diferença.
                            </p>
                            <p>
                                Somos especialistas em diagnosticar, reparar e adaptar soluções para máquinas que não possuem mais suporte do fabricante. Nossa oficina está preparada para recuperar e até fabricar componentes, garantindo que seu equipamento continue produzindo com a qualidade e a confiabilidade de sempre.
                            </p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/600/400?random=35" alt="Técnico da UNISTAL trabalhando em máquina gráfica antiga" className="rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-4xl">Nossas Soluções para Máquinas Clássicas</h2>
                    </div>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                             <h3 className="font-bold text-lg text-unistal-dark">Diagnóstico Preciso</h3>
                             <p className="mt-2 text-slate-600">Conhecimento profundo para identificar a causa raiz dos problemas em sistemas mecânicos e elétricos antigos.</p>
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-md">
                             <h3 className="font-bold text-lg text-unistal-dark">Recuperação de Peças</h3>
                             <p className="mt-2 text-slate-600">Capacidade de restaurar componentes desgastados, mantendo a originalidade e a funcionalidade do equipamento.</p>
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-md">
                             <h3 className="font-bold text-lg text-unistal-dark">Adaptação de Componentes</h3>
                             <p className="mt-2 text-slate-600">Quando uma peça é impossível de encontrar, desenvolvemos soluções e adaptações seguras e eficazes.</p>
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-md">
                             <h3 className="font-bold text-lg text-unistal-dark">Manutenção Especializada</h3>
                             <p className="mt-2 text-slate-600">Planos de manutenção preventiva desenhados especificamente para as necessidades de equipamentos mais antigos.</p>
                        </div>
                    </div>
                </div>
            </section>

             <section className="bg-gradient-to-r from-unistal-dark to-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Não Desista do Seu Equipamento.</h2>
                    <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">Antes de considerar um investimento alto em uma nova máquina, consulte nossos especialistas. A solução para sua produção pode estar em revitalizar o equipamento que você já possui.</p>
                    <div className="mt-10">
                         <Link to="/contato" className="bg-unistal-yellow text-unistal-dark font-bold py-4 px-10 rounded-full hover:bg-unistal-yellow-darker transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Consultar um Especialista
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LegacySupportPage;
