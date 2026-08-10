<script setup>
import { ref, computed } from 'vue'
import { CATEGORIES, ITEMS } from '../data/menu'
import MenuItemCard from './MenuItemCard.vue'

const activeCat = ref('all')
const search = ref('')
const tag = ref('all')

const TAG_FILTERS = [
  { id: 'all', label: 'Todos' },
  { id: 'popular', label: '🔥 Mais pedidos' },
  { id: 'chef', label: '👨‍🍳 Escolha do chef' },
  { id: 'spicy', label: '🌶 Picantes' },
  { id: 'veg', label: '🌱 Vegetarianos' },
]

const catCount = (id) => ITEMS.filter((i) => i.cat === id).length

const filtered = computed(() =>
  ITEMS.filter((i) => {
    if (activeCat.value !== 'all' && i.cat !== activeCat.value) return false
    if (tag.value !== 'all' && !i.tags.includes(tag.value)) return false
    const q = search.value.trim().toLowerCase()
    if (q && ![i.name, i.desc, i.jp].some((s) => s.toLowerCase().includes(q))) return false
    return true
  })
)
</script>

<template>
  <section id="cardapio" class="relative scroll-mt-20">
    <div class="container-x py-20 lg:py-28">
      <!-- Cabeçalho da seção -->
      <div class="reveal">
        <div class="flex items-center gap-4">
          <span class="grid size-8 place-items-center bg-vermillion font-display text-sm text-paper">品</span>
          <span class="text-xs font-semibold uppercase tracking-[0.35em] text-gold">お品書き · Cardápio</span>
          <span class="h-px flex-1 bg-paper/10"></span>
        </div>
        <div class="mt-5 flex flex-wrap items-end justify-between gap-4">
          <h2 class="font-display text-4xl font-bold lg:text-5xl">Escolha seus favoritos</h2>
          <p class="max-w-md text-sm text-paper/60">
            Tudo feito na hora, do balcão pra sua mesa. Toque em um item para ver detalhes e quantidade.
          </p>
        </div>
      </div>

      <!-- Controles fixos ao rolar -->
      <div class="sticky top-16 z-30 -mx-4 mt-10 bg-ink-950/90 px-4 py-4 backdrop-blur-md lg:-mx-6 lg:px-6">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <!-- busca -->
          <label class="relative block w-full lg:max-w-xs">
            <svg class="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-paper/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
            <input
              v-model="search" type="search" placeholder="Buscar sushi, ramen, temaki…"
              class="w-full border border-paper/15 bg-ink-900 py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-paper/35 focus:border-vermillion"
            />
          </label>

          <!-- filtros rápidos -->
          <div class="no-scrollbar flex gap-2 overflow-x-auto">
            <button
              v-for="f in TAG_FILTERS" :key="f.id" @click="tag = f.id"
              class="whitespace-nowrap border px-3.5 py-2 text-xs font-semibold tracking-wide transition"
              :class="tag === f.id
                ? 'border-vermillion bg-vermillion text-paper'
                : 'border-paper/15 bg-ink-900/60 text-paper/70 hover:border-paper/40'"
            >{{ f.label }}</button>
          </div>
        </div>

        <!-- categorias -->
        <div class="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
          <button
            @click="activeCat = 'all'"
            class="whitespace-nowrap border px-4 py-2.5 text-sm transition"
            :class="activeCat === 'all'
              ? 'border-gold bg-gold font-bold text-ink-950'
              : 'border-paper/15 text-paper/75 hover:border-paper/40'"
          >
            <span class="font-display">全</span> <span class="ml-1.5">Todos</span>
          </button>
          <button
            v-for="c in CATEGORIES" :key="c.id" @click="activeCat = c.id"
            class="whitespace-nowrap border px-4 py-2.5 text-sm transition"
            :class="activeCat === c.id
              ? 'border-gold bg-gold font-bold text-ink-950'
              : 'border-paper/15 text-paper/75 hover:border-paper/40'"
          >
            <span class="font-display">{{ c.kanji }}</span>
            <span class="ml-1.5">{{ c.label }}</span>
            <span class="ml-1.5 text-[10px] opacity-60">{{ catCount(c.id) }}</span>
          </button>
        </div>
      </div>

      <!-- Grade de itens -->
      <p class="mt-8 text-xs uppercase tracking-[0.25em] text-paper/40">
        {{ filtered.length }} {{ filtered.length === 1 ? 'item encontrado' : 'itens encontrados' }}
      </p>

      <div v-if="filtered.length" class="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <MenuItemCard
          v-for="(item, i) in filtered" :key="item.id" :item="item"
          class="reveal" :style="{ transitionDelay: `${(i % 4) * 70}ms` }"
          v-reveal
        />
      </div>

      <!-- Estado vazio -->
      <div v-else class="mt-10 border border-dashed border-paper/15 py-16 text-center">
        <span class="font-display text-5xl text-paper/20">空</span>
        <p class="mt-4 text-paper/60">Nenhum item encontrado por aqui…</p>
        <button
          @click="search = ''; tag = 'all'; activeCat = 'all'"
          class="mt-4 border border-vermillion px-5 py-2 text-sm text-vermillion transition hover:bg-vermillion hover:text-paper"
        >Limpar filtros</button>
      </div>
    </div>
  </section>
</template>