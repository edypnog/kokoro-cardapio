<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useStore } from '../composables/useStore'
import { fmt, TAGS } from '../utils'
import FoodImage from './FoodImage.vue'

const { selected, setSelected, add } = useStore()
const qty = ref(1)
watch(selected, (v) => { if (v) qty.value = 1 })

function onKey(e) { if (e.key === 'Escape') setSelected(null) }
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="selected" class="fixed inset-0 z-[70] grid place-items-center p-4" role="dialog" aria-modal="true">
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="setSelected(null)"></div>

        <div class="modal-panel relative w-full max-w-lg overflow-hidden border border-paper/10 bg-ink-900">
          <div class="group relative h-52 sm:h-60">
            <FoodImage :src="selected.img" :kanji="selected.kanji" :alt="selected.name" />
            <button
              class="absolute right-3 top-3 grid size-9 place-items-center border border-paper/15 bg-ink-950/80 transition hover:border-vermillion"
              aria-label="Fechar" @click="setSelected(null)"
            >
              <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
            <span class="absolute bottom-3 left-4 font-display text-lg text-paper/90 drop-shadow">{{ selected.jp }}</span>
          </div>

          <div class="p-6">
            <div v-if="selected.tags.length" class="mb-3 flex flex-wrap gap-1.5">
              <span
                v-for="t in selected.tags" :key="t"
                class="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                :class="TAGS[t].cls"
              >{{ TAGS[t].label }}</span>
            </div>

            <h3 class="font-display text-2xl font-bold">{{ selected.name }}</h3>
            <p class="mt-2 leading-relaxed text-paper/65">{{ selected.desc }}</p>
            <p class="mt-3 text-[11px] uppercase tracking-wider text-paper/35">
              Contém glúten / soja · Informe alergias no checkout
            </p>

            <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div class="flex w-fit items-center border border-paper/20">
                <button @click="qty > 1 && qty--" class="grid size-10 place-items-center transition hover:text-vermillion" aria-label="Diminuir">−</button>
                <span class="w-10 text-center font-bold">{{ qty }}</span>
                <button @click="qty++" class="grid size-10 place-items-center transition hover:text-vermillion" aria-label="Aumentar">+</button>
              </div>
              <button
                @click="add(selected, qty); setSelected(null)"
                class="flex flex-1 items-center justify-center gap-3 bg-vermillion px-6 py-3 font-semibold text-paper transition hover:bg-vermillion-deep"
              >
                Adicionar ao pedido · {{ fmt(selected.price * qty) }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>