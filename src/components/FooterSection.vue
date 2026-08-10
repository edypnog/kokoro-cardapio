<script setup>
import { waLink } from '../utils'
const year = new Date().getFullYear()
const nav = [
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#especiais', label: 'Omakase & Rodízio' },
  { href: '#sobre', label: 'Horários e endereço' },
]
</script>

<template>
  <footer class="relative overflow-hidden border-t border-paper/10">
    <span aria-hidden="true" class="pointer-events-none absolute -bottom-20 -right-6 font-display text-[280px] leading-none text-paper/[0.03] select-none">心</span>

    <div class="container-x relative grid gap-10 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
      <div>
        <a href="#" class="flex items-center gap-3">
          <span class="grid size-10 rotate-[-4deg] place-items-center bg-vermillion font-display text-xl text-paper">心</span>
          <span class="font-display text-2xl font-bold tracking-wide">KOKORO</span>
        </a>
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-paper/55">
          Cozinha japonesa contemporânea no coração da Liberdade, desde 1998.
        </p>
        <div class="mt-6 flex gap-3">
          <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"
             class="grid size-10 place-items-center border border-paper/15 transition hover:border-vermillion hover:text-vermillion">
            <svg class="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a :href="waLink('Olá, Kokoro!')" target="_blank" rel="noopener" aria-label="WhatsApp"
             class="grid size-10 place-items-center border border-paper/15 transition hover:border-vermillion hover:text-vermillion">
            <svg class="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 21a9 9 0 1 0-8-4.9L3 21l5-1.2A9 9 0 0 0 12 21Z"/></svg>
          </a>
        </div>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Navegação</p>
        <ul class="mt-5 space-y-3 text-sm">
          <li v-for="n in nav" :key="n.href">
            <a :href="n.href" class="text-paper/65 transition hover:text-vermillion">{{ n.label }}</a>
          </li>
        </ul>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Horários</p>
        <ul class="mt-5 space-y-3 text-sm text-paper/65">
          <li>Ter – Qui · 18:30 às 23:30</li>
          <li>Sex – Sáb · até 00:00</li>
          <li>Dom · 12:00 às 22:30</li>
          <li class="text-paper/40">Segunda · fechado</li>
        </ul>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contato</p>
        <ul class="mt-5 space-y-3 text-sm text-paper/65">
          <li>Rua Galvão Bueno, 123<br />Liberdade · São Paulo</li>
          <li>(11) 3274-0000</li>
          <li class="font-display text-lg text-paper/40">心を込めて</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-paper/10">
      <div class="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-paper/40 sm:flex-row">
        <p>© {{ year }} Kokoro Cozinha Japonesa. Todos os direitos reservados.</p>
        <p>Feito com <span class="text-vermillion">♥</span> e por <a href="https://github.com/edypnog" target="_blank" rel="noopener" class="text-vermillion hover:underline">Daileen</a> 🍚</p>
      </div>
    </div>
  </footer>
</template>