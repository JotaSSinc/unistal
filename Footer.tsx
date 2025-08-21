
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

const Logo: React.FC = () => (
    <Link to="/" className="flex items-center space-x-2 group">
        <div className="font-black text-3xl tracking-tighter text-white group-hover:text-unistal-yellow transition-colors duration-300">
            UNISTAL
        </div>
        <div className="flex flex-col justify-center items-start -ml-1">
             <div className="h-0.5 w-16 bg-unistal-yellow"></div>
             <div className="h-0.5 w-16 bg-unistal-yellow my-0.5"></div>
             <div className="h-0.5 w-16 bg-unistal-yellow"></div>
        </div>
    </Link>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <Logo />
            <p className="text-slate-400 text-sm">
              Mais de 30 anos de experiência e excelência em serviços e equipamentos para máquinas gráficas.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-unistal-yellow tracking-wider uppercase">Navegação</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-300 hover:text-unistal-yellow transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-unistal-yellow tracking-wider uppercase">Contato</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 text-unistal-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>{CONTACT_INFO.address}, {CONTACT_INFO.cep}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-unistal-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>{CONTACT_INFO.phone1}</span>
              </li>
               <li className="flex items-center ml-8">
                 <span>{CONTACT_INFO.phone2}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-unistal-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href={`mailto:${CONTACT_INFO.commercialEmail}`} className="hover:text-unistal-yellow">{CONTACT_INFO.commercialEmail}</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-unistal-yellow tracking-wider uppercase">Siga-nos</h3>
            <div className="flex mt-4 space-x-4">
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-unistal-yellow bg-slate-700 hover:bg-slate-600 p-3 rounded-full transition-all duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427C2.013 14.784 2 14.43 2 12s.013-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.48 3.61c.636-.247 1.363-.316 2.427-.364C8.937 2.013 9.29 2 11.725 2h.59zM12 4.877a7.123 7.123 0 100 14.246 7.123 7.123 0 000-14.246zm0 12.247a5.123 5.123 0 110-10.246 5.123 5.123 0 010 10.246zm6.363-11.886a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Unistal Serviços e Equipamentos de Máquinas Gráficas. Todos os direitos reservados.</p>
           <p className="mt-1">CNPJ: {CONTACT_INFO.cnpj}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;