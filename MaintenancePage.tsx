
import React from 'react';
import { Link } from 'react-router-dom';

const MaintenanceTypeCard: React.FC<{ title: string, children: React.ReactNode, icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center space-x-4 mb-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-unistal-yellow/10 text-unistal-yellow flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-unistal-dark">{title}</h3>
        </div>
        <p className="text-slate-600">{children}</p>
    </div>
);


const MaintenancePage: React.FC = () => {
    return (
        <>
            <div className="bg-unistal-dark text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tighter">
                        Manutenção Especializada para Máquinas Gráficas
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
                        Garanta a Continuidade e a Eficiência da Sua Produção
                    </p>
                </div>
            </div>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto prose prose-lg text-slate-700">
                        <p>
                           No ritmo acelerado da indústria gráfica, a interrupção da produção devido a falhas em equipamentos representa custos elevados e perda de prazos. Máquinas gráficas são ativos de alto valor que exigem cuidado e expertise para manter seu desempenho ideal.
                        </p>
                        <p>
                           Na UNISTAL, entendemos que a manutenção eficaz não é um gasto, mas um <strong>investimento crucial</strong>. Nossos mais de 30 anos de experiência nos capacitam a oferecer serviços de manutenção que minimizam riscos, otimizam o tempo de atividade e prolongam a vida útil de seus equipamentos.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-4xl">Nossos Modelos de Manutenção</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                       <MaintenanceTypeCard title="Manutenção Preventiva" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
                            Agendamos inspeções periódicas, ajustes e substituição de peças com desgaste previsto. Essencial para identificar e corrigir pequenos problemas antes que se tornem grandes falhas, evitando paradas inesperadas.
                       </MaintenanceTypeCard>
                       <MaintenanceTypeCard title="Manutenção Corretiva" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}>
                            Quando a falha ocorre, nossa equipe age rapidamente, diagnosticando o problema e realizando os reparos necessários para restabelecer a operação da sua máquina no menor tempo possível.
                       </MaintenanceTypeCard>
                    </div>
                </div>
            </section>

             <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-4xl">Manutenção para Diversos Equipamentos e Marcas</h2>
                         <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                           Nossa expertise técnica abrange uma vasta gama de máquinas e componentes da indústria gráfica.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-6 rounded-lg">
                            <h3 className="font-bold text-xl text-unistal-dark">Impressoras</h3>
                            <p className="text-slate-600 mt-2">Offset, Digitais, Flexográficas, etc.</p>
                        </div>
                         <div className="bg-slate-50 p-6 rounded-lg">
                            <h3 className="font-bold text-xl text-unistal-dark">Dobradeiras</h3>
                            <p className="text-slate-600 mt-2">MBO, Stahl, GUK, Ulderigo Rossi, Heidelberg, Horizon, etc.</p>
                        </div>
                         <div className="bg-slate-50 p-6 rounded-lg">
                            <h3 className="font-bold text-xl text-unistal-dark">Componentes Específicos</h3>
                            <p className="text-slate-600 mt-2">Rolarias, facas, pinças, roletes, eixos, serrilhas e muito mais.</p>
                        </div>
                    </div>
                </div>
            </section>

             <section className="bg-gradient-to-r from-unistal-dark to-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Mantenha Suas Máquinas em Perfeito Funcionamento.</h2>
                    <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">Não espere a falha acontecer. Invista na manutenção profissional para garantir a eficiência e a longevidade dos seus equipamentos gráficos.</p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                         <Link to="/contato" className="bg-unistal-yellow text-unistal-dark font-bold py-4 px-10 rounded-full hover:bg-unistal-yellow-darker transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Agendar Manutenção
                        </Link>
                         <Link to="/contato" className="bg-transparent border-2 border-unistal-yellow text-unistal-yellow font-bold py-4 px-10 rounded-full hover:bg-unistal-yellow hover:text-unistal-dark transition-all duration-300 text-lg">
                            Solicitar Orçamento
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MaintenancePage;
