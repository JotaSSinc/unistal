
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_LIST, MAIN_SERVICES } from '../constants';

const MainServiceCard: React.FC<{title: string; description: string; ctaLink: string;}> = ({ title, description, ctaLink }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
        <div className="flex-grow">
             <h3 className="text-2xl font-bold text-unistal-dark">{title}</h3>
             <p className="mt-4 text-slate-600">{description}</p>
        </div>
        <Link to={ctaLink} className="text-unistal-yellow font-semibold mt-6 inline-block hover:text-unistal-yellow-darker group-hover:translate-x-1 transition-transform duration-300">
            Ver Detalhes &rarr;
        </Link>
    </div>
);


const ServicesPage: React.FC = () => {
    
    return (
        <>
            <div className="bg-unistal-dark text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tighter">
                       Serviços UNISTAL: Soluções Completas para Suas Máquinas Gráficas
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
                        Com mais de 30 anos de expertise, a UNISTAL é especializada em manter a alta performance e a longevidade dos seus equipamentos. Do diagnóstico à execução, oferecemos serviços precisos e confiáveis para toda a sua linha de produção gráfica.
                    </p>
                </div>
            </div>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-4xl tracking-tight">Nossos Principais Serviços em Detalhe</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MAIN_SERVICES.map(service => 
                            <MainServiceCard 
                                key={service.title} 
                                title={service.title} 
                                description={service.description}
                                ctaLink={service.path} 
                            />
                        )}
                    </div>
                </div>
            </section>

             <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-4xl">Outros Serviços Especializados UNISTAL</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                           Além de nossos serviços principais, a UNISTAL oferece uma gama completa de soluções para a otimização de sua produção:
                        </p>
                    </div>
                    <div className="mt-16 max-w-4xl mx-auto">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                           {SERVICES_LIST.map((service, index) => (
                               <li key={index} className="flex items-center">
                                   <svg className="w-6 h-6 text-unistal-yellow mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
                                   <span className="text-slate-700 font-medium">{service.title}</span>
                               </li>
                           ))}
                        </ul>
                    </div>
                </div>
            </section>

             <section className="bg-gradient-to-r from-unistal-dark to-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Pronto para Garantir a Eficiência da Sua Produção?</h2>
                    <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">Entre em contato com nossos especialistas para discutir suas necessidades e solicitar um orçamento personalizado. A UNISTAL tem a solução ideal para você.</p>
                    <div className="mt-10">
                         <Link to="/contato" className="bg-unistal-yellow text-unistal-dark font-bold py-4 px-10 rounded-full hover:bg-unistal-yellow-darker transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Solicite Seu Orçamento
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
