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
  { nome: "Café Doppio Expresso 160ml", preco: 12.9 },
  { nome: "Café Macchiato 80ml", preco: 7.9 },
  { nome: "Café Latte 180ml", preco: 9.9 },
  { nome: "Café Latte 300ml", preco: 11.9 },
  { nome: "Café Caramelo 300ml", preco: 14.9 },
  { nome: "Chocolate Quente 180ml", preco: 12.9 },
  { nome: "Chocolate Gelado 300ml", preco: 15.9 },
  { nome: "Cappuccino 80ml", preco: 9.9 },
  { nome: "Cappuccino 180ml", preco: 14.9 },
  { nome: "Cappuccino Especial 180ml", preco: 18.9, obs: "Com gotas de chocolate e chantilly" },
  { nome: "Chá Nacional 180ml", preco: 6.5 },
  { nome: "Chá Gelado 300ml", preco: 14.9 },
  { nome: "Chocolate Europeu 130ml", preco: 15.9, obs: "Cremoso" },
  { nome: "Chocolate Suíço 300ml", preco: 16.9, obs: "50% cacau com leite gelado" },
  { nome: "Moocha 130ml", preco: 15.9 },
  { nome: "Bella Nutella 130ml", preco: 17.9 },
  { nome: "Cappuccino Ice 300ml", preco: 19.9 },
];

const fit: Item[] = [
  { nome: "Detox Bella Saúde 300ml", preco: 16.9, obs: "Couve, maracujá, gengibre e suco de laranja" },
  { nome: "Detox Diurético 300ml", preco: 12.9, obs: "Abacaxi, couve, gengibre, limão e água" },
  { nome: "Detox Suco Rosa 300ml", preco: 14.9, obs: "Beterraba, cenoura, morango e suco de laranja" },
  { nome: "Smoothie Morango 300ml", preco: 14.9 },
  { nome: "Smoothie Maracujá 300ml", preco: 17.9 },
  { nome: "Salada de Frutas com Suco", preco: 16.9 },
  { nome: "Salada de Frutas sem Suco", preco: 14.9 },
  { nome: "Porção de Mamão com Granola e Mel", preco: 7.9 },
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
  { nome: "Vitamina Morango com Leite 300ml", preco: 10.9 },
  { nome: "Vitamina Mista com Leite 300ml", preco: 10.9 },
  { nome: "Vitamina Mista com Laranja 300ml", preco: 13.9 },
];

const matinaisBase: Item[] = [
  { nome: "Pão com Manteiga", preco: 6.9 },
  { nome: "Pão com Nutella", preco: 16.9 },
  { nome: "Pão com Manteiga na Chapa", preco: 8.9 },
  { nome: "Pão de Fermentação Natural na Chapa", preco: 9.9 },
  { nome: "Pão com Requeijão Scala Tostado", preco: 16.9 },
  { nome: "Casadinho Bella Citta", preco: 16.9 },
  { nome: "Pão de Queijo Recheado", preco: 14.9 },
  { nome: "Pão de Queijo Bella Citta", preco: 17.9 },
  { nome: "Pão de Queijo Tostado com Requeijão", preco: 15.9 },
  { nome: "Americano", preco: 18.9 },
  { nome: "Bauru Tradicional", preco: 16.9 },
  { nome: "Bauru Bella Citta", preco: 22.9 },
  { nome: "Pão com Ovo (2 ovos)", preco: 11.9 },
  { nome: "Pão com Ovo e Mussarela", preco: 16.9 },
  { nome: "Pão com Ovo e Meia Cura", preco: 25.9 },
  { nome: "Pão com Ovo e Frescal", preco: 23.9 },
];

const matinaisFim: Item[] = [
  { nome: "Pão com Mortadela Tradicional e Mussarela", preco: 14.9 },
  { nome: "Misto Quente ou Frio Tradicional", preco: 16.9 },
  { nome: "Misto Quente ou Frio Especial", preco: 19.9 },
  { nome: "Queijo Quente Mussarela", preco: 16.9 },
  { nome: "Queijo Quente Meia Cura", preco: 19.9 },
  { nome: "Queijo Quente Frescal", preco: 19.9 },
];

const levesBase: Item[] = [
  { nome: "Ovo Mexido", preco: 9.9 },
  { nome: "Omelete Simples", preco: 17.9 },
  { nome: "Omelete Bella Citta", preco: 22.9 },
  { nome: "Omelete Completa", preco: 28.9 },
  { nome: "Tapioca ou Crepioca na Manteiga", preco: 10.9 },
  { nome: "Tapioca ou Crepioca Presunto e Mussarela", preco: 19.9 },
  { nome: "Tapioca ou Crepioca Frango com Requeijão", preco: 19.9 },
  { nome: "Tapioca ou Crepioca Peito de Peru com Frescal", preco: 23.9 },
  { nome: "Tapioca ou Crepioca Nutella com Morango", preco: 19.9 },
  { nome: "Crepe Bella Pizza", preco: 24.9 },
  { nome: "Crepe Bella Bolonhesa", preco: 25.9 },
  { nome: "Crepe Bella Chicken", preco: 25.9 },
];

const burgers: Item[] = [
  { nome: "X Burguer", preco: 20.9 },
  { nome: "X Burguer Salada", preco: 22.9 },
  { nome: "X Burguer Salada Bacon Egg", preco: 27.9 },
  { nome: "X Burguer Tudo", preco: 31.9 },
  { nome: "X Frango", preco: 22.9 },
  { nome: "X Frango Salada", preco: 24.9 },
  { nome: "X Frango Salada Bacon Egg", preco: 29.9 },
  { nome: "X Frango Tudo", preco: 33.9 },
];

const filePasteis: Item[] = [
  { nome: "X Filé", preco: 26.9 },
  { nome: "X Filé Salada", preco: 27.9 },
  { nome: "X Filé Salada Bacon Egg", preco: 32.9 },
  { nome: "Bella Filé Acebolado", preco: 32.9 },
  { nome: "X Filé Tudo", preco: 35.9 },
  { nome: "Pastel de Carne", preco: 13.9 },
  { nome: "Pastel de Pizza", preco: 13.9 },
  { nome: "Pastel de Queijo", preco: 13.9 },
  { nome: "Pastel Carne com Queijo", preco: 15.9 },
  { nome: "Pastel Frango com Requeijão", preco: 15.9 },
];

const executivosCompleto: Item[] = [
  { nome: "Frango Light", preco: 26.9 },
  { nome: "Strogonoff de Frango", preco: 25.9 },
  { nome: "Strogonoff de Carne", preco: 27.9 },
  { nome: "Filé de Frango à Milanesa", preco: 28.9 },
  { nome: "Filé Bovino à Milanesa", preco: 28.9 },
  { nome: "Panqueca de Carne", preco: 28.9 },
  { nome: "Filé de Frango à Parmegiana", preco: 32.9 },
  { nome: "Filé Bovino à Parmegiana", preco: 34.9 },
  { nome: "Penne com Brócolis", preco: 25.9 },
  { nome: "Caesar Salad", preco: 26.9 },
  { nome: "Filé de Frango Acebolado", preco: 28.9 },
  { nome: "Filé Bovino Acebolado", preco: 32.9 },
  { nome: "Peixe Light", preco: 32.9 },
  { nome: "Filé de Peixe à Parmegiana", preco: 36.9 },
  { nome: "Filé de Peixe à Dorê", preco: 32.9 },
  { nome: "Bife à Cavalo", preco: 34.9 },
  { nome: "Ovo Frito", preco: 23.99 },
  { nome: "Kids Bovino", preco: 25.9 },
  { nome: "Kids Frango", preco: 24.9 },
  { nome: "Kids Macarrão ao Sugo", preco: 19.9 },
];

export const MENU_GUAPORE: Menu = {
  "Cafés Especiais": cafes,
  "Momento Fit": fit,
  Refrescante: [
    ...refrescanteBase,
    { nome: "Milk Shake Chocolate", preco: 18.9 },
    { nome: "Tigela de Açaí Bella Citta", preco: 26.9 },
  ],
  "Lanches Matinais": [
    ...matinaisBase,
    { nome: "Pão com Mortadela Ceratti e Mussarela", preco: 22.9 },
    ...matinaisFim,
  ],
  "Lanches Leves": [
    ...levesBase,
    { nome: "Crepe Bella Broccoli", preco: 26.9 },
    { nome: "Crepe Nutella com Morango", preco: 21.9 },
  ],
  "Hambúrgueres e Frango": burgers,
  "Filé Bovino e Pastéis": filePasteis,
  "Pratos Executivos": executivosCompleto,
};

export const MENU_PORTUGAL: Menu = {
  "Cafés Especiais": cafes,
  "Momento Fit": fit,
  Refrescante: [
    ...refrescanteBase,
    { nome: "Milk Shake de Chocolate", preco: 18.9 },
    { nome: "Tigela de Açaí Bella Citta", preco: 26.9 },
  ],
  "Lanches Matinais": [
    ...matinaisBase,
    { nome: "Pão com Mortadela Ceratti e Mussarela", preco: 22.9 },
    ...matinaisFim,
  ],
  "Lanches Leves": [
    ...levesBase,
    { nome: "Crepe Bella Broccoli", preco: 26.9 },
    { nome: "Crepe Nutella com Morango", preco: 21.9 },
  ],
  "Hambúrgueres e Frango": burgers,
  "Filé Bovino e Pastéis": filePasteis,
  "Pratos Executivos": executivosCompleto,
};

export const MENU_SEIXAS: Menu = {
  "Cafés Especiais": cafes,
  "Momento Fit": fit,
  Refrescante: [...refrescanteBase, { nome: "Tigela de Açaí Bella Citta", preco: 26.9 }],
  "Lanches Matinais": [...matinaisBase, ...matinaisFim],
  "Lanches Leves": [...levesBase, { nome: "Crepe Nutella com Morango", preco: 21.9 }],
  "Hambúrgueres e Frango": burgers,
  "Filé Bovino e Pastéis": filePasteis,
  "Pratos Executivos": [
    { nome: "Ovo Frito", preco: 23.99 },
    { nome: "Strogonoff de Frango", preco: 25.9 },
    { nome: "Strogonoff de Carne", preco: 27.9 },
    { nome: "Frango Light", preco: 26.9 },
    { nome: "Filé de Frango à Milanesa", preco: 28.9 },
    { nome: "Filé Bovino à Milanesa", preco: 28.9 },
    { nome: "Filé Bovino à Parmegiana", preco: 34.9 },
    { nome: "Filé de Frango à Parmegiana", preco: 32.9 },
    { nome: "Caesar Salad", preco: 26.9 },
    { nome: "Filé de Frango Acebolado", preco: 28.9 },
    { nome: "Filé Bovino Acebolado", preco: 32.9 },
    { nome: "Bife à Cavalo", preco: 34.9 },
  ],
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
    { nome: "Wrap Salame, queijo prato e requeijão", preco: 4.8 },
    { nome: "Wrap Peito de peru, mussarela e requeijão", preco: 4.8 },
    { nome: "Wrap Presunto, mussarela e requeijão", preco: 4.5 },
    { nome: "Wrap Tomate seco e mussarela de búfala", preco: 4.8 },
  ],
  "Tábuas de Frios": [
    { nome: "Tábua Pequena", preco: 149.0, obs: "1 kg, até 10 pessoas" },
    { nome: "Tábua Média", preco: 179.0, obs: "1,4 kg, até 20 pessoas" },
    { nome: "Tábua Grande", preco: 205.0, obs: "1,8 kg, até 30 pessoas" },
  ],
  "Baguetes de 1 Metro": [
    { nome: "Baguete Presunto e mussarela", preco: 109.0 },
    { nome: "Baguete Peito de peru e mussarela", preco: 118.0 },
    { nome: "Baguete Salame italiano e queijo prato", preco: 119.0 },
    { nome: "Baguete Salame hamburguês e queijo prato", preco: 119.0 },
    { nome: "Baguete Lombo canadense e provolone", preco: 113.0 },
    { nome: "Baguete Salpicão de frango", preco: 113.0 },
    { nome: "Baguete Mussarela de búfala", preco: 119.0 },
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
