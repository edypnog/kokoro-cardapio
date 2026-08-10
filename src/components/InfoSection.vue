<script setup>
import { waLink } from '../utils'

const hours = [
  { d: 'Segunda', h: 'Fechado', js: 1 },
  { d: 'Terça', h: '18:30 – 23:30', js: 2 },
  { d: 'Quarta', h: '18:30 – 23:30', js: 3 },
  { d: 'Quinta', h: '18:30 – 23:30', js: 4 },
  { d: 'Sexta', h: '18:30 – 00:00', js: 5 },
  { d: 'Sábado', h: '12:00 – 00:00', js: 6 },
  { d: 'Domingo', h: '12:00 – 22:30', js: 0 },
]
const today = new Date().getDay()
const mapsUrl = 'https://maps.google.com/?q=Rua+Galvao+Bueno+123+Liberdade+Sao+Paulo'

const delivery = ['Entrega própria · 40–55 min', 'Retirada no balcão sem taxa', 'Frete grátis acima de R$ 150']
const payment = ['Pix', 'Crédito', 'Débito', 'VR / VA']
</script>

<template>
  <section id="sobre" class="relative scroll-mt-20">
    <div class="container-x py-20 lg:py-28">
      <div class="reveal flex items-center gap-4" v-reveal>
        <span class="grid size-8 place-items-center bg-vermillion font-display text-sm text-paper">案</span>
        <span class="text-xs font-semibold uppercase tracking-[0.35em] text-gold">ごあんない · Visite-nos</span>
        <span class="h-px flex-1 bg-paper/10"></span>
      </div>

      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <!-- Horários -->
        <div class="reveal border border-paper/10 bg-ink-900 p-7" v-reveal>
          <h3 class="flex items-center gap-3 font-display text-xl font-bold">
            <svg class="size-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            Horários
          </h3>
          <ul class="mt-5 space-y-2.5">
            <li
              v-for="h in hours" :key="h.d"
              class="flex items-center justify-between text-sm"
              :class="h.js === today ? 'font-bold text-gold' : 'text-paper/65'"
            >
              <span class="flex items-center gap-2">
                <span v-if="h.js === today" class="size-1.5 animate-pulse rounded-full bg-vermillion"></span>
                {{ h.d }}
                <span v-if="h.js === today" class="text-[10px] uppercase tracking-wider text-vermillion">hoje</span>
              </span>
              <span>{{ h.h }}</span>
            </li>
          </ul>
        </div>

        <!-- Endereço e contato -->
        <div class="reveal space-y-6" :style="{ transitionDelay: '90ms' }" v-reveal>
          <div class="border border-paper/10 bg-ink-900 p-7">
            <h3 class="flex items-center gap-3 font-display text-xl font-bold">
              <svg class="size-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Onde estamos
            </h3>
            <p class="mt-4 text-sm leading-relaxed text-paper/70">
              Rua Galvão Bueno, 123 — Liberdade<br />São Paulo · SP
            </p>
            <a :href="mapsUrl" target="_blank" rel="noopener" class="mt-3 inline-block text-sm font-semibold text-vermillion transition hover:text-vermillion-deep">
              Como chegar →
            </a>
          </div>
          <div class="border border-paper/10 bg-ink-900 p-7">
            <h3 class="flex items-center gap-3 font-display text-xl font-bold">
              <svg class="size-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>
              Contato
            </h3>
            <p class="mt-4 text-sm text-paper/70">(11) 3274-0000</p>
            <a :href="waLink('Olá, Kokoro! Tenho uma dúvida.')" target="_blank" rel="noopener" class="mt-2 inline-block text-sm font-semibold text-matcha transition hover:brightness-110">
              WhatsApp direto →
            </a>
          </div>
        </div>

        <!-- Entrega e pagamento -->
        <div class="reveal border border-paper/10 bg-ink-900 p-7" :style="{ transitionDelay: '180ms' }" v-reveal>
          <h3 class="flex items-center gap-3 font-display text-xl font-bold">
            <svg class="size-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><path d="M4 17.5V6h9v11.5M13 9h4l3 4v4.5"/></svg>
            Entrega &amp; pagamento
          </h3>
          <ul class="mt-5 space-y-3">
            <li v-for="d in delivery" :key="d" class="flex items-center gap-2.5 text-sm text-paper/75">
              <span class="size-1.5 shrink-0 rotate-45 bg-gold"></span>{{ d }}
            </li>
          </ul>
          <div class="mt-6 border-t border-paper/10 pt-5">
            <p class="text-xs uppercase tracking-[0.25em] text-paper/40">Aceitamos</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="p in payment" :key="p" class="border border-paper/15 px-3 py-1.5 text-xs text-paper/75">{{ p }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>