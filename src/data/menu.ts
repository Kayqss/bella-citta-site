export type Item = { nome: string; preco: number; obs?: string };
export type Menu = Record<string, Item[]>;

export const FILIAIS = {
  guapore: {
    slug: "guapore",
    nome: "Filial Guaporé",
    endereco: "Av. Heráclito F. S. Pinto, 450 — Ribeirão Preto/SP",
    whatsapp: "5516992171292",
    telefone: "+55 16 99217-1292",
  },
  seixas: {
    slug: "vila-seixas",
    nome: "Filial Vila Seixas",
    endereco: "R. Casemiro de Abreu, 286 — Ribeirão Preto/SP",
    whatsapp: "5516996302070",
    telefone: "+55 16 99630-2070",
  },
  portugal: {
    slug: "portugal",
    nome: "Filial Portugal",
    endereco: "Av. Portugal, 1760 — Ribeirão Preto/SP",
    whatsapp: "5516988673882",
    telefone: "+55 16 98867-3882",
  },
} as const;

export type FilialKey = keyof typeof FILIAIS;

export const FACEBOOK =
  "https://www.facebook.com/Bellacitta?mibextid=wwXIfr&rdid=krm1c1bMYOilaDou&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15JA2iANAW%2F%3Fmibextid%3DwwXIfr";
export const INSTAGRAM = "https://instagram.com/bellacittarp";

const cafes: Item[] = [
  { nome: "Café Coado Duplo 160ml", preco: 7.9 },
  { nome: "Café Expresso 80ml", preco: 6.9 },
  { nome: "Café Fazenda 80ml", preco: 9.9 },
  { nome: "Café Doppio Expresso 160ml", preco: 12.9, obs: "Duas medidas de expresso" },
  { nome: "Café Macchiato 80ml", preco: 7.9, obs: "Expresso com espuma de leite" },
  { nome: "Café Latte 180ml", preco: 9.9, obs: "Leite vaporizado com café" },
  { nome: "Café Latte 300ml", preco: 11.9, obs: "Leite vaporizado com café" },
  { nome: "Café Caramelo 300ml", preco: 14.9 },
  { nome: "Chocolate Quente 180ml", preco: 12.9 },
  { nome: "Chocolate Gelado 300ml", preco: 15.9 },
  { nome: "Cappuccino 80ml", preco: 9.9 },
  { nome: "Cappuccino 180ml", preco: 14.9 },
  { nome: "Cappuccino Especial 180ml", preco: 18.9, obs: "Acompanha gotas de chocolate e chantilly" },
  { nome: "Chá Nacional 180ml", preco: 6.5, obs: "Consultar sabores disponíveis" },
  { nome: "Chá Gelado 300ml", preco: 14.9, obs: "Consultar sabores disponíveis" },
  { nome: "Chocolate Europeu 130ml", preco: 15.9, obs: "Chocolate europeu com leite quente cremoso" },
  { nome: "Chocolate Suíço 300ml", preco: 16.9, obs: "Chocolate 50% cacau batido com leite gelado" },
  { nome: "Moocha 130ml", preco: 15.9, obs: "Leite vaporizado com café e chocolate" },
  { nome: "Bella Nutella 130ml", preco: 17.9, obs: "Cappuccino com Nutella" },
  { nome: "Cappuccino Ice 300ml", preco: 19.9, obs: "Cappuccino mix com leite gelado e calda de caramelo" },
];

const fit: Item[] = [
  { nome: "Detox Bella Saúde 300ml", preco: 16.9, obs: "Couve, maracujá, gengibre e suco de laranja" },
  { nome: "Detox Diurético 300ml", preco: 12.9, obs: "Abacaxi, couve, gengibre, limão e água" },
  { nome: "Detox Suco Rosa 300ml", preco: 14.9, obs: "Beterraba, cenoura, morango e suco de laranja" },
  { nome: "Smoothie Morango 300ml", preco: 14.9, obs: "Iogurte natural batido com morango" },
  { nome: "Smoothie Maracujá 300ml", preco: 17.9, obs: "Iogurte natural batido com polpa de maracujá" },
  { nome: "Salada de Frutas com Suco", preco: 16.9, obs: "Maçã, banana, morango, mamão, suco de laranja, granola e mel" },
  { nome: "Salada de Frutas sem Suco", preco: 14.9, obs: "Maçã, banana, morango, mamão, granola e mel" },
  { nome: "Porção de Mamão com Granola e Mel", preco: 7.9, obs: "Mamão, granola e mel" },
];

const refrescanteBase: Item[] = [
  { nome: "Suco de Limão Natural 300ml", preco: 4.9 },
  { nome: "Suco de Abacaxi com Hortelã 300ml", preco: 8.9 },
  { nome: "Suco de Acerola 300ml", preco: 8.9 },
  { nome: "Suco de Morango Natural 300ml", preco: 9.9 },
  { nome: "Suco de Laranja Natural 300ml", preco: 10.9 },
  { nome: "Suco de Laranja com Morango 300ml", preco: 11.9 },
  { nome: "Suco de Laranja com Acerola 300ml", preco: 11.9 },
  { nome: "Suco de Maracujá 300ml", preco: 11.9 },
  { nome: "Suco de Açaí com Laranja 300ml", preco: 12.9 },
  { nome: "Vitamina Morango com Leite 300ml", preco: 10.9, obs: "Morangos com leite cremoso" },
  { nome: "Vitamina Mista com Leite 300ml", preco: 10.9, obs: "Banana, maçã, mamão e leite" },
  { nome: "Vitamina Mista com Laranja 300ml", preco: 13.9, obs: "Banana, maçã, mamão e suco de laranja" },
];

const milkShake: Item = {
  nome: "Milk Shake Chocolate",
  preco: 18.9,
  obs: "Sorvete de chocolate, leite, calda de chocolate, chantilly e canudinho de wafer",
};
const acaiTigela: Item = {
  nome: "Tigela de Açaí Bella Citta",
  preco: 26.9,
  obs: "Açaí, leite ninho, leite condensado, morango, banana e granola",
};

const matinaisBase: Item[] = [
  { nome: "Pão com Manteiga", preco: 6.9 },
  { nome: "Pão com Nutella", preco: 16.9 },
  { nome: "Pão com Manteiga na Chapa", preco: 8.9 },
  { nome: "Pão de Fermentação Natural na Chapa", preco: 9.9 },
  { nome: "Pão com Requeijão Scala Tostado", preco: 16.9 },
  { nome: "Casadinho Bella Citta", preco: 16.9, obs: "Meio pão tostado e meio pão com Nutella" },
  { nome: "Pão de Queijo Recheado", preco: 14.9, obs: "Presunto, mussarela, tomate, requeijão Scala e orégano" },
  { nome: "Pão de Queijo Bella Citta", preco: 17.9, obs: "Peito de peru, queijo frescal, tomate, requeijão Scala e orégano" },
  { nome: "Pão de Queijo Tostado com Requeijão", preco: 15.9, obs: "Pão de queijo com requeijão Scala tostado na chapa" },
  { nome: "Americano", preco: 18.9, obs: "Presunto, mussarela, ovo, tomate e alface" },
  { nome: "Bauru Tradicional", preco: 16.9, obs: "Presunto, mussarela, tomate e orégano" },
  { nome: "Bauru Bella Citta", preco: 22.9, obs: "Peito de peru, queijo frescal, tomate e orégano" },
  { nome: "Pão com Ovo (2 ovos)", preco: 11.9 },
  { nome: "Pão com Ovo e Mussarela", preco: 16.9, obs: "2 ovos e mussarela" },
  { nome: "Pão com Ovo e Meia Cura", preco: 25.9, obs: "2 ovos e queijo meia cura" },
  { nome: "Pão com Ovo e Frescal", preco: 23.9, obs: "2 ovos e queijo frescal" },
];

const paoMortadelaCeratti: Item = {
  nome: "Pão com Mortadela Ceratti e Mussarela",
  preco: 22.9,
  obs: "Mortadela Ceratti e mussarela",
};

const matinaisFim: Item[] = [
  { nome: "Pão com Mortadela Tradicional e Mussarela", preco: 14.9, obs: "Mortadela tradicional e mussarela" },
  { nome: "Misto Quente ou Frio Tradicional", preco: 16.9, obs: "Presunto e mussarela" },
  { nome: "Misto Quente ou Frio Especial", preco: 19.9, obs: "Peito de peru e queijo frescal" },
  { nome: "Queijo Quente Mussarela", preco: 16.9 },
  { nome: "Queijo Quente Meia Cura", preco: 19.9 },
  { nome: "Queijo Quente Frescal", preco: 19.9 },
];

const levesBase: Item[] = [
  { nome: "Ovo Mexido", preco: 9.9 },
  { nome: "Omelete Simples", preco: 17.9, obs: "2 ovos, mussarela, cebola e cheiro verde" },
  { nome: "Omelete Bella Citta", preco: 22.9, obs: "2 ovos, peito de peru, mussarela e cheiro verde" },
  { nome: "Omelete Completa", preco: 28.9, obs: "2 ovos, mussarela, presunto, cebola, cheiro verde, bacon, requeijão Scala, alface e tomate" },
  { nome: "Tapioca ou Crepioca na Manteiga", preco: 10.9 },
  { nome: "Tapioca ou Crepioca Presunto e Mussarela", preco: 19.9 },
  { nome: "Tapioca ou Crepioca Frango com Requeijão", preco: 19.9, obs: "Frango com requeijão Scala" },
  { nome: "Tapioca ou Crepioca Peito de Peru com Frescal", preco: 23.9 },
  { nome: "Tapioca ou Crepioca Nutella com Morango", preco: 19.9 },
  { nome: "Crepe Bella Pizza", preco: 24.9, obs: "Presunto, mussarela, tomate, requeijão Scala, orégano e molho de tomate" },
  { nome: "Crepe Bella Bolonhesa", preco: 25.9, obs: "Carne moída, mussarela e molho de tomate" },
  { nome: "Crepe Bella Chicken", preco: 25.9, obs: "Frango desfiado, mussarela, requeijão Scala e molho branco" },
];

const crepeBroccoli: Item = {
  nome: "Crepe Bella Broccoli",
  preco: 26.9,
  obs: "Brócolis, requeijão Scala, mussarela e bacon",
};
const crepeNutella: Item = { nome: "Crepe Nutella com Morango", preco: 21.9 };

const burgers: Item[] = [
  { nome: "X Burguer", preco: 20.9, obs: "Pão de hambúrguer, hambúrguer e mussarela" },
  { nome: "X Burguer Salada", preco: 22.9, obs: "Hambúrguer, mussarela, alface e tomate" },
  { nome: "X Burguer Salada Bacon Egg", preco: 27.9, obs: "Hambúrguer, mussarela, alface, tomate, bacon e ovo" },
  { nome: "X Burguer Tudo", preco: 31.9, obs: "Hambúrguer, mussarela, alface, tomate, bacon, ovo, presunto e salsicha" },
  { nome: "X Frango", preco: 22.9, obs: "Pão francês, frango e mussarela" },
  { nome: "X Frango Salada", preco: 24.9, obs: "Frango, mussarela, alface e tomate" },
  { nome: "X Frango Salada Bacon Egg", preco: 29.9, obs: "Frango, mussarela, alface, tomate, bacon e ovo" },
  { nome: "X Frango Tudo", preco: 33.9, obs: "Frango, mussarela, alface, tomate, bacon, ovo, presunto e salsicha" },
];

const filePasteis: Item[] = [
  { nome: "X Filé", preco: 26.9, obs: "Pão francês, filé bovino e mussarela" },
  { nome: "X Filé Salada", preco: 27.9, obs: "Filé bovino, mussarela, alface e tomate" },
  { nome: "X Filé Salada Bacon Egg", preco: 32.9, obs: "Filé bovino, mussarela, alface, tomate, bacon e ovo" },
  { nome: "Bella Filé Acebolado", preco: 32.9, obs: "Filé bovino acebolado, cebola no shoyu, mussarela e requeijão Scala" },
  { nome: "X Filé Tudo", preco: 35.9, obs: "Filé bovino, mussarela, alface, tomate, bacon, ovo, presunto e salsicha" },
  { nome: "Pastel de Carne", preco: 13.9 },
  { nome: "Pastel de Pizza", preco: 13.9 },
  { nome: "Pastel de Queijo", preco: 13.9 },
  { nome: "Pastel Carne com Queijo", preco: 15.9 },
  { nome: "Pastel Frango com Requeijão", preco: 15.9, obs: "Frango com requeijão Scala" },
];

const executivosCompleto: Item[] = [
  { nome: "Frango Light", preco: 26.9, obs: "Arroz integral, filé de frango grelhado e legumes" },
  { nome: "Strogonoff de Frango", preco: 25.9, obs: "Arroz branco, strogonoff de frango e batata palha" },
  { nome: "Strogonoff de Carne", preco: 27.9, obs: "Arroz branco, strogonoff de carne e batata palha" },
  { nome: "Filé de Frango à Milanesa", preco: 28.9, obs: "Arroz branco, feijão, filé de frango empanado e creme de milho" },
  { nome: "Filé Bovino à Milanesa", preco: 28.9, obs: "Arroz branco, feijão, filé bovino empanado e purê de batata" },
  { nome: "Panqueca de Carne", preco: 28.9, obs: "Arroz branco, panqueca de carne moída e batata frita" },
  { nome: "Filé de Frango à Parmegiana", preco: 32.9, obs: "Arroz branco, filé de frango empanado, molho com ervilhas frescas, parmesão e batata frita" },
  { nome: "Filé Bovino à Parmegiana", preco: 34.9, obs: "Arroz branco, filé bovino empanado, molho com ervilhas frescas, parmesão e batata frita" },
  { nome: "Penne com Brócolis", preco: 25.9, obs: "Vegetariano — penne, molho branco, brócolis, tomate cereja e parmesão" },
  { nome: "Caesar Salad", preco: 26.9, obs: "Alface americana, croutons, tiras de frango, tomate cereja, parmesão e molho especial" },
  { nome: "Filé de Frango Acebolado", preco: 28.9, obs: "Arroz branco, feijão, filé de frango acebolado, farofa e batata frita" },
  { nome: "Filé Bovino Acebolado", preco: 32.9, obs: "Arroz branco, feijão, filé bovino acebolado, farofa e batata frita" },
  { nome: "Peixe Light", preco: 32.9, obs: "Arroz integral, filé de tilápia e legumes" },
  { nome: "Filé de Peixe à Parmegiana", preco: 36.9, obs: "Arroz branco, filé de tilápia empanado, molho com ervilhas frescas, parmesão e batata frita" },
  { nome: "Filé de Peixe à Dorê", preco: 32.9, obs: "Arroz branco, feijão, filé de tilápia e legumes" },
  { nome: "Bife à Cavalo", preco: 34.9, obs: "Arroz branco, feijão, filé bovino, ovo frito, farofa e batata frita" },
  { nome: "Ovo Frito", preco: 23.99, obs: "Arroz branco, feijão, 2 ovos fritos e purê de batata" },
  { nome: "Kids Bovino", preco: 25.9, obs: "Arroz branco, feijão, tiras de filé bovino grelhado e batata frita ou purê de batata" },
  { nome: "Kids Frango", preco: 24.9, obs: "Arroz branco, feijão, tiras de frango grelhado e batata frita ou purê de batata" },
  { nome: "Kids Macarrão ao Sugo", preco: 19.9, obs: "Macarrão alho e óleo ou à bolonhesa" },
];

const executivosSeixas: Item[] = [
  { nome: "Ovo Frito", preco: 23.99, obs: "Arroz branco, feijão, 2 ovos fritos e purê de batata" },
  { nome: "Strogonoff de Frango", preco: 25.9, obs: "Arroz branco, strogonoff de frango e batata palha" },
  { nome: "Strogonoff de Carne", preco: 27.9, obs: "Arroz branco, strogonoff de carne e batata palha" },
  { nome: "Frango Light", preco: 26.9, obs: "Arroz integral, filé de frango grelhado e legumes" },
  { nome: "Filé de Frango à Milanesa", preco: 28.9, obs: "Arroz branco, feijão, filé de frango empanado e creme de milho" },
  { nome: "Filé Bovino à Milanesa", preco: 28.9, obs: "Arroz branco, feijão, filé bovino empanado e purê de batata" },
  { nome: "Filé Bovino à Parmegiana", preco: 34.9, obs: "Arroz branco, filé bovino empanado, molho com ervilhas frescas, parmesão e batata frita" },
  { nome: "Filé de Frango à Parmegiana", preco: 32.9, obs: "Arroz branco, filé de frango empanado, molho com ervilhas frescas, parmesão e batata frita" },
  { nome: "Caesar Salad", preco: 26.9, obs: "Alface americana, croutons, tiras de frango, tomate cereja, parmesão e molho especial" },
  { nome: "Filé de Frango Acebolado", preco: 28.9, obs: "Arroz branco, feijão, filé de frango acebolado, farofa e batata frita" },
  { nome: "Filé Bovino Acebolado", preco: 32.9, obs: "Arroz branco, feijão, filé bovino acebolado, farofa e batata frita" },
  { nome: "Bife à Cavalo", preco: 34.9, obs: "Arroz branco, feijão, filé bovino, ovo frito, farofa e batata frita" },
];

export const MENU_GUAPORE: Menu = {
  "Cafés Especiais": cafes,
  "Momento Fit": fit,
  Refrescante: [...refrescanteBase, milkShake, acaiTigela],
  "Lanches Matinais": [...matinaisBase, paoMortadelaCeratti, ...matinaisFim],
  "Lanches Leves": [...levesBase, crepeBroccoli, crepeNutella],
  "Hambúrgueres e Frango": burgers,
  "Filé Bovino e Pastéis": filePasteis,
  "Pratos Executivos": executivosCompleto,
};

export const MENU_PORTUGAL: Menu = {
  "Cafés Especiais": cafes,
  "Momento Fit": fit,
  Refrescante: [...refrescanteBase, milkShake, acaiTigela],
  "Lanches Matinais": [...matinaisBase, paoMortadelaCeratti, ...matinaisFim],
  "Lanches Leves": [...levesBase, crepeBroccoli, crepeNutella],
  "Hambúrgueres e Frango": burgers,
  "Filé Bovino e Pastéis": filePasteis,
  "Pratos Executivos": executivosCompleto,
};

export const MENU_SEIXAS: Menu = {
  "Cafés Especiais": cafes,
  "Momento Fit": fit,
  Refrescante: [...refrescanteBase, acaiTigela],
  "Lanches Matinais": [...matinaisBase, ...matinaisFim],
  "Lanches Leves": [...levesBase, crepeNutella],
  "Hambúrgueres e Frango": burgers,
  "Filé Bovino e Pastéis": filePasteis,
  "Pratos Executivos": executivosSeixas,
};

const ENCOMENDAS_CATS: Menu = {
  "Mini Salgados Fritos (Cento / Mín. 25 un)": [
    { nome: "Coxinha de frango", preco: 79.0 },
    { nome: "Enroladinho de presunto e queijo", preco: 79.0 },
    { nome: "Salsicha empanada", preco: 79.0 },
    { nome: "Bolinha de queijo", preco: 99.0 },
    { nome: "Quibe tradicional", preco: 89.0 },
    { nome: "Quibe com catupiry", preco: 89.0 },
    { nome: "Pastel de carne", preco: 95.0 },
    { nome: "Pastel de queijo", preco: 95.0 },
  ],
  "Mini Salgados Folhados e Quiches (Cento / Mín. 25 un)": [
    { nome: "Mini croissant de frango", preco: 120.0 },
    { nome: "Mini croissant de presunto e queijo", preco: 120.0 },
    { nome: "Mini croissant de peito de peru", preco: 120.0 },
    { nome: "Mini croissant de ricota com azeitona", preco: 120.0 },
    { nome: "Empada de frango", preco: 130.0 },
    { nome: "Quiche de alho-poró", preco: 150.0 },
    { nome: "Quiche de palmito", preco: 150.0 },
    { nome: "Quiche de ervas finas", preco: 150.0 },
  ],
  "Mini Salgados Assados (Cento / Mín. 25 un)": [
    { nome: "Pão de queijo", preco: 89.0 },
    { nome: "Assadinho de presunto e queijo", preco: 79.0 },
    { nome: "Assadinho de frango", preco: 79.0 },
    { nome: "Assadinho de salsicha", preco: 79.0 },
    { nome: "Assadinho de ricota", preco: 79.0 },
    { nome: "Assadinho de palmito", preco: 79.0 },
    { nome: "Assadinho de calabresa", preco: 79.0 },
    { nome: "Esfirra de carne", preco: 120.0 },
    { nome: "Esfirra de frango", preco: 120.0 },
  ],
  "Mini Lanches e Wraps (Unidade / Mín. 25 un)": [
    { nome: "Mini lanche Salame, queijo prato e requeijão", preco: 5.3 },
    { nome: "Mini lanche Peito de peru, mussarela e requeijão", preco: 4.9 },
    { nome: "Mini lanche Presunto, mussarela e requeijão", preco: 4.9 },
    { nome: "Mini lanche Lombinho, mussarela e requeijão", preco: 4.9 },
    { nome: "Mini lanche Salpicão de frango e batata palha", preco: 4.9 },
    { nome: "Mini hot dog", preco: 4.5 },
    { nome: "Mini hambúrguer", preco: 6.9 },
    { nome: "Wrap Salame, queijo prato e requeijão", preco: 4.8, obs: "Lanche no pão folha" },
    { nome: "Wrap Peito de peru, mussarela e requeijão", preco: 4.8, obs: "Lanche no pão folha" },
    { nome: "Wrap Presunto, mussarela e requeijão", preco: 4.5, obs: "Lanche no pão folha" },
    { nome: "Wrap Tomate seco e mussarela de búfala", preco: 4.8, obs: "Lanche no pão folha" },
  ],
  "Tábuas de Frios": [
    { nome: "Tábua Pequena", preco: 149.0, obs: "1 kg, até 10 pessoas" },
    { nome: "Tábua Média", preco: 179.0, obs: "1,4 kg, até 20 pessoas" },
    { nome: "Tábua Grande", preco: 205.0, obs: "1,8 kg, até 30 pessoas" },
  ],
  "Baguetes de 1 Metro": [
    { nome: "Baguete Presunto e mussarela", preco: 109.0, obs: "Patê de frango, requeijão, tomate e alface" },
    { nome: "Baguete Peito de peru e mussarela", preco: 118.0, obs: "Patê de ervas finas, requeijão, tomate e alface" },
    { nome: "Baguete Salame italiano e queijo prato", preco: 119.0, obs: "Patê de azeitona preta, requeijão, tomate e alface" },
    { nome: "Baguete Salame hamburguês e queijo prato", preco: 119.0, obs: "Patê de azeitona preta, requeijão, tomate e alface" },
    { nome: "Baguete Lombo canadense e provolone", preco: 113.0, obs: "Requeijão, tomate e alface" },
    { nome: "Baguete Salpicão de frango", preco: 113.0, obs: "Batata palha, mussarela e alface" },
    { nome: "Baguete Mussarela de búfala", preco: 119.0, obs: "Patê de tomate seco, requeijão, rúcula e tomate seco" },
  ],
  "Mini Doces (50 unidades)": [
    { nome: "Mini sonho de creme", preco: 90.0 },
    { nome: "Mini sonho de doce de leite", preco: 100.0 },
    { nome: "Carolina de doce de leite", preco: 90.0 },
    { nome: "Carolina de chocolate", preco: 100.0 },
    { nome: "Carolina de Ferrero Rocher", preco: 100.0 },
    { nome: "Carolina de limão", preco: 90.0 },
    { nome: "Mini quiche de doce de leite", preco: 100.0 },
    { nome: "Mini quiche de limão", preco: 90.0 },
    { nome: "Mini quiche de maracujá", preco: 90.0 },
    { nome: "Lua de mel de doce de leite", preco: 90.0 },
    { nome: "Lua de mel de leite ninho", preco: 100.0 },
  ],
  "Bolos Confeitados (Valor por kg)": [
    { nome: "Bolo de brigadeiro", preco: 77.9 },
    { nome: "Bolo de prestígio", preco: 89.9 },
    { nome: "Bolo de Ferrero Rocher", preco: 73.9 },
    { nome: "Bolo de leite ninho", preco: 96.9 },
    { nome: "Bolo de leite ninho com morango", preco: 119.9 },
    { nome: "Bolo de leite ninho com abacaxi", preco: 98.9 },
    { nome: "Bolo Dueto", preco: 97.9 },
    { nome: "Bolo mousse de chocolate com morango", preco: 100.9 },
    { nome: "Bolo mousse de chocolate", preco: 91.9 },
  ],
};

const CESTAS: Item[] = [
  {
    nome: "Cesta Lembrança",
    preco: 115.0,
    obs: "Pão francês, pão delícia, mini pães de queijo, bolo caseiro, mini rosquinhas, mini carolinas, petit four, mussarela, presunto, polenguinho, geleia, manteiga, maçã, mamão, iogurte 180ml, suco de laranja 300ml e embalagem",
  },
  {
    nome: "Box de Amor",
    preco: 149.0,
    obs: "Caixinha de madeira, caseirinho, croissant, pão de queijo, broa de fubá, carolina de doce de leite, torrada palito, bolo, geleia, doce de leite, salame, mussarela, chás, suco, uva, morangos e bolachinhas petit four",
  },
  {
    nome: "Cesta Especial",
    preco: 165.0,
    obs: "Pão francês, pão delícia, pão caseiro, torradas palito, mini pães de queijo, bolo caseiro, rosquinhas, mini broinha, rocambole, mussarela, presunto, maçã, mamão, uva, geleia, manteiga, mel, poleguinho, achocolatado gelado, iogurte 180ml, suco de laranja 300ml e embalagem",
  },
  {
    nome: "Café na Bandeja",
    preco: 209.0,
    obs: "Bandeja de servir na cama, filão, torradas palito, mini lanche, mini pães de queijo, bolo caseiro, carolinas, doce, petit four, geleia, manteiga, Nutella, polenguinho, salada de fruta, suco de laranja 300ml e xícara",
  },
];

// Categorias com entrega: preços exibidos com "+ taxa de entrega" e botão de pedido.
export const CATEGORIAS_ENTREGA = new Set([
  "Mini Salgados Fritos (Cento / Mín. 25 un)",
  "Mini Salgados Folhados e Quiches (Cento / Mín. 25 un)",
  "Mini Salgados Assados (Cento / Mín. 25 un)",
  "Mini Lanches e Wraps (Unidade / Mín. 25 un)",
  "Tábuas de Frios",
  "Baguetes de 1 Metro",
  "Mini Doces (50 unidades)",
  "Bolos Confeitados (Valor por kg)",
]);

export const NOTAS_CATEGORIA: Record<string, string> = {
  "Mini Lanches e Wraps (Unidade / Mín. 25 un)":
    "Pedido mínimo de 25 unidades por sabor. Consultar valor de acréscimo com salada. Wraps: todos os lanches possuem alface e cenoura.",
  "Tábuas de Frios":
    "Pedido mínimo de 25 unidades por sabor. Queijos: prato, mussarela, provolone e gorgonzola. Embutidos: salame hamburguês, salame italiano, copa, peito de peru e lombo canadense.",
  "Baguetes de 1 Metro": "Rende em média 25 fatias cada pão.",
};

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const EXTRAS: Menu = {
  ...ENCOMENDAS_CATS,
  "Cestas Personalizadas": CESTAS,
};

Object.assign(MENU_GUAPORE, EXTRAS);
Object.assign(MENU_PORTUGAL, EXTRAS);
Object.assign(MENU_SEIXAS, EXTRAS);

export const MENUS: Record<FilialKey, Menu> = {
  guapore: MENU_GUAPORE,
  seixas: MENU_SEIXAS,
  portugal: MENU_PORTUGAL,
};
