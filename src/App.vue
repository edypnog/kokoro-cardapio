<script setup>
import { useStore } from './composables/useStore'
import { fmt } from './utils'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import MenuSection from './components/MenuSection.vue'
import ChefSpecial from './components/ChefSpecial.vue'
import InfoSection from './components/InfoSection.vue'
import FooterSection from './components/FooterSection.vue'
import CartDrawer from './components/CartDrawer.vue'
import DetailModal from './components/DetailModal.vue'

const { toast, count, total, drawerOpen } = useStore()
</script>

<template>
  <div class="relative overflow-x-clip">
    <!-- linha noren no topo -->
    <div class="fixed inset-x-0 top-0 z-[55] h-[3px] bg-gradient-to-r from-vermillion via-vermillion to-gold"></div>

    <NavBar />

    <main>
      <Hero />
      <MenuSection />
      <ChefSpecial />
      <InfoSection />
    </main>

    <FooterSection />
    <CartDrawer />
    <DetailModal />

    <!-- Toast de confirmação -->
    <Transition name="toast">
      <div
        v-if="toast"
        class="fixed bottom-6 left-0 right-0 z-[80] mx-auto w-fit max-w-[90vw]"
      >
        <div class="flex items-center gap-3 border border-paper/15 bg-ink-800 px-5 py-3 text-sm shadow-2xl shadow-black/50">
          <span class="grid size-6 place-items-center rounded-full bg-vermillion text-xs font-bold">✓</span>
          {{ toast }}
        </div>
      </div>
    </Transition>

    <!-- Barra fixa mobile do carrinho -->
    <div v-if="count > 0 && !drawerOpen" class="fixed inset-x-4 bottom-4 z-40 lg:hidden">
      <button
        @click="drawerOpen = true"
        class="animate-slide-up flex w-full items-center justify-between bg-vermillion px-5 py-4 font-semibold text-paper shadow-xl shadow-vermillion/30 transition hover:bg-vermillion-deep"
      >
        <span class="flex items-center gap-2.5">
          <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l1 13H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>
          Ver pedido · {{ count }} {{ count === 1 ? 'item' : 'itens' }}
        </span>
        <span class="font-extrabold">{{ fmt(total) }}</span>
      </button>
    </div>
  </div>
</template>