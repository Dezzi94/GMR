import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import JobPosition from './pages/JobPosition';
import ProjectPage from './pages/ProjectPage';
import Projects from './pages/Projects';
import ComponentRebuild from './pages/services/ComponentRebuild';
import MachineAssembly from './pages/services/MachineAssembly';
import ContractProjectManagement from './pages/services/ContractProjectManagement';
import ContractSupervision from './pages/services/ContractSupervision';
import Mobilisation from './pages/services/Mobilisation';
import Shutdown from './pages/services/Shutdown';
import LongTermLabour from './pages/services/LongTermLabour';
import ShortTermLabour from './pages/services/ShortTermLabour';
import MechanicalRepairs from './pages/services/MechanicalRepairs';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTopOnMount />
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:id" element={<JobPosition />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
              
              {/* Service Pages */}
              <Route path="/services/component-rebuild" element={<ComponentRebuild />} />
              <Route path="/services/machine-assembly" element={<MachineAssembly />} />
              <Route path="/services/contract-project-management" element={<ContractProjectManagement />} />
              <Route path="/services/contract-supervision" element={<ContractSupervision />} />
              <Route path="/services/mobilisation" element={<Mobilisation />} />
              <Route path="/services/shutdown" element={<Shutdown />} />
              <Route path="/services/long-term-labour" element={<LongTermLabour />} />
              <Route path="/services/short-term-labour" element={<ShortTermLabour />} />
              <Route path="/services/mechanical-repairs" element={<MechanicalRepairs />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 