import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHospital, FaHeartbeat, FaHeart, FaShieldAlt, FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt, FaPlane, FaWhatsapp, FaInstagram, FaAmbulance, FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Header Premium */}
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-container">
          <a href="#" className="logo">
            <img src="/logo.png" alt="JFMED Logo" className="header-logo" />
          </a>
          <nav className={`desktop-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#servicos" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Serviços</a></li>
              <li><a href="#aeromedico" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Aeromédico</a></li>
              <li><a href="#eventos" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Eventos</a></li>
              <li><a href="#treinamentos" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Treinamentos</a></li>
              <li><a href="#sobre" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Sobre Nós</a></li>
              <li><a href="#contato" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contato</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <a href="https://wa.me/5532998651414" target="_blank" rel="noreferrer" className="btn-primary header-btn">
              🚑 <span className="hide-mobile">Solicitar Ambulância</span>
            </a>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Cinematográfico */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 variants={fadeIn}>Atendimento Médico de Emergência 24 Horas</motion.h1>
          <motion.p variants={fadeIn}>
            Remoções UTI, UTI Neonatal, UTI Pediátrica, Cobertura de Eventos e Transporte Aeromédico em Todo o Brasil.
          </motion.p>
          <motion.div className="hero-buttons" variants={fadeIn}>
            <a href="https://wa.me/5532998651414" target="_blank" rel="noreferrer" className="btn-primary">
              🚑 Solicitar Atendimento
            </a>
            <a href="tel:+5532998651414" className="btn-secondary">
              📞 Falar com Especialista
            </a>
          </motion.div>
          <motion.div className="hero-indicators" variants={fadeIn}>
            <span className="indicator">✅ Atendimento Nacional</span>
            <span className="indicator">✅ Equipes Especializadas</span>
            <span className="indicator">✅ UTI Móvel Completa</span>
            <span className="indicator">✅ Atendimento 24 Horas</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2>Nossos Serviços Especializados</h2>
          <p style={{ opacity: 0.8, marginTop: '1rem' }}>Estrutura completa e equipe qualificada para salvar vidas.</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { icon: <FaAmbulance />, title: "UTI Móvel", desc: "Remoção de pacientes críticos." },
            { icon: <FaHeartbeat />, title: "UTI Pediátrica", desc: "Atendimento especializado infantil." },
            { icon: <FaHeart />, title: "UTI Neonatal", desc: "Transporte seguro para recém-nascidos." },
            { icon: <FaPlane />, title: "Transporte Aeromédico", desc: "Transferências rápidas em todo território nacional." },
            { icon: <FaCalendarAlt />, title: "Cobertura de Eventos", desc: "Eventos esportivos, corporativos e sociais." },
            { icon: <FaShieldAlt />, title: "Atendimento Pré-Hospitalar", desc: "Primeiros socorros e suporte avançado." }
          ].map((srv, idx) => {
            const message = encodeURIComponent(`Olá, gostaria de solicitar o serviço de ${srv.title}.`);
            return (
              <motion.div key={idx} className="service-card hover-3d" variants={fadeIn} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="service-icon">{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p style={{ marginBottom: '1.5rem', flexGrow: 1 }}>{srv.desc}</p>
                <a href={`https://wa.me/5532998651414?text=${message}`} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', width: '100%', justifyContent: 'center' }}>
                  <FaWhatsapp /> Solicitar Serviço
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Aeromédico */}
      <section id="aeromedico" className="aeromedico">
        <div className="aeromedico-overlay"></div>
        <div className="container aeromedico-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
          >
            <h2>Transporte Aeromédico de Alta Complexidade</h2>
            <p>
              A JFMED realiza remoções aeromédicas com equipe especializada, equipamentos avançados e logística completa para transferências nacionais.
            </p>
            <a href="https://wa.me/5532998651414" target="_blank" rel="noreferrer" className="btn-primary">
              Solicitar Transporte Aeromédico
            </a>
          </motion.div>
        </div>
      </section>

      {/* Eventos */}
      <section id="eventos" className="events">
        <div className="container">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Cobertura de Eventos
          </motion.h2>
          <motion.p 
            className="events-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Cobertura médica completa para eventos de qualquer porte.
          </motion.p>
          
          <div className="gallery">
            {Array.from({ length: 18 }, (_, i) => {
              const num = (i + 1).toString().padStart(2, '0');
              return (
                <div key={i} className="gallery-item">
                  <img src={`/imagens/${num}.jpeg`} alt={`Cobertura de Evento ${num}`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="container differentials">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          style={{ textAlign: 'center' }}
        >
          <h2>Por que escolher a JFMED?</h2>
          <div className="hex-grid">
            {[
              "Atendimento 24 horas", "Cobertura Nacional", "Equipe Especializada", "Frota Moderna",
              "Atendimento Humanizado", "Transporte Neonatal", "Transporte Pediátrico", "Aeromédico", "Suporte Avançado de Vida"
            ].map((diff, idx) => (
              <div key={idx} className="hex-item">
                <span className="hex-icon">✔</span> {diff}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Números */}
      <section className="numbers-section">
        <div className="container numbers-grid">
          <div className="number-item">
            <h3 className="numbers">+20</h3>
            <p>Anos de Experiência</p>
          </div>
          <div className="number-item">
            <h3 className="numbers">+5000</h3>
            <p>Atendimentos Realizados</p>
          </div>
          <div className="number-item">
            <h3 className="numbers">+1000</h3>
            <p>Remoções Bem Sucedidas</p>
          </div>
          <div className="number-item">
            <h3 className="numbers">+300</h3>
            <p>Eventos Atendidos</p>
          </div>
          <div className="number-item">
            <h3 className="numbers">24h</h3>
            <p>Disponibilidade</p>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="container about">
        <div className="about-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" alt="Equipe Médica" className="about-img" />
          </motion.div>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Excelência em Emergências Médicas</h2>
            <p>
              A JFMED Ambulância atua com excelência em serviços de remoção terrestre e aeromédica, oferecendo atendimento especializado, cobertura de eventos e treinamentos na área da saúde. Nossa missão é garantir segurança, rapidez e atendimento humanizado em cada operação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treinamentos */}
      <section id="treinamentos" className="container">
        <motion.div style={{ textAlign: 'center' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <h2>Treinamentos Especializados</h2>
          <p style={{ opacity: 0.8, marginTop: '1rem' }}>Capacitação para profissionais e empresas</p>
        </motion.div>
        <div className="trainings-grid">
          {["Primeiros Socorros", "APH", "Suporte Básico de Vida", "Atendimento em Eventos", "Capacitação para Empresas", "Capacitação para Escolas"].map((tr, idx) => {
            const message = encodeURIComponent(`Olá, gostaria de saber mais sobre o treinamento de ${tr}.`);
            return (
              <div key={idx} className="training-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
                <h4>{tr}</h4>
                <a href={`https://wa.me/5532998651414?text=${message}`} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', width: '100%', justifyContent: 'center', background: 'transparent', color: 'var(--color-primary)', border: '1px solid var(--color-primary)', boxShadow: 'none' }}>
                  <FaWhatsapp /> Saber Mais
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Impacto */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <h2>Precisa de Atendimento Médico Especializado?</h2>
            <p>Nossa equipe está pronta para atender você 24 horas por dia.</p>
            <a href="https://wa.me/5532998651414" target="_blank" rel="noreferrer" className="btn-primary btn-giant">
              <FaWhatsapp style={{ fontSize: '2rem' }}/> Chamar no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Fale Conosco</h2>
            <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Estamos à disposição para atender suas necessidades.</p>
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <div className="info-text">
                <h4>Telefone</h4>
                <p>(032) 9 3937-7000</p>
                <p>(32) 9 9865-1414</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div className="info-text">
                <h4>Endereço</h4>
                <p>Rua Costa Carvalho, 34<br/>Costa Carvalho<br/>Juiz de Fora - MG</p>
              </div>
            </div>
            <div className="info-item">
              <FaInstagram className="info-icon" />
              <div className="info-text">
                <h4>Instagram</h4>
                <p>@jfmed4</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Nome completo" required />
              </div>
              <div className="form-group">
                <input type="tel" className="form-control" placeholder="Telefone / WhatsApp" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Cidade" required />
              </div>
              <div className="form-group">
                <select className="form-control" required>
                  <option value="">Selecione o tipo de serviço</option>
                  <option value="uti_movel">UTI Móvel</option>
                  <option value="aeromedico">Aeromédico</option>
                  <option value="eventos">Cobertura de Eventos</option>
                  <option value="treinamento">Treinamentos</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Sua mensagem..." required></textarea>
              </div>
              <button type="submit" className="btn-primary btn-submit">Solicitar Atendimento</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="logo" style={{ marginBottom: '1rem' }}>
                <img src="/logo.png" alt="JFMED Logo" className="footer-logo" />
              </div>
              <p>
                A JFMED Ambulância atua com excelência em serviços de remoção terrestre e aeromédica.
              </p>
            </div>
            <div className="footer-links">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#">UTI Móvel</a></li>
                <li><a href="#">Aeromédico</a></li>
                <li><a href="#">Cobertura de Eventos</a></li>
                <li><a href="#">Treinamentos</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contato</h4>
              <ul>
                <li><a href="https://wa.me/5532939377000">(032) 9 3937-7000</a></li>
                <li><a href="https://wa.me/5532998651414">(32) 9 9865-1414</a></li>
                <li><a href="https://instagram.com/jfmed4">@jfmed4</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 JFMED Ambulância. Todos os direitos reservados.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Produzida com 💚 por <a href="https://camaly.com.br/" target="_blank" rel="noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 'bold' }}>CAMALY</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
