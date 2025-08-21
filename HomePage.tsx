
import React from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, CONTACT_INFO, MAIN_SERVICES } from '../constants';
import type { Testimonial } from '../types';

const Hero: React.FC = () => (
    <div className="relative bg-unistal-dark text-white overflow-hidden">
        <div className="absolute inset-0">
            <img src="https://picsum.photos/1600/800?grayscale&blur=2&random=1" alt="Equipamentos e máquinas gráficas de alta performance com serviços UNISTAL" className="w-full h-full object-cover opacity-10"/>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-40 text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
                    EXCELÊNCIA EM MÁQUINAS GRÁFICAS
                </span>
                <span className="block text-white mt-2">30 Anos de Inovação e Confiança</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-300">
                Há mais de três décadas, a UNISTAL é a sua parceira estratégica em manutenção, recuperação e fornecimento de equipamentos para a indústria gráfica. Sua produção impecável começa aqui.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contato" className="bg-unistal-yellow text-unistal-dark font-bold py-4 px-10 rounded-full hover:bg-unistal-yellow-darker transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Solicite um Orçamento
                </Link>
                <Link to="/servicos" className="bg-transparent border-2 border-unistal-yellow text-unistal-yellow font-bold py-4 px-10 rounded-full hover:bg-unistal-yellow hover:text-unistal-dark transition-all duration-300 text-lg">
                    Conheça Nossos Serviços
                </Link>
            </div>
        </div>
    </div>
);

const ServiceHighlightCard: React.FC<{icon: React.ReactNode, title: string, description: string, ctaText: string, ctaLink: string}> = ({ icon, title, description, ctaText, ctaLink }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
        <div className="bg-unistal-yellow text-unistal-dark w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-unistal-yellow-darker transition-colors duration-300">{icon}</div>
        <h3 className="font-bold text-xl text-unistal-dark">{title}</h3>
        <p className="mt-2 text-slate-600 min-h-[100px]">{description}</p>
        <Link to={ctaLink} className="text-unistal-yellow font-semibold mt-6 inline-block hover:text-unistal-yellow-darker group-hover:translate-x-1 transition-transform duration-300">
            {ctaText} &rarr;
        </Link>
    </div>
);

const DifferentiatorItem: React.FC<{ icon: React.ReactNode, title: string }> = ({ icon, title }) => (
    <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 bg-unistal-yellow/10 text-unistal-yellow w-12 h-12 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <p className="text-lg text-slate-700 font-semibold">{title}</p>
    </div>
);

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

const HomePage: React.FC = () => {
    return (
        <div className="bg-white">
            <Hero />

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-5xl tracking-tight">Serviços Essenciais para a Performance da Sua Gráfica</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                            Com expertise especializada, garantimos a longevidade e a eficiência de seus equipamentos, de ponta a ponta.
                        </p>
                    </div>
                    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <ServiceHighlightCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                            title="Recuperação de Rolarias: Precisão e Durabilidade"
                            description="Restauramos rolos de dobradeiras, garantindo o alinhamento perfeito e a vida útil prolongada de seus equipamentos."
                            ctaText="Saiba Mais"
                            ctaLink={MAIN_SERVICES[0].path}
                        />
                         <ServiceHighlightCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.86 8.86l-2.02 2.02M18.18 13.12l-2.02 2.02M7.86 15.14l-2.02-2.02M18.18 10.88l-2.02-2.02" /></svg>}
                            title="Manutenção Especializada para Máquinas Gráficas"
                            description="Realizamos manutenção preventiva e corretiva, incluindo modelos antigos. Sua operação não para."
                            ctaText="Saiba Mais"
                            ctaLink={MAIN_SERVICES[1].path}
                        />
                         <ServiceHighlightCard
                           icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>}
                            title="Peças Genuínas e Suporte para Marcas Líderes"
                            description="Fornecemos e instalamos peças para Guk, Stahl, Mbo, Ulderigo Rossi, Heidelberg e outros."
                            ctaText="Ver Produtos"
                            ctaLink="/produtos"
                        />
                    </div>
                </div>
            </section>
            
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-5xl tracking-tight">UNISTAL: Sua Escolha para Confiança e Expertise</h2>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
                        <DifferentiatorItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} title="Mais de 30 Anos de Tradição e Inovação." />
                        <DifferentiatorItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} title="Equipe Técnica Altamente Qualificada." />
                        <DifferentiatorItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} title="Soluções Sob Medida para Sua Necessidade." />
                        <DifferentiatorItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.94l-2.5 5M14 10L9 15m0 0l-2-2m2 2v-2a2 2 0 012-2h.085a2 2 0 011.736.94l2.5 5" /></svg>} title="Compromisso com a Qualidade e Durabilidade." />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-5xl tracking-tight">O que nossos clientes dizem</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial, index) => (
                           <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                 </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-5xl tracking-tight">Onde Estamos</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                            Visite-nos ou entre em contato. Estamos localizados em Pirituba, São Paulo.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-unistal-dark">Unistal Serviços e Equipamentos</h3>
                            <div className="space-y-4">
                                <p className="flex items-start text-slate-700 text-lg">
                                    <svg className="w-6 h-6 mr-4 mt-1 text-unistal-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <span>{CONTACT_INFO.address}<br/>{CONTACT_INFO.cep}</span>
                                </p>
                                 <p className="flex items-center text-slate-700 text-lg">
                                    <svg className="w-6 h-6 mr-4 text-unistal-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span>{CONTACT_INFO.phone1} / {CONTACT_INFO.phone2}</span>
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl shadow-2xl overflow-hidden h-96 lg:h-[450px]">
                             <iframe
                                src={CONTACT_INFO.googleMapsEmbed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização da Unistal"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-unistal-dark to-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Pronto para Otimizar Sua Produção Gráfica?</h2>
                    <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">Entre em contato hoje mesmo e descubra como a UNISTAL pode elevar o desempenho dos seus equipamentos com serviços e peças de excelência.</p>
                    <div className="mt-10">
                         <Link to="/contato" className="bg-unistal-yellow text-unistal-dark font-bold py-4 px-10 rounded-full hover:bg-unistal-yellow-darker transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Solicite um Orçamento Agora
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
