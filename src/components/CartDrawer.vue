<script setup>
import { useStore } from '../composables/useStore'
import { fmt } from '../utils'
import FoodImage from './FoodImage.vue'

const { cart, count, total, drawerOpen, inc, dec, removeLine, clear, waUrl } = useStore()
</script>

<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div v-if="drawerOpen" class="fixed inset-0 z-[60]">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="drawerOpen = false"></div>

        <aside class="drawer-panel absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-paper/10 bg-ink-900">
          <!-- Cabeçalho -->
          <div class="flex items-center justify-between border-b border-paper/10 px-6 py-5">
            <h3 class="flex items-center gap-3 font-display text-xl font-bold">
              Seu pedido
              <span v-if="count" class="grid size-6 place-items-center rounded-full bg-vermillion text-xs font-extrabold">{{ count }}</span>
            </h3>
            <button @click="drawerOpen = false" class="grid size-9 place-items-center border border-paper/15 transition hover:border-vermillion" aria-label="Fechar">
              <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>

          <!-- Lista -->
          <div class="flex-1 overflow-y-auto px-6 py-5">
            <div v-if="!cart.length" class="grid h-full place-items-center text-center">
              <div>
                <span class="font-display text-6xl text-paper/15">空</span>
                <p class="mt-4 text-paper/60">Seu pedido está vazio.</p>
                <a href="#cardapio" @click="drawerOpen = false" class="mt-4 inline-block border border-vermillion px-5 py-2 text-sm text-vermillion transition hover:bg-vermillion hover:text-paper">
                  Ver cardápio
                </a>
              </div>
            </div>

            <ul v-else class="space-y-5">
              <li v-for="line in cart" :key="line.item.id" class="flex gap-4 border-b border-paper/10 pb-5">
                <div class="relative size-16 shrink-0 overflow-hidden border border-paper/10">
                  <FoodImage :src="line.item.img" :kanji="line.item.kanji" :alt="line.item.name" />
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-start justify-between gap-2">
                    <p class="font-semibold leading-tight">{{ line.item.name }}</p>
                    <button @click="removeLine(line.item.id)" class="text-paper/40 transition hover:text-vermillion" aria-label="Remover">
                      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M8 6V4h8v2m-9 0 1 14h8l1-14"/></svg>
                    </button>
                  </div>
                  <div class="mt-2 flex items-center justify-between">
                    <div class="flex items-center border border-paper/20">
                      <button @click="dec(line.item.id)" class="grid size-7 place-items-center text-sm transition hover:text-vermillion">−</button>
                      <span class="w-7 text-center text-sm font-bold">{{ line.qty }}</span>
                      <button @click="inc(line.item.id)" class="grid size-7 place-items-center text-sm transition hover:text-vermillion">+</button>
                    </div>
                    <span class="font-bold text-gold">{{ fmt(line.qty * line.item.price) }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Rodapé -->
          <div v-if="cart.length" class="border-t border-paper/10 px-6 py-5">
            <div class="flex justify-between text-sm text-paper/60">
              <span>Subtotal</span><span>{{ fmt(total) }}</span>
            </div>
            <div class="mt-1 flex justify-between text-sm text-paper/60">
              <span>Entrega</span><span class="text-matcha">combinada no checkout</span>
            </div>
            <div class="mt-3 flex justify-between border-t border-paper/10 pt-3 font-display text-xl font-bold">
              <span>Total</span><span class="text-gold">{{ fmt(total) }}</span>
            </div>

            <a
              :href="waUrl" target="_blank" rel="noopener"
              class="mt-5 flex items-center justify-center gap-3 bg-[#25D366] px-6 py-4 font-bold text-ink-950 transition hover:brightness-110"
            >
              <svg class="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Finalizar no WhatsApp
            </a>
            <button @click="clear()" class="mt-3 w-full py-2 text-xs uppercase tracking-[0.2em] text-paper/40 transition hover:text-vermillion">
              Esvaziar pedido
            </button>
          </div>
        </aside>
      </div>
    </Transition>
  </Teleport>
</template>