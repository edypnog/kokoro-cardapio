<script setup>
import { computed } from 'vue'
const props = defineProps({ items: { type: Array, default: () => [] } })
const loop = computed(() => [...props.items, ...props.items])
</script>

<template>
  <div class="overflow-hidden select-none" aria-hidden="true">
    <div class="animate-marquee flex w-max hover:[animation-play-state:paused]">
      <div v-for="n in 2" :key="n" class="flex shrink-0 items-center">
        <span
          v-for="(w, i) in loop" :key="i"
          class="flex items-center text-xs tracking-[0.3em] text-paper/50"
        >
          <span class="px-7">{{ w }}</span>
          <span class="size-1.5 rotate-45 bg-vermillion/70"></span>
        </span>
      </div>
    </div>
  </div>
</template>