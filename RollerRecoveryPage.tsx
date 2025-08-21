
import React from 'react';
import { Link } from 'react-router-dom';

const BenefitItem: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="font-bold text-lg text-unistal-dark">{title}</h3>
        <p className="mt-2 text-slate-600">{children}</p>
    </div>
);

const RollerRecoveryPage: React.FC = () => {
    const brands = ["MBO", "Stahl", "GUK", "Ulderigo Rossi", "Heidelberg", "Horizon"];

    return (
        <>
            <div className="bg-unistal-dark text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tighter">
                        Recuperação de Rolarias de Dobradeiras
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
                        Precisão Que Eleva Sua Qualidade Final
                    </p>
                </div>
            </div>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto prose prose-lg text-slate-700">
                        <p>
                            No competitivo mercado gráfico, a qualidade da dobragem é um diferencial que impacta diretamente a apresentação final do seu produto. As rolarias de dobradeiras, peças essenciais nesse processo, sofrem desgaste contínuo, comprometendo a precisão, causando marcas indesejadas e até paradas na produção.
                        </p>
                        <p>
                            Na UNISTAL, somos especialistas na recuperação e revitalização de rolarias, garantindo que suas máquinas operem com a precisão e eficiência que o seu trabalho exige. Nossos 30+ anos de experiência nos permitem restaurar seus rolos com tecnologia e cuidado, prolongando sua vida útil e otimizando seus resultados.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-4xl">Benefícios da Recuperação Profissional</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                            Investir na recuperação das suas rolarias com a UNISTAL é uma estratégia para otimizar sua operação e reduzir custos.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <BenefitItem title="Qualidade Impecável">Elimina marcas e imperfeições, assegurando dobras precisas e um acabamento superior.</BenefitItem>
                        <BenefitItem title="Economia Significativa">A recuperação é drasticamente mais econômica do que a aquisição de rolos novos.</BenefitItem>
                        <BenefitItem title="Sustentabilidade">Prolonga a vida útil de componentes, contribuindo para a redução de resíduos.</BenefitItem>
                        <BenefitItem title="Redução de Paradas">Rolos em perfeito estado minimizam falhas, reduzindo o tempo de inatividade da máquina.</BenefitItem>
                        <BenefitItem title="Aumento da Produtividade">Com rolos eficientes, a máquina opera em sua capacidade máxima, otimizando o fluxo de trabalho.</BenefitItem>
                    </div>
                </div>
            </section>
            
            <section className="py-24 bg-white">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-4xl">O Processo UNISTAL: Precisão em Cada Etapa</h2>
                    </div>
                     <div className="max-w-4xl mx-auto">
                         <ol className="space-y-6">
                            {['Avaliação Detalhada', 'Limpeza Profunda', 'Retífica e Usinagem', 'Balanceamento Dinâmico', 'Revestimento (se aplicável)', 'Testes de Qualidade'].map((step, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-unistal-yellow text-unistal-dark font-bold rounded-full flex items-center justify-center mr-6">{index + 1}</div>
                                    <p className="text-lg text-slate-700 font-medium pt-1.5">{step}</p>
                                </li>
                            ))}
                         </ol>
                     </div>
                </div>
            </section>
            
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-unistal-dark sm:text-4xl">Atendemos Rolarias de Todas as Principais Marcas</h2>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
                        {brands.map(brand => (
                            <div key={brand} className="bg-white py-3 px-6 rounded-full shadow-md text-lg font-semibold text-unistal-dark">
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-unistal-dark to-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Garanta a Qualidade das Suas Dobras.</h2>
                    <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">Não deixe que rolarias desgastadas comprometam a performance da sua produção. Entre em contato com a UNISTAL e descubra como podemos restaurar a precisão.</p>
                    <div className="mt-10">
                         <Link to="/contato" className="bg-unistal-yellow text-unistal-dark font-bold py-4 px-10 rounded-full hover:bg-unistal-yellow-darker transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Solicitar Orçamento para Recuperação
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RollerRecoveryPage;
