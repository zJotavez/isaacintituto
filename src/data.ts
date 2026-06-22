import { Article, TimelineItem, PillarItem, EventItem, BookItem } from './types';
import acervoManuscript from './assets/acervo_manuscript.png';


export const PILLARS: PillarItem[] = [
  {
    id: 'p1',
    title: 'Memória',
    description: 'Preservação da história, genealogia, tradição literária e o patrimônio intelectual do judaísmo hispano-português.',
    iconName: 'Scale'
  },
  {
    id: 'p2',
    title: 'Conhecimento',
    description: 'Produção científica, estudos históricos, traduções de manuscritos raros, livros didáticos e publicações periódicas.',
    iconName: 'BookOpen'
  },
  {
    id: 'p3',
    title: 'Comunidade',
    description: 'Promoção de eventos culturais, lives institucionais, encontros acadêmicos, seminários e fomento à pesquisa de origens.',
    iconName: 'Users'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    category: 'História e Memória',
    title: 'A presença judaica no mundo ibérico: Da Idade de Ouro à Resistência Clandestina',
    summary: 'Uma imersão na extraordinária simbiose cultural em Toledo, Córdoba e Lisboa, e as redes mercantis e teológicas construídas por sábios e eruditos.',
    content: `A história dos judeus na Península Ibérica (conhecida em hebraico como Sefarad) é uma narrativa de esplendor e perseverança. Durante séculos, as comunidades judaicas de Portugal e de Espanha integraram com maestria a vida pública, filosófica e acadêmica da Europa Medieval.

Na chamada "Idade de Ouro de Sefarad", sábios como Yehuda Halevi, Maimônides e Isaac Abravanel traduziram textos clássicos, elevaram a poesia amorosa e litúrgica a patamares sublimes, e coordenaram finanças e diplomacias de reinos inteiros. Toledo e Sevilla brilhavam como faróis de sabedoria onde judeus, cristãos e muçulmanos debatiam e traduziam de mãos dadas.

Com o decreto de expulsão espanhol de 1492 pelos Reis Católicos, e o subsequente baptismo forçado de 1497 em Portugal ordenado por D. Manuel I, essa era dourada sofreu uma fratura brutal. Milhares decidiram pelo exílio forçado, dispersando-se pelo Império Otomano, Norte da África e Itália. Outros permaneceram sob a perigosa identidade de "cristãos-novos", mantendo secretamente a devoção aos mandamentos sob o risco do fogo inquisitorial.

Este artigo examina os ricos testamentos intelectuais e as redes transatlânticas formadas no limiar da Idade Moderna, que deram vida ao que hoje chamamos de judaísmo hispano-português.`,
    author: 'Prof. Dr. Samuel Aboab da Silva',
    date: '15 de Junho de 2026',
    readTime: '8 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'art-2',
    category: 'Judaísmo Sefardita',
    title: 'Memória sefardita e identidade: O Legado Familiar e sua Transmissão Oral',
    summary: 'Como as dinastias luso-sefarditas preservaram nomes tradicionais, preces secretas em português antigo e costumes litúrgicos singulares no norte da Europa.',
    content: `Para as famílias da "Nação Portuguesa" (como eram designados os sefarditas na diáspora ocidental do norte), a identidade religiosa nunca esteve desassociada do idioma e da etiqueta cavalheiresca de sua origem peninsular.

Ao se restabelecerem em Amsterdã, Hamburgo, Londres e Bayonne no decorrer do Século XVII, esses refugiados fundaram congregações onde o português e o espanhol permaneciam como línguas oficiais da administração e da prédica. Em locais como a imponente Sinagoga Portuguesa de Amsterdã (Esnoga), atas, sermões e regulamentos eram rigorosamente lavrados na língua materna ibérica.

No espaço doméstico, a transmissão oral operava de forma ainda mais comovente. Mães ensinavam preces sussurradas em português aos filhos, receitas com acentos andaluzes e alentejanos, e uma postura de inabalável honra e integridade. Nomes tradicionais como Aboab, Pereira, de Pinto, Costa e Fonseca eram orgulhosamente mantidos, servindo como estandartes de genealogias lendárias.

Redescobrir essa memória familiar não é apenas um feito de rigor histórico, mas um reencontro com a própria herança de sobrevivência ética de um grupo que ergueu grandes polos culturais livres de intolerância.`,
    author: 'Dra. Rachel Fonseca lopes',
    date: '02 de Junho de 2026',
    readTime: '6 min de leitura',
    imageUrl: acervoManuscript
  },
  {
    id: 'art-3',
    category: 'Livros e Resenhas',
    title: 'Livros, estudos e publicações: O Clássico "Tratado da Verdade da Lei de Moisés"',
    summary: 'Um exame aprofundado na obra-prima apologética escrita por intelectuais em Amsterdã, restabelecendo as bases do pensamento sefardita racionalista.',
    content: `O século XVII foi testigo de um esforço editorial sem precedentes na Europa Ocidental: a tradução das escrituras sagradas para vernáculos ibéricos e a publicação de tratados para educar os novos convertidos que haviam fugido da Inquisição.

Muitos desses cristãos-novos sabiam latim, espanhol ou português perfeitamente, mas desconheciam o hebraico e as tradições rabanísticas em virtude do confinamento religioso de suas pátrias de nascimento. Teólogos e sábios como Isaac Aboab da Fonseca e Menasseh ben Israel perceberam a urgência de preencher essa lacuna cultural.

O "Tratado da Verdade da Lei de Moisés", escrito em português elegante, visava responder aos dilemas céticos da época e fornecer um amparo filosófico robusto que dialogasse com o pensamento iluminista emergente. O livro articulava a racionalidade intrínseca à revelação bíblica, criando pontes pioneiras entre o humanismo renascentista e o judaísmo tradicional.

Com essa resenha detalhada, o Instituto Aboab convida os leitores modernos a folhear as páginas do tempo e entender como a filosofia sefardita moldou os alicerces da liberdade religiosa e de pensamento na Modernidade.`,
    author: 'Rabino Dr. David Aboab Cavalcanti',
    date: '20 de Maio de 2026',
    readTime: '10 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'art-4',
    category: 'Tradição Hispano-Portuguesa',
    title: 'Tradição hispano-portuguesa: Isaac Aboab da Fonseca e o Legado Luso-Brasileiro',
    summary: 'A trajetória milagrosa do primeiro rabino formal das Américas, que liderou a comunidade Kahal Kadosh Zur Israel sob o céu tropical do Recife.',
    content: `No ano de 1642, uma esquadra vinda de Amsterdã aportava no porto de Recife, centro administrativo do Brasil Holandês sob comando de João Maurício de Nassau. A bordo estava o ilustre rabino Isaac Aboab da Fonseca, acompanhado do mestre e companheiro espiritual Moisés Rafael de Aguilar.

Sua chegada catalisou a consolidação de uma sociedade sem precedentes nos trópicos do Hemisfério Ocidental. Pela primeira vez nas Américas, uma sinagoga formal e de rito sefardita completo, a Kahal Kadosh Zur Israel ("Santa Comunidade do Rochedo de Israel"), funcionava livremente com sua academia teológica (yeshivá), cemitério (t’futsot) e banho ritual (micvê).

Aboab da Fonseca não era apenas um líder espiritual formal, mas um poeta talentoso. Foi no Recife que ele escreveu o clássico "Me'am Lo'ez" e o famoso poema litúrgico em hebraico comemorando os cercos militares de ritos de libertação da cidade contra as forças luso-brasileiras, tornando-se a primeira obra literária escrita em hebraico no continente americano.

Embora o Recife holandês tenha caído em 1654, forçando a congregação a migrar de volta para a Holanda ou rumar em direção ao caribe e ao norte (fundando a lendária comunidade de Nova York), o exemplo de resiliência e erudição do rabino Aboab da Fonseca permanece como um sol eterno sobre a herança espiritual de nossa terra.`,
    author: 'Historiadora Clara Aboab Meirelles',
    date: '10 de Maio de 2026',
    readTime: '9 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&q=80&w=800'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 't1',
    period: 'Século XV e Anterior',
    title: 'Península Ibérica: Sefarad',
    description: 'A era dourada de convivência intelectual e espiritual sob reis cristãos e domínios muçulmanos.',
    details: 'Uma rede próspera de judiarias floresce em cidades como Toledo, Sevilha, Évora e Lisboa. É um período de imenso intercâmbio de conhecimento científico, alquimia, astronomia, tradução e estudos bíblicos e cabalísticos de ordem monumental.'
  },
  {
    id: 't2',
    period: 'Séculos XVI - XVII',
    title: 'A Diáspora Sefardita',
    description: 'Os Éditos de Expulsão e a subsequente dispersão global da Nação Portuguesa e Espanhola.',
    details: 'Em decorrência da perseguição e das conversões compulsórias decretadas em Portugal (1497) e Espanha (1492), refugiados criam prósperas colônias no Norte da Europa (especialmente Amsterdã e Londres), nos Balcãs, no Império Otomano e no Novo Mundo.'
  },
  {
    id: 't3',
    period: 'Meados do Século XVII',
    title: 'Brasil e Bacia do Atlântico',
    description: 'A era dourada do Recife Holandês e a fundação da primeira Sinagoga das Américas.',
    details: 'Sob a égide da tolerância holandesa, estabelece-se a sinagoga Kahal Kadosh Zur Israel no Recife. Sob a batuta de Isaac Aboab da Fonseca, o primeiro rabino oficial das Américas, a comunidade floresce comercial e intelectualmente entre 1636 e 1654.'
  },
  {
    id: 't4',
    period: 'Século XXI e Futuro',
    title: 'Memória Viva e Conexão',
    description: 'A redescoberta e o renascimento contemporâneo dos laços genealógicos e culturais hispano-portugueses.',
    details: 'Centenas de anos depois, descendentes das antigas famílias buscam reconectar-se com suas origens, reestabelecendo a presença acadêmica, arquivística, e honrando a memória de pensadores que semearam as sementes da liberdade intelectual.'
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'Série de Lives: Sefarad Revisitada',
    type: 'live',
    dateStr: 'Julho de 2026',
    description: 'Discussões acadêmicas sobre as linhagens familiares sefarditas medievais.',
    status: 'breve'
  },
  {
    id: 'ev-2',
    title: 'Curso Livre: Introdução à Filosofia Espinosista e as Origens de Amsterdã',
    type: 'curso',
    dateStr: 'Agosto de 2026',
    description: 'A atmosfera filosófica da sinagoga luso-portuguesa e as rupturas intelectuais.',
    status: 'breve'
  },
  {
    id: 'ev-3',
    title: 'Palestra Magna: O Rabino Isaac Aboab da Fonseca no Novo Mundo',
    type: 'palestra',
    dateStr: 'Setembro de 2026',
    description: 'Palestra comemorativa do aniversário da fundação cultural no Recife.',
    status: 'breve'
  },
  {
    id: 'ev-4',
    title: 'Apresentação do Livro: Cartografia Secreta dos Cristãos-Novos do Brasil',
    type: 'livro',
    dateStr: 'Outubro de 2026',
    description: 'Uma análise arqueológica e documental inédita sobre a colonização espiritual do nordeste brasileiro.',
    status: 'breve'
  }
];

export const BOOKS: BookItem[] = [
  {
    id: 'b-1',
    title: 'Aboab da Fonseca: O Rabino de Amsterdã e Recife',
    author: 'Prof. Dr. Eduardo Bueno Castro',
    description: 'A biografia mais abrangente desse mestre pioneiro, detalhando suas visões místicas, a liderança em Amsterdã e seu heróico exílio nos canaviais brasileiros.',
    coverColor: 'bg-gradient-to-br from-brand-blue to-brand-wine-dark',
    tags: ['Biografia', 'Fato Histórico', 'Recife']
  },
  {
    id: 'b-2',
    title: 'A Esnoga Sagrada: Arquitetura da Fé Sefardita',
    author: 'Arquiteta Helena de Sola Pinto',
    description: 'Um tour visual e histórico pelas clássicas e monumentais sinagogas portuguesas construídas na Europa do norte e Caribe após as fugas peninsulares.',
    coverColor: 'bg-gradient-to-br from-brand-blue to-brand-gold',
    tags: ['Arquitetura', 'História Visual', 'Amsterdã']
  },
  {
    id: 'b-3',
    title: 'Preces Clandestinas: Antologia Teológica Secreta',
    author: 'Pesquisador Marcus da Costa Junior',
    description: 'Tradução anotada das poesias, rezas domésticas e sermões proferidos pelas "Mães da Nação" no período inicial da imigração colonial.',
    coverColor: 'bg-gradient-to-br from-brand-wine to-brand-wine-dark',
    tags: ['Liturgia', 'Tradução', 'Genealogia']
  }
];
