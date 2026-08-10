<script setup>
import { waLink } from '../utils'

const specials = [
  {
    name: 'Omakase Ki', kanji: '気', tag: '12 tempos', price: 'R$ 149', featured: false,
    desc: 'Seleção do chef com os peixes mais frescos do dia, servidos um a um no balcão.',
    items: ['Boas-vindas da estação', '8 niguiris selecionados', '1 temaki da casa', 'Sobremesa do dia'],
  },
  {
    name: 'Omakase Zen', kanji: '禅', tag: '16 tempos', price: 'R$ 199', featured: true,
    desc: 'Nossa experiência mais completa: cortes nobres, uni, toro e harmonização com saquê.',
    items: ['16 tempos no balcão', 'Toro, uni e peixes nobres', 'Dose de saquê junmai', 'Chá + sobremesa especial'],
  },
  {
    name: 'Rodízio Kokoro', kanji: '心', tag: 'à vontade', price: 'R$ 119', featured: false,
    desc: 'O clássico da casa: mais de 40 itens à vontade, de sushis a pratos quentes.',
    items: ['+40 itens à vontade', 'Sushis, sashimis e hots', 'Entradas e teppan', 'Yakisoba incluso'],
  },
]
const stats = [
  { v: '26', l: 'anos de tradição' },
  { v: '4.9★', l: '1.2k avaliações' },
  { v: '350+', l: 'peças por dia' },
]
</script>

<template>
  <section id="especiais" class="relative scroll-mt-20 overflow-hidden bg-ink-900/60">
    <span aria-hidden="true" class="pointer-events-none absolute -right-10 top-10 font-display text-[12rem] leading-none text-paper/[0.035] select-none">鮨</span>
    <div class="bg-noise pointer-events-none absolute inset-0 opacity-[0.04]"></div>

    <div class="container-x relative grid gap-14 py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:py-28">
      <!-- Coluna fixa -->
      <div class="reveal lg:sticky lg:top-28 lg:self-start" v-reveal>
        <div class="flex items-center gap-4">
          <span class="grid size-8 place-items-center bg-vermillion font-display text-sm text-paper">任</span>
          <span class="text-xs font-semibold uppercase tracking-[0.35em] text-gold">御任せ · Experiências</span>
        </div>
        <h2 class="mt-5 font-display text-4xl font-bold leading-tight lg:text-5xl">
          A experiência<br />do balcão
        </h2>
        <p class="mt-5 max-w-md leading-relaxed text-paper/65">
          Confie no chef: menus degustação montados com o que chegou de melhor no
          mercado naquela manhã. Apenas 10 lugares por noite — reserve com antecedência.
        </p>

        <div class="mt-8 grid grid-cols-3 gap-4 border-y border-paper/10 py-6">
          <div v-for="s in stats" :key="s.l">
            <p class="font-display text-3xl font-bold text-gold">{{ s.v }}</p>
            <p class="mt-1 text-xs uppercase tracking-wider text-paper/50">{{ s.l }}</p>
          </div>
        </div>

        <a
          :href="waLink('Olá! Gostaria de reservar uma experiência no balcão. 🍣')" target="_blank" rel="noopener"
          class="mt-8 inline-block border border-vermillion px-7 py-3.5 font-semibold text-vermillion transition hover:bg-vermillion hover:text-paper"
        >
          Reservar pelo WhatsApp
        </a>
        <p class="mt-3 text-xs text-paper/40">Ter–Dom · sessões às 18h30 e 21h</p>
      </div>

      <!-- Cards -->
      <div class="space-y-6">
        <article
          v-for="(s, i) in specials" :key="s.name"
          class="reveal group relative border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
          :class="s.featured ? 'border-vermillion/70 bg-gradient-to-b from-vermillion/10 to-transparent' : 'border-paper/10 bg-ink-900'"
          :style="{ transitionDelay: `${i * 90}ms` }"
          v-reveal
        >
          <span v-if="s.featured" class="absolute -top-3 right-6 bg-vermillion px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-paper">
            Mais pedido
          </span>

          <div class="flex items-start gap-5">
            <span class="grid size-14 shrink-0 place-items-center border border-paper/15 font-display text-2xl text-gold">
              {{ s.kanji }}
            </span>
            <div>
              <div class="flex flex-wrap items-center gap-3">
                <h3 class="font-display text-2xl font-bold">{{ s.name }}</h3>
                <span class="border border-gold/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-gold">{{ s.tag }}</span>
              </div>
              <p class="mt-2 text-sm leading-relaxed text-paper/60">{{ s.desc }}</p>
            </div>
          </div>

          <ul class="mt-5 grid gap-2 border-t border-paper/10 pt-5 sm:grid-cols-2">
            <li v-for="it in s.items" :key="it" class="flex items-center gap-2.5 text-sm text-paper/75">
              <span class="size-1.5 shrink-0 rotate-45 bg-vermillion"></span>{{ it }}
            </li>
          </ul>

          <div class="mt-6 flex items-center justify-between">
            <p class="font-display">
              <span class="text-3xl font-bold text-gold">{{ s.price }}</span>
              <span class="ml-2 text-xs uppercase tracking-wider text-paper/45">por pessoa</span>
            </p>
            <a
              :href="waLink(`Olá! Gostaria de reservar: ${s.name}.`)" target="_blank" rel="noopener"
              class="border border-paper/25 px-5 py-2.5 text-sm font-semibold transition group-hover:border-vermillion group-hover:text-vermillion"
            >Reservar →</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>