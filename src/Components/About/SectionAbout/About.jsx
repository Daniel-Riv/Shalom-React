import './SectionAbout.css';

export const About = () => {
  return (
        <section className="about-section">
            <div className="aut-container">
                <div className="row">
                    <div className="about-column col-md-6 col-sm-12 col-xs-12">
                        <div className="sec-title">
                            <h2>¿Quienes Somos?</h2>
                            <div className="separater" />
                        </div>
                        <div className="text">
                            <p style={{ textAlign: 'justify' }}>En Shalom Muebles estamos comprometidos con la satisfaccion de nuestros clientes, brindandoles acompañamiento en el desarrollo de sus ideas y proyectos llenando las necesidades de cada hogar. 
De la mano de talento humano con diseños de tendecia y confort con materiales de excelente calidad siempre comprometidos con el medio ambiente y productos a precios competitivos.</p>
                        </div>
                        <button href="/" className="theme-btn btn-style-one">Contactanos</button>
                    </div>
                    <div className="chart-column col-md-6 col-sm-12 col-xs-12">
                        <div className="inner-box">
                            <div className="image">
                                <img src="/About/Inicio.jpeg" className="imgAi" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};
