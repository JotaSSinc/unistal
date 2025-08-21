import React from 'react';
import { Link } from 'react-router-dom';
import { MACHINES_LIST, COMPONENTS_LIST } from '../constants';

const ProductsPage: React.FC = () => {
    return (
        <>
            <div className="bg-unistal-dark text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tighter">
                        Máquinas Gráficas: Nossa Expertise para o Seu Parque de Equipamentos
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
                        Nossa equipe está constantemente atualizada e possui o know-how necessário para trabalhar com as tecnologias mais recentes e também com o legado de equipamentos que construíram a história das gráficas.
                    </p>
                </div>
            </div>

            <div className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-4xl">Nossa Expertise Abrange as Principais Marcas do Mercado</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                            Temos profunda experiência em manutenção, reparo e fornecimento de peças para equipamentos das seguintes marcas renomadas:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MACHINES_LIST.map((machine, index) => (
                            <div key={index} className="bg-slate-50 border border-slate-200/80 rounded-xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-2xl font-bold text-unistal-dark">{machine.name}</h3>
                                <p className="mt-2 text-slate-600">{machine.description}</p>
                            </div>
                        ))}
                         <div className="bg-unistal-yellow/10 border border-unistal-yellow/50 rounded-xl p-8 text-center">
                             <h3 className="text-2xl font-bold text-unistal-dark">Outras Marcas</h3>
                             <p className="mt-2 text-slate-600">Além destas, atendemos uma vasta gama de outros fabricantes. Consulte-nos para saber mais.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-4xl">Peças e Componentes Essenciais para Sua Produção</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                           Além da manutenção, oferecemos o fornecimento de peças e componentes cruciais para o funcionamento ideal de suas máquinas. Nossos itens são selecionados pela qualidade e compatibilidade.
                        </p>
                    </div>
                    <div className="mt-16 max-w-4xl mx-auto">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                           {COMPONENTS_LIST.map((part, index) => (
                               <li key={index} className="flex items-center">
                                   <svg className="w-6 h-6 text-unistal-yellow mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                   <span className="text-slate-700 font-medium text-lg">{part}</span>
                               </li>
                           ))}
                        </ul>
                    </div>
                     <div className="text-center mt-20">
                        <h3 className="text-3xl font-bold text-unistal-dark">Encontrou Sua Máquina ou Peça? Fale Conosco!</h3>
                        <p className="mt-3 text-slate-600 text-lg max-w-2xl mx-auto">Seja qual for o seu equipamento ou a peça que você precisa, a UNISTAL tem a solução e a expertise. Entre em contato para uma consulta ou solicite um orçamento.</p>
                        <Link to="/contato" className="mt-8 inline-block bg-unistal-yellow text-unistal-dark font-bold py-4 px-10 rounded-full hover:bg-unistal-yellow-darker transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                           Solicitar Orçamento
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsPage;
