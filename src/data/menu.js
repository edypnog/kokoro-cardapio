export const CATEGORIES = [
  { id: 'entradas',   label: 'Entradas',      kanji: '前' },
  { id: 'combinados', label: 'Combinados',    kanji: '盛' },
  { id: 'sashimi',    label: 'Sashimis',      kanji: '刺' },
  { id: 'temaki',     label: 'Temakis',       kanji: '手' },
  { id: 'hot',        label: 'Hot Rolls',     kanji: '揚' },
  { id: 'quentes',    label: 'Pratos Quentes', kanji: '麺' },
  { id: 'sobremesas', label: 'Sobremesas',    kanji: '甘' },
  { id: 'bebidas',    label: 'Bebidas',       kanji: '飲' },
]

const u = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`

export const ITEMS = [
  // ── Entradas ──────────────────────────────────────────────
  { id: 'gyoza', name: 'Gyoza', jp: 'ギョーザ', kanji: '餃', cat: 'entradas', price: 28.9, img: u('photo-1625398407796-82650a8c135f'), tags: ['popular'],
    desc: 'Seis dumplings de porco selados na chapa, crostinha dourada e molho ponzu.' },
  { id: 'edamame', name: 'Edamame', jp: '枝豆', kanji: '枝', cat: 'entradas', price: 19.9, img: null, tags: ['veg'],
    desc: 'Vagens de soja no vapor com flor de sal e toque de pimenta sichuan.' },
  { id: 'karaage', name: 'Karaage', jp: '唐揚げ', kanji: '鶏', cat: 'entradas', price: 32.9, img: u('photo-1606755962773-d324e0a13086'), tags: [],
    desc: 'Frango frito marinado em shoyu e gengibre, maionese de yuzu.' },
  { id: 'tempura', name: 'Tempurá Moriawase', jp: '天ぷら盛り合わせ', kanji: '天', cat: 'entradas', price: 42.9, img: u('photo-1607301405390-d831c242f598'), tags: ['chef'],
    desc: 'Camarão e legumes em massa leve e crocante, tentsuyu de dashi.' },
  { id: 'sunomono', name: 'Sunomono', jp: '酢の物', kanji: '酢', cat: 'entradas', price: 16.9, img: null, tags: ['veg'],
    desc: 'Pepino agridoce fatiado fino, wakame e gergelim torrado.' },
  { id: 'misso', name: 'Missoshiro', jp: '味噌汁', kanji: '噌', cat: 'entradas', price: 12.9, img: u('photo-1547592180-85f173990554'), tags: ['veg'],
    desc: 'Caldo de missô com tofu sedoso, wakame e cebolinha.' },

  // ── Combinados ────────────────────────────────────────────
  { id: 'comb-kokoro', name: 'Combinado Kokoro', jp: '心盛り合わせ', kanji: '盛', cat: 'combinados', price: 98.9, img: u('photo-1579584425555-c3ce17fd4351'), tags: ['popular', 'chef'],
    desc: '30 peças: salmão, atum, peixe branco, skin e uramakis especiais.' },
  { id: 'comb-salmao', name: 'Combinado Salmão', jp: '鮭盛り合わせ', kanji: '鮭', cat: 'combinados', price: 76.9, img: u('photo-1553621042-f6e147245754'), tags: ['popular'],
    desc: '20 peças 100% salmão: niguiris, uramakis e hossomakis.' },
  { id: 'niguiri', name: 'Niguiri Misto', jp: '握り寿司', kanji: '握', cat: 'combinados', price: 49.9, img: u('photo-1583623025817-d180a2221d0a'), tags: [],
    desc: '10 niguiris prensados à mão: salmão, atum e peixe branco.' },
  { id: 'uramaki', name: 'Uramaki Ebi Crispy', jp: '裏巻き', kanji: '巻', cat: 'combinados', price: 38.9, img: u('photo-1617196034796-73dfa7b1fd56'), tags: [],
    desc: '8 unidades com camarão empanado, cream cheese e molho tarê.' },

  // ── Sashimis ──────────────────────────────────────────────
  { id: 'sashi-salmao', name: 'Sashimi de Salmão', jp: '刺身', kanji: '刺', cat: 'sashimi', price: 54.9, img: u('photo-1611143669185-af224c5e3252'), tags: ['popular'],
    desc: '15 fatias espessas de salmão fresco, corte usuzukuri.' },
  { id: 'sashi-atum', name: 'Sashimi de Atum', jp: '鮪刺身', kanji: '鮪', cat: 'sashimi', price: 58.9, img: u('photo-1615361200141-f45041f367be'), tags: ['chef'],
    desc: '12 fatias de atum: akami e chu-toro selecionados.' },
  { id: 'tiradito', name: 'Tiradito de Peixe Branco', jp: '白身', kanji: '鯛', cat: 'sashimi', price: 46.9, img: u('photo-1546069901-ba9599a7e63c'), tags: ['spicy'],
    desc: 'Peixe branco em lâminas, leite de tigre oriental e dedo-de-moça.' },

  // ── Temakis ───────────────────────────────────────────────
  { id: 'temaki-salmao', name: 'Temaki Salmão Completo', jp: '手巻き', kanji: '手', cat: 'temaki', price: 32.9, img: u('photo-1626803775151-61d756612f97'), tags: ['popular'],
    desc: 'Cone de nori crocante, shari e salmão em cubos ou batido.' },
  { id: 'temaki-skin', name: 'Temaki Skin Crocante', jp: 'スキン巻き', kanji: '皮', cat: 'temaki', price: 29.9, img: null, tags: [],
    desc: 'Pele de salmão crocante, cream cheese e cebolinha.' },
  { id: 'temaki-ebi', name: 'Temaki Ebi Fry', jp: '海老天', kanji: '海', cat: 'temaki', price: 36.9, img: u('photo-1562802378-063ec186a863'), tags: [],
    desc: 'Camarão empanado inteiro, maionese picante e tarê.' },

  // ── Hot Rolls ─────────────────────────────────────────────
  { id: 'hot-salmao', name: 'Hot Roll Salmão', jp: 'ホットロール', kanji: '揚', cat: 'hot', price: 31.9, img: u('photo-1580822184713-fc5400e7fe10'), tags: ['popular'],
    desc: '8 unidades empanadas, recheio cremoso e crocância perfeita.' },
  { id: 'hot-fila', name: 'Hot Filadélfia', jp: 'フィラデルフィア', kanji: '絡', cat: 'hot', price: 33.9, img: u('photo-1553621043-f48021901f2b'), tags: [],
    desc: 'Salmão e cream cheese, arroz crocante e tarê de gergelim.' },
  { id: 'hot-vulcao', name: 'Hot Vulcão', jp: '火山巻き', kanji: '火', cat: 'hot', price: 37.9, img: u('photo-1579871494447-9811cf80d66c'), tags: ['spicy'],
    desc: 'Enrolado crocante coberto com tartar de salmão picante.' },

  // ── Pratos Quentes ────────────────────────────────────────
  { id: 'ramen', name: 'Tonkotsu Ramen', jp: 'ラーメン', kanji: '麺', cat: 'quentes', price: 52.9, img: u('photo-1569718212165-3a8278d5f624'), tags: ['chef', 'popular'],
    desc: 'Caldo de porco cozido por 18h, chashu, ajitama, nori e cebolinha.' },
  { id: 'yakisoba', name: 'Yakisoba do Mar', jp: '焼きそば', kanji: '焼', cat: 'quentes', price: 46.9, img: u('photo-1585032226651-759b368d7246'), tags: [],
    desc: 'Noodles na chapa com camarão, lula e legumes ao molho da casa.' },
  { id: 'teppan', name: 'Teppan de Salmão', jp: '鉄板焼き', kanji: '鉄', cat: 'quentes', price: 62.9, img: u('photo-1512058564366-18510be2db19'), tags: [],
    desc: 'Salmão grelhado na chapa, arroz gohan, legumes e molho tarê.' },
  { id: 'gyudon', name: 'Gyudon', jp: '牛丼', kanji: '丼', cat: 'quentes', price: 44.9, img: u('photo-1544025162-d76694265947'), tags: [],
    desc: 'Bowl de arroz com lâminas de carne aceboladas e ovo perfeito.' },

  // ── Sobremesas ────────────────────────────────────────────
  { id: 'mochi', name: 'Mochi Trio', jp: '餅', kanji: '餅', cat: 'sobremesas', price: 21.9, img: null, tags: ['veg'],
    desc: 'Trio de mochis: matchá, morango e gergelim preto.' },
  { id: 'matcha-cake', name: 'Cheesecake de Matchá', jp: '抹茶', kanji: '抹', cat: 'sobremesas', price: 24.9, img: u('photo-1563805042-7684c019e1cb'), tags: ['veg', 'chef'],
    desc: 'Base de biscoito, creme de matchá e calda de frutas vermelhas.' },
  { id: 'dorayaki', name: 'Dorayaki', jp: 'どら焼き', kanji: '餡', cat: 'sobremesas', price: 19.9, img: null, tags: ['veg'],
    desc: 'Panquecas japonesas fofinhas recheadas com doce de feijão azuki.' },

  // ── Bebidas ───────────────────────────────────────────────
  { id: 'cha', name: 'Chá Verde da Casa', jp: '緑茶', kanji: '茶', cat: 'bebidas', price: 9.9, img: null, tags: ['veg'],
    desc: 'Blend da casa gelado, sem açúcar. Jarra de 400 ml.' },
  { id: 'ramune', name: 'Ramune Melão', jp: 'ラムネ', kanji: '炭', cat: 'bebidas', price: 14.9, img: u('photo-1556679343-c7306c1976bc'), tags: [],
    desc: 'Refrigerante japonês de melão na garrafa com bolinha.' },
  { id: 'saque', name: 'Saquê Junmai (dose)', jp: '日本酒', kanji: '酒', cat: 'bebidas', price: 22.9, img: u('photo-1536935338788-846bb9981813'), tags: [],
    desc: 'Dose de 60 ml. Rótulos rotativos selecionados pela casa.' },
  { id: 'kirin', name: 'Kirin Ichiban', jp: '麒麟', kanji: '麦', cat: 'bebidas', price: 18.9, img: u('photo-1608270586620-248524c67de9'), tags: [],
    desc: 'Long neck japonesa puro malte, servida gelada.' },
]