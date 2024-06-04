const reviews = [
  {
    id: 1,
    image: 'https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2009/11/ricetta-risotto-alla-milanese/risotto-alla-milanese-ante.jpg',
    dish: 'Risotto allo Zafferano',
    shortDescription: 'Un risotto cremoso con un tocco di zafferano.',
    description: 'Questo risotto allo zafferano è stato creato dal rinomato chef Mario Rossi...',
    chef: 'Mario Rossi',
    rating: 4.5,
  },
  {
    id: 2,
    image: 'https://www.cucchiaio.it/content/cucchiaio/it/ricette/2015/06/bistecca-alla-fiorentina/jcr:content/header-par/image-single.img10.jpg/1435051850020.jpg',
    dish: 'Bistecca alla Fiorentina',
    shortDescription: 'Una succulenta bistecca cotta alla perfezione.',
    description: 'La bistecca alla fiorentina di Luigi Bianchi è una delizia per i carnivori...',
    chef: 'Luigi Bianchi',
    rating: 4.7,
  },
  {
    id: 3,
    image: 'https://www.giallozafferano.it/images/173-17354/Tiramisu_650x433_wm.jpg',
    dish: 'Tiramisù Classico',
    shortDescription: 'Il dolce italiano per eccellenza, preparato alla perfezione.',
    description: 'Questo tiramisù è stato realizzato dalla celebre chef Anna Verdi...',
    chef: 'Anna Verdi',
    rating: 4.9,
  },
];

const chefs = [
  {
    id: 1,
    image: 'https://th.bing.com/th/id/OIG3.2EP4FB92CCAhg9eK.Ez7?w=1024&h=1024&rs=1&pid=ImgDetMain',
    name: 'Mario Rossi',
    shortBio: 'Chef di fama internazionale, specializzato in cucina italiana.',
    biography: 'Mario Rossi è un rinomato chef con oltre 20 anni di esperienza nella cucina italiana...',
  },
  {
    id: 2,
    image: 'https://th.bing.com/th/id/OIG3.2EP4FB92CCAhg9eK.Ez7?w=1024&h=1024&rs=1&pid=ImgDetMain',
    name: 'Luigi Bianchi',
    shortBio: 'Maestro della carne, conosciuto per la sua bistecca alla fiorentina.',
    biography: 'Luigi Bianchi ha conquistato il cuore degli amanti della carne con la sua bistecca alla fiorentina...',
  },
  {
    id: 3,
    image: 'https://th.bing.com/th/id/OIG3.2EP4FB92CCAhg9eK.Ez7?w=1024&h=1024&rs=1&pid=ImgDetMain',
    name: 'Anna Verdi',
    shortBio: 'Esperta di dolci, famosa per il suo tiramisù.',
    biography: 'Anna Verdi è celebre per i suoi dolci, in particolare per il suo tiramisù classico...',
  },
];

const articles = [
  {
    id: 1,
    image: 'https://via.placeholder.com/500x300.png?text=La+Storia+del+Risotto',
    title: 'La Storia del Risotto',
    excerpt: 'Scopri come è nato uno dei piatti più amati della cucina italiana...',
    content: 'Il risotto è un piatto tradizionale italiano, famoso per la sua cremosità...',
    author: 'Giovanni Rossi',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/500x300.png?text=I+Segreti+della+Bistecca+Perfetta',
    title: 'I Segreti della Bistecca Perfetta',
    excerpt: 'Tutti i trucchi per preparare una bistecca alla fiorentina impeccabile...',
    content: 'Preparare una bistecca alla fiorentina perfetta richiede tecnica e passione...',
    author: 'Francesca Bianchi',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/500x300.png?text=Dolci+Tradizionali+Italiani',
    title: 'Dolci Tradizionali Italiani',
    excerpt: 'Un viaggio tra i dolci più amati della tradizione italiana...',
    content: 'L’Italia è famosa per i suoi dolci, da nord a sud ci sono delizie per ogni palato...',
    author: 'Lucia Verdi',
  },
];

const events = [
  {
    id: 1,
    image: 'https://via.placeholder.com/500x300.png?text=Masterclass+di+Cucina+Italiana',
    title: 'Masterclass di Cucina Italiana',
    shortDescription: 'Partecipa alla masterclass con lo chef Mario Rossi.',
    description: 'Un evento imperdibile per gli appassionati di cucina italiana...',
    date: '2024-06-15',
    location: 'Milano, Italia',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/500x300.png?text=Festival+del+Cibo+di+Strada',
    title: 'Festival del Cibo di Strada',
    shortDescription: 'Assaggia il meglio dello street food italiano.',
    description: 'Un festival dedicato ai sapori del cibo di strada italiano...',
    date: '2024-07-20',
    location: 'Roma, Italia',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/500x300.png?text=Serata+di+Degustazione+Vini',
    title: 'Serata di Degustazione Vini',
    shortDescription: 'Scopri i vini italiani con l’esperto Luigi Bianchi.',
    description: 'Una serata dedicata alla degustazione dei migliori vini italiani...',
    date: '2024-08-10',
    location: 'Firenze, Italia',
  },
];

export { reviews, chefs, articles, events };  