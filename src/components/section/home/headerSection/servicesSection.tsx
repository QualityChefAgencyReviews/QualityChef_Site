function Services() {
    return (
      <section id="services" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Servizi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-2xl font-bold">Gestione Social Media</h3>
              <p className="text-lg">Gestiamo i tuoi account social media per aumentare la tua presenza online...</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Creazione di Contenuti</h3>
              <p className="text-lg">Creiamo contenuti accattivanti che risuonano con il tuo pubblico...</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Campagne Pubblicitarie</h3>
              <p className="text-lg">Progettiamo e gestiamo campagne pubblicitarie efficaci per raggiungere nuovi clienti...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;
  