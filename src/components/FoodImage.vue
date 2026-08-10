<script setup>
import { ref } from 'vue'

defineProps({
  src: { type: String, default: null },
  kanji: { type: String, default: '鮨' },
  alt: { type: String, default: '' },
})
const loaded = ref(false)
const failed = ref(false)
</script>

<template>
  <div class="absolute inset-0">
    <!-- fallback elegante (padrão + kanji) enquanto a foto não carrega / se falhar -->
    <div class="bg-dots absolute inset-0 grid place-items-center bg-ink-800 text-paper/[0.07]">
      <span class="font-display text-6xl text-paper/15 select-none">{{ kanji }}</span>
      <span class="absolute bottom-2 right-2 grid size-6 place-items-center bg-vermillion/80 font-display text-[11px] text-paper">心</span>
    </div>

    <img
      v-if="src && !failed"
      :src="src" :alt="alt" loading="lazy"
      class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      :class="loaded ? 'opacity-100' : 'opacity-0'"
      @load="loaded = true"
      @error="failed = true"
    />
  </div>
</template>