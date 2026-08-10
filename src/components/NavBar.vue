<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useStore } from '../composables/useStore'

const { count, drawerOpen } = useStore()
const scrolled = ref(false)

const onScroll = () => (scrolled.value = window.scrollY > 24)
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const links = [
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#especiais', label: 'Omakase & Rodízio' },
  { href: '#sobre', label: 'Visite-nos' },
]
</script>

<template>
  <header
    class="fixed inset-x-0 top-[3px] z-50 transition-all duration-300"
    :class="scrolled ? 'border-b border-paper/10 bg-ink-950/90 backdrop-blur-md' : 'bg-transparent'"
  >
    <div class="container-x flex h-16 items-center justify-between">
      <a href="#" class="group flex items-center gap-3">
        <span class="grid size-9 rotate-[-4deg] place-items-center bg-vermillion font-display text-lg text-paper shadow-md shadow-vermillion/40 transition group-hover:rotate-[4deg]">心</span>
        <span class="leading-tight">
          <span class="block font-display text-lg font-bold tracking-wide">KOKORO</span>
          <span class="block text-[10px] uppercase tracking-[0.35em] text-paper/50">cozinha japonesa</span>
        </span>
      </a>

      <nav class="hidden items-center gap-8 text-sm md:flex">
        <a
          v-for="l in links" :key="l.href" :href="l.href"
          class="group relative tracking-wide text-paper/70 transition hover:text-paper"
        >
          {{ l.label }}
          <span class="absolute -bottom-1 left-0 h-px w-0 bg-vermillion transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>

      <button
        @click="drawerOpen = true"
        class="relative flex items-center gap-2.5 border border-paper/20 px-4 py-2 text-sm font-semibold transition hover:border-vermillion hover:text-vermillion"
        aria-label="Abrir pedido"
      >
        <svg class="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l1 13H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>
        <span class="hidden sm:inline">Pedido</span>
        <TransitionGroup name="toast">
          <span
            v-if="count > 0" :key="count"
            class="animate-pop absolute -right-2 -top-2 grid size-5 place-items-center rounded-full bg-vermillion text-[10px] font-extrabold"
          >{{ count }}</span>
        </TransitionGroup>
      </button>
    </div>
  </header>
</template>