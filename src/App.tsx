import { Instagram, Video, Palette, Globe } from 'lucide-react';

function App() {
  const services = [
    {
      icon: Instagram,
      title: 'Criação de Posts Criativos',
      description: 'Desenvolvemos posts impactantes e visualmente atraentes para Instagram, alinhados com a identidade da sua marca e engajamento do público.'
    },
    {
      icon: Video,
      title: 'Criação de Reels',
      description: 'Produzimos reels dinâmicos e envolventes que capturam a atenção, aumentam o alcance e fortalecem a presença digital da sua marca.'
    },
    {
      icon: Palette,
      title: 'Criação Estratégica de Logotipo',
      description: 'Criamos logotipos únicos e memoráveis que representam a essência da sua marca, com identidade visual forte e profissional.'
    },
    {
      icon: Globe,
      title: 'Criação de Sites Práticos',
      description: 'Desenvolvemos sites modernos, responsivos e funcionais que convertem visitantes em clientes e elevam sua presença online.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 to-slate-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between lg:justify-center lg:relative">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            ROCKET DESIGN
          </h1>
          <div className="flex flex-col gap-2 lg:flex-row lg:absolute lg:right-6">
            <a href="#contato" className="px-4 py-2 lg:px-6 lg:py-2.5 bg-slate-900 text-white rounded-lg text-sm lg:text-base font-medium hover:bg-slate-800 transition-colors duration-200 text-center">
              Contato
            </a>
            <button onClick={() => document.getElementById('clientes')?.scrollIntoView({ behavior: 'smooth' })} className="px-4 py-2 lg:px-6 lg:py-2.5 bg-slate-900 text-white rounded-lg text-sm lg:text-base font-medium hover:bg-slate-800 transition-colors duration-200">
              Clientes
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 lg:py-16">
        <h2 className="text-xl md:text-4xl font-bold text-center text-white mb-1 lg:mb-4">
          Nossos Serviços
        </h2>
        <p className="text-center text-slate-300 text-xs lg:text-base mb-6 lg:mb-16">
          Faça seu orçamento!
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg lg:rounded-2xl p-3 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col items-center text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="w-9 h-9 lg:w-16 lg:h-16 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg lg:rounded-xl flex items-center justify-center mb-2 lg:mb-6 relative z-10">
                  <Icon className="w-4 h-4 lg:w-8 lg:h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xs lg:text-xl font-bold text-slate-900 mb-1.5 lg:mb-4 relative z-10">
                  {service.title}
                </h3>
                <p className="text-[10px] lg:text-base text-slate-600 leading-snug lg:leading-relaxed relative z-10">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </main>

      {/* Clientes Section */}
      <section id="clientes" className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <h2 className="text-xl md:text-4xl font-bold text-center text-white mb-8 lg:mb-12">
          Desenvolvimento de Acompanhamento da Marca
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl aspect-video bg-slate-900 rounded-lg lg:rounded-2xl shadow-2xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            >
              <source src="" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
