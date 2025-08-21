
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActionButtons from './components/FloatingActionButtons';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import RollerRecoveryPage from './pages/services/RollerRecoveryPage';
import MaintenancePage from './pages/services/MaintenancePage';
import LegacySupportPage from './pages/services/LegacySupportPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-white text-slate-700">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/servicos/recuperacao-rolarias" element={<RollerRecoveryPage />} />
            <Route path="/servicos/manutencao-maquinas-graficas" element={<MaintenancePage />} />
            <Route path="/servicos/suporte-equipamentos-antigos" element={<LegacySupportPage />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActionButtons />
      </div>
    </HashRouter>
  );
};

export default App;
