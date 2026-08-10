

<script setup>
import Marquee from './Marquee.vue'

const words = ['寿司 SUSHI', '刺身 SASHIMI', '手巻 TEMAKI', 'ホット HOT ROLL', 'ラーメン RAMEN', '天ぷら TEMPURÁ', '抹茶 MATCHÁ', '酒 SAQUÊ']

const meta = ['★ 4.9 · 1.2k avaliações', 'Aberto hoje · 18:30 – 23:30', 'Entrega 40–55 min']
const heroImg = 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=900&q=70'
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- fundo: brilho + grade de pontos + kanji gigante -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div class="absolute -left-32 -top-32 size-[420px] rounded-full bg-vermillion/15 blur-[120px]"></div>
      <div class="absolute right-0 top-1/3 size-[360px] rounded-full bg-gold/10 blur-[100px]"></div>
      <div class="absolute inset-0 bg-dots text-paper/[0.05]"></div>
      <span class="text-vertical absolute right-4 top-24 font-display text-7xl text-paper/[0.05] select-none md:right-12 md:text-[11rem]">鮨</span>
    </div>

    <div class="container-x relative grid items-center gap-14 pb-10 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-16 lg:pt-36">
      <!-- Coluna de texto -->
      <div>
        <div class="animate-slide-up flex items-center gap-3">
          <span class="grid size-8 place-items-center bg-vermillion font-display text-sm text-paper">心</span>
          <span class="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Liberdade · São Paulo</span>
          <span class="h-px w-12 bg-gold/40"></span>
          <span class="text-xs uppercase tracking-[0.3em] text-paper/50">desde 1998</span>
        </div>

        <h1 class="mt-6 font-display font-bold leading-[0.95]">
          <span class="block text-[clamp(3.5rem,10vw,7.5rem)] tracking-tight">KOKORO</span>
          <span class="mt-2 block text-[clamp(1.1rem,2.5vw,1.6rem)] font-medium text-gold">
            こころ <span class="text-paper/60">— o coração da cozinha japonesa</span>
          </span>
        </h1>

        <p class="mt-6 max-w-xl leading-relaxed text-paper/70">
          Peixes selecionados no mercado às 5h, arroz temperado no ponto exato e o
          cuidado de quem serve família. Peça online e receba como se fosse no balcão.
        </p>

        <div class="mt-7 flex flex-wrap gap-2.5">
          <span
            v-for="m in meta" :key="m"
            class="border border-paper/15 bg-ink-900/70 px-3.5 py-1.5 text-xs tracking-wide text-paper/80"
          >
            <span class="mr-1.5 inline-block size-1.5 rounded-full bg-vermillion align-middle"></span>{{ m }}
          </span>
        </div>

        <div class="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#cardapio"
            class="group bg-vermillion px-7 py-3.5 font-semibold tracking-wide text-paper shadow-lg shadow-vermillion/25 transition hover:bg-vermillion-deep"
          >
            Explorar cardápio
            <span class="ml-2 inline-block transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
          <a
            href="#especiais"
            class="border border-paper/25 px-7 py-3.5 font-semibold tracking-wide text-paper/90 transition hover:border-gold hover:text-gold"
          >
            Omakase &amp; rodízio
          </a>
        </div>
      </div>

      <!-- Coluna visual: anel giratório + carimbo -->
      <div class="relative mx-auto flex w-fit items-center gap-8 lg:justify-self-end">
        <p class="text-vertical hidden font-display text-sm tracking-[0.5em] text-paper/40 sm:block">
          心を込めて、一貫ずつ。
        </p>

        <div class="relative size-[270px] sm:size-[330px]">
          <!-- texto circular giratório -->
          <svg viewBox="0 0 200 200" class="animate-spin-slower absolute inset-0 h-full w-full">
            <defs>
              <path id="ring" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
            </defs>
            <text class="fill-paper/45" style="font-size: 8.2px; letter-spacing: 2.6px">
              <textPath href="#ring">KOKORO • SUSHI • SASHIMI • TEMAKI • HOT ROLL • RAMEN • OMakase •</textPath>
            </text>
          </svg>

          <!-- imagem central -->
          <div class="absolute inset-7 overflow-hidden rounded-full border border-paper/15 shadow-2xl shadow-black/60">
            <img :src="heroImg" alt="Seleção de niguiris do chef" class="h-full w-full object-cover" />
          </div>

          <!-- carimbo flutuante -->
          <span class="animate-float absolute -right-2 top-6 grid size-16 rotate-6 place-items-center bg-vermillion font-display text-2xl text-paper shadow-lg shadow-vermillion/40">極</span>
        </div>
      </div>
    </div>

    <Marquee :items="words" class="relative border-y border-paper/10 py-3.5" />
  </section>
</template>