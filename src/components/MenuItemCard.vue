<script setup>
import { ref } from 'vue'
import { useStore } from '../composables/useStore'
import { fmt, TAGS } from '../utils'
import FoodImage from './FoodImage.vue'

const props = defineProps({ item: { type: Object, required: true } })
const { add, setSelected } = useStore()

const justAdded = ref(false)
function quickAdd() {
  add(props.item)
  justAdded.value = true
  setTimeout(() => (justAdded.value = false), 700)
}
</script>

<template>
  <article
    class="group relative cursor-pointer overflow-hidden border border-paper/10 bg-ink-900 transition duration-300 hover:-translate-y-1 hover:border-vermillion/60 hover:shadow-xl hover:shadow-black/40"
    @click="setSelected(item)"
  >
    <div class="relative h-44 overflow-hidden">
      <FoodImage :src="item.img" :kanji="item.kanji" :alt="item.name" />
      <div class="absolute left-3 top-3 flex flex-wrap gap-1.5">
        <span
          v-for="t in item.tags" :key="t"
          class="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
          :class="TAGS[t].cls"
        >{{ TAGS[t].label }}</span>
      </div>
      <span class="absolute bottom-0 right-0 bg-ink-950/85 px-3 py-1.5 text-sm font-bold text-gold backdrop-blur-sm">
        {{ fmt(item.price) }}
      </span>
    </div>

    <div class="p-5">
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-display text-lg font-semibold leading-snug">{{ item.name }}</h3>
        <span class="shrink-0 pt-0.5 font-display text-xs text-paper/40">{{ item.jp }}</span>
      </div>
      <p class="mt-1.5 line-clamp-2 text-sm leading-relaxed text-paper/60">{{ item.desc }}</p>

      <div class="mt-4 flex items-center justify-between">
        <span class="text-xs uppercase tracking-[0.2em] text-paper/40">toque p/ detalhes</span>
        <button
          @click.stop="quickAdd"
          class="grid size-9 place-items-center rounded-full bg-vermillion text-paper transition hover:bg-vermillion-deep active:scale-90"
          :aria-label="`Adicionar ${item.name}`"
        >
          <svg v-if="!justAdded" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
          <svg v-else class="animate-pop size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg>
        </button>
      </div>
    </div>

    <!-- detalhe de canto -->
    <span class="absolute right-0 top-0 h-2 w-2 bg-gold/0 transition group-hover:bg-gold"></span>
  </article>
</template>