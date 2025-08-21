import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, TESTIMONIALS } from '../constants';
import type { PortfolioItem, Testimonial } from '../types';

const TestimonialCard: React.FC<{testimonial: Testimonial}> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 h-full flex flex-col justify-between">
        <div className="text-5xl text-unistal-yellow/20 font-serif absolute top-4 left-6">“</div>
        <p className="text-slate-600 italic relative z-10">"{testimonial.text}"</p>
        <div className="mt-6 text-right">
            <p className="font-bold text-unistal-dark">{testimonial.author}</p>
            <p className="text-sm text-slate-500">{testimonial.company}</p>
        </div>
    </div>
);

const PortfolioCard: React.FC<{ item: PortfolioItem; onSelect: () => void; isSelected: boolean }> = ({ item, onSelect, isSelected }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500">
        <div className="relative">
            <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="p-6">
            <p className="text-sm font-semibold text-unistal-yellow uppercase tracking-wider">{item.category}</p>
            <h3 className="text-xl font-bold text-unistal-dark mt-2">{item.title}</h3>
            
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isSelected ? 'max-h-[500px] opacity-100 pt-6' : 'max-h-0 opacity-0'}`}>
                 <div className="space-y-4 prose prose-sm text-slate-600">
                    <div>
                        <h4 className="font-bold text-unistal-dark">Desafio:</h4>
                        <p>{item.challenge}</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-unistal-dark">Solução UNISTAL:</h4>
                        <p>{item.solution}</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-unistal-dark">Resultado:</h4>
                        <p>{item.result}</p>
                    </div>
                 </div>
            </div>

            <button onClick={onSelect} className="mt-6 font-semibold text-unistal-yellow hover:text-unistal-yellow-darker transition-colors duration-300">
                {isSelected ? 'Ver Menos' : 'Ver Detalhes'} {isSelected ? '▲' : '▼'}
            </button>
        </div>
    </div>
);

const PortfolioPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const handleSelect = (id: number) => {
        setSelectedItem(selectedItem === id ? null : id);
    };

    return (
        <>
            <div className="bg-unistal-dark text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tighter">
                        Nosso Portfólio: Qualidade e Expertise em Cada Projeto UNISTAL
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
                        Explore alguns dos nossos casos de sucesso e comprove a dedicação e o rigor técnico que aplicamos em cada intervenção para transformar desafios em soluções.
                    </p>
                </div>
            </div>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-4xl tracking-tight">Projetos de Destaque: Antes e Depois da Intervenção UNISTAL</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {PORTFOLIO_ITEMS.map((item) => (
                           <PortfolioCard 
                                key={item.id} 
                                item={item}
                                isSelected={selectedItem === item.id}
                                onSelect={() => handleSelect(item.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-5xl tracking-tight">O Que Nossos Clientes Dizem</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial, index) => (
                           <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                 </div>
            </section>
        </>
    );
};

export default PortfolioPage;
