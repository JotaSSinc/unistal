
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API endpoint.
    // For this static example, we'll just simulate a success message.
    setFormStatus('Obrigado! Sua mensagem foi enviada com sucesso.');
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <>
      <div className="bg-unistal-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase">
            <span className="text-unistal-yellow">Entre em</span> Contato
            </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
            Estamos prontos para atender sua demanda. Envie-nos uma mensagem ou entre em contato pelos nossos canais.
          </p>
        </div>
      </div>

      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-unistal-dark mb-6">Solicite um Orçamento</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-100 border-transparent rounded-lg focus:ring-2 focus:ring-unistal-yellow focus:border-transparent" />
                  <input type="email" name="email" placeholder="Seu E-mail" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-100 border-transparent rounded-lg focus:ring-2 focus:ring-unistal-yellow focus:border-transparent" />
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="tel" name="phone" placeholder="Seu Telefone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-100 border-transparent rounded-lg focus:ring-2 focus:ring-unistal-yellow focus:border-transparent" />
                  <input type="text" name="company" placeholder="Sua Empresa" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-slate-100 border-transparent rounded-lg focus:ring-2 focus:ring-unistal-yellow focus:border-transparent" />
                </div>
                <input type="text" name="subject" placeholder="Assunto" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-100 border-transparent rounded-lg focus:ring-2 focus:ring-unistal-yellow focus:border-transparent" />
                <textarea name="message" placeholder="Sua Mensagem" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-100 border-transparent rounded-lg focus:ring-2 focus:ring-unistal-yellow focus:border-transparent"></textarea>
                <button type="submit" className="w-full bg-unistal-yellow text-unistal-dark font-bold py-4 px-6 rounded-full hover:bg-unistal-yellow-darker transition-colors duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Enviar Mensagem
                </button>
                {formStatus && <p className="text-center text-green-600 mt-4">{formStatus}</p>}
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                 <h3 className="text-2xl font-bold text-unistal-dark mb-6">Nossas Informações</h3>
                 <div className="space-y-5 text-slate-600">
                    <p className="flex items-start"><strong className="w-28 font-semibold text-unistal-dark flex-shrink-0">Telefones:</strong> <span>{CONTACT_INFO.phone1}<br/>{CONTACT_INFO.phone2}</span></p>
                    <p className="flex items-start"><strong className="w-28 font-semibold text-unistal-dark flex-shrink-0">Comercial:</strong> <a href={`mailto:${CONTACT_INFO.commercialEmail}`} className="hover:text-unistal-yellow break-all">{CONTACT_INFO.commercialEmail}</a></p>
                    <p className="flex items-start"><strong className="w-28 font-semibold text-unistal-dark flex-shrink-0">Admin:</strong> <a href={`mailto:${CONTACT_INFO.adminEmail}`} className="hover:text-unistal-yellow break-all">{CONTACT_INFO.adminEmail}</a></p>
                    <p className="flex items-start"><strong className="w-28 font-semibold text-unistal-dark flex-shrink-0">Endereço:</strong> <span>{CONTACT_INFO.address}, {CONTACT_INFO.cep}</span></p>
                 </div>
              </div>
               <div className="rounded-xl shadow-lg overflow-hidden h-80">
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
        </div>
      </div>
    </>
  );
};

export default ContactPage;