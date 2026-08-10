export const fmt = (v) =>
  Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

/* 👉 Troque pelo número real do restaurante (código do país + DDD + número) */
export const WA_PHONE = '5511998765432'
export const waLink = (msg) =>
  `https://wa.me/${WA_PHONE}${msg ? `?text=${encodeURIComponent(msg)}` : ''}`

export const TAGS = {
  chef:    { label: 'Chef',        cls: 'bg-vermillion text-paper' },
  popular: { label: 'Mais pedido', cls: 'bg-gold text-ink-950' },
  spicy:   { label: 'Picante',     cls: 'bg-[#D97B29] text-ink-950' },
  veg:     { label: 'Vegetariano', cls: 'bg-matcha text-ink-950' },
}