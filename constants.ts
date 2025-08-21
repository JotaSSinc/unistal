
import type { Service, Testimonial, PortfolioItem, Machine } from './types';

export const CONTACT_INFO = {
  phone1: '(11) 2367-5444',
  phone2: '(11) 2367-5455',
  whatsapp: '551123675444', // Format for WhatsApp link
  commercialEmail: 'comercial@unistalbr.com',
  adminEmail: 'lais@unistalbr.com',
  address: 'Rua Mathilde Carlos Montesanti, 136 – Jardim Cidade Pirituba, São Paulo/SP',
  cep: '02945-060',
  cnpj: '47.500.856/0001-90',
  ie: '136.634.998.113',
  instagram: 'https://www.instagram.com/uni.stal',
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.130985586616!2d-46.73299718444983!3d-23.49129996362879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefa37a85a4a55%3A0x6b40552b75f56024!2sR.%20Mathilde%20Carlos%20Montesanti%2C%20136%20-%20Jardim%20Cidade%20Pirituba%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002945-060%2C%20Brazil!5e0!3m2!1sen!2sus!4v1689264100123!5m2!1sen!2sus"
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Produtos', path: '/produtos' },
  { name: 'Portfólio', path: '/portfolio' },
  { name: 'Contato', path: '/contato' },
];

export const MAIN_SERVICES = [
    { 
        title: "Recuperação e Alinhamento de Rolarias", 
        description: "Serviço vital para a qualidade de dobras. Restauramos e calibramos rolos de dobradeiras com precisão milimétrica, garantindo o funcionamento perfeito e prolongando a vida útil do seu equipamento.", 
        path: "/servicos/recuperacao-rolarias" 
    },
    { 
        title: "Manutenção Preventiva e Corretiva Completa", 
        description: "Desde ajustes finos a reparos complexos, nossa equipe garante que suas impressoras e dobradeiras operem sem interrupções. Atendemos diversas marcas e modelos.", 
        path: "/servicos/manutencao-maquinas-graficas" 
    },
    { 
        title: "Suporte Técnico para Equipamentos Antigos", 
        description: "Não importa a idade do seu equipamento, temos a expertise para diagnosticar, reparar e manter máquinas sem garantia ou peças descontinuadas. Sua produção não pode parar.", 
        path: "/servicos/suporte-equipamentos-antigos" 
    }
];

export const SERVICES_LIST: Service[] = [
    { title: "Recuperação de rolarias de dobradeiras", description: "Restauramos rolarias com precisão, garantindo a performance e a vida útil do seu equipamento de dobragem." },
    { title: "Núcleo de cabeçote de fação", description: "Serviços especializados em núcleos de cabeçote para garantir cortes precisos e consistentes." },
    { title: "Pinças de serrilhas", description: "Manutenção e fornecimento de pinças de serrilhas para um acabamento gráfico impecável." },
    { title: "Facas circulares", description: "Afiação, reparo e substituição de facas circulares para máxima eficiência de corte." },
    { title: "Rolete de transporte", description: "Recuperação de roletes de transporte para um fluxo de trabalho suave e sem interrupções." },
    { title: "Tira aparas", description: "Soluções para sistemas de tira aparas, otimizando a limpeza e a operação da sua máquina." },
    { title: "Contra facas", description: "Ajuste e fornecimento de contra facas, essenciais para a qualidade do corte e vinco." },
    { title: "Anel com caneleta P/ vinco", description: "Precisão em anéis com caneleta para vincos perfeitos e acabamento profissional." },
    { title: "Distanciadores", description: "Fornecimento de distanciadores de alta qualidade para a correta configuração do seu equipamento." },
    { title: "Suporte de serrilhas", description: "Desenvolvimento e manutenção de suportes de serrilhas para diversas aplicações gráficas." },
    { title: "Eixo segmentado", description: "Reparo e alinhamento de eixos segmentados, cruciais para a estabilidade da máquina." },
    { title: "Serrilhas", description: "Ampla gama de serrilhas para diferentes necessidades de acabamento e picote." },
    { title: "Manutenção de Máquinas Gráficas", description: "Planos de manutenção preventiva e corretiva para manter sua produção sempre ativa." },
    { title: "Prestação de serviços", description: "Consultoria e serviços técnicos especializados para otimizar seus processos gráficos." }
];


export const MACHINES_LIST: Machine[] = [
    { name: "Guk", description: "Especialistas em dobradeiras GUK, garantindo precisão e eficiência para sua produção." },
    { name: "Stahl", description: "Serviços completos para dobradeiras Stahl, desde modelos clássicos aos mais recentes." },
    { name: "MBO", description: "Suporte técnico e peças para as robustas dobradeiras MBO, otimizando seu desempenho." },
    { name: "Ulderigo Rossi", description: "Manutenção e soluções para equipamentos Ulderigo Rossi, com a confiabilidade que você precisa." },
    { name: "Heidelberg", description: "Ampla experiência em diversos modelos de impressoras e dobradeiras Heidelberg." },
];

export const COMPONENTS_LIST: string[] = [
    "Anel com caneleta P/ vinco",
    "Distanciadores",
    "Eixo segmentado",
    "Serrilhas",
    "Tira aparas",
    "Núcleo de cabeçote de fação",
    "Contra facas",
    "Pinças de serrilhas",
    "Facas circulares",
    "Rolete de transporte",
    "Suporte de serrilhas",
    "E muito mais..."
];

export const TESTIMONIALS: Testimonial[] = [
    {
        text: "A equipe UNISTAL resgatou nossa antiga dobradeira. O que parecia impossível, eles resolveram com maestria. Produção a todo vapor novamente!",
        author: "João Silva",
        company: "Gerente de Produção, Gráfica Alfa"
    },
    {
        text: "Qualidade no serviço de rolarias impecável! Nossas dobras nunca estiveram tão perfeitas. Recomendo de olhos fechados.",
        author: "Maria Santos",
        company: "Proprietária, Editora Beta"
    },
    {
        text: "Encontramos na Unistal um parceiro de confiança para a manutenção preventiva de nossas máquinas. O atendimento é sempre atencioso e técnico.",
        author: "Carlos Souza",
        company: "Embalagens Futura"
    }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    { 
        id: 1, 
        imageUrl: 'https://picsum.photos/500/350?random=10', 
        title: 'Recuperação Completa de Rolaría de Dobradeira MBO', 
        category: 'Recuperação de Rolarias',
        challenge: "A rolaria apresentava desgaste severo, comprometendo a precisão da dobragem e causando perdas na produção de uma gráfica de médio porte.",
        solution: "Realizamos a retífica de precisão, balanceamento dinâmico e tratamento de superfície, devolvendo as características originais à peça.",
        result: "Restabelecimento da qualidade de dobragem, eliminação de refugo e aumento da velocidade operacional em 15%."
    },
    { 
        id: 2, 
        imageUrl: 'https://picsum.photos/500/350?random=11', 
        title: 'Revitalização de Impressora Offset Heidelberg GTO', 
        category: 'Manutenção Corretiva',
        challenge: "A impressora apresentava falhas de impressão, barulhos excessivos e desgaste em componentes críticos, levando a paradas constantes.",
        solution: "Executamos uma manutenção corretiva completa, com a troca de peças específicas, limpeza profunda e calibração total do equipamento.",
        result: "Melhora significativa na qualidade de impressão, redução de 90% das paradas não programadas e extensão da vida útil da máquina."
    },
    { 
        id: 3, 
        imageUrl: 'https://picsum.photos/500/350?random=12', 
        title: 'Suporte a Máquina GUK Antiga', 
        category: 'Suporte a Equipamentos Antigos',
        challenge: "Cliente possuía uma dobradeira GUK clássica, sem suporte do fabricante e com dificuldade de encontrar peças de reposição.",
        solution: "Nossa equipe diagnosticou o problema e, utilizando nosso know-how, adaptou soluções com peças customizadas e recuperadas em nossa oficina.",
        result: "A máquina voltou a operar com total funcionalidade, permitindo que o cliente continuasse a utilizar seu valioso equipamento sem a necessidade de um alto investimento em um novo."
    },
];
