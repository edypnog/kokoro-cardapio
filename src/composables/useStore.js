import { ref, computed, watch } from 'vue'
import { fmt } from '../utils'

const cart = ref([])          // { item, qty }
const drawerOpen = ref(false)
const selected = ref(null)    // item em destaque no modal
const toast = ref(null)
let toastTimer = null

export function useStore() {
  const count = computed(() => cart.value.reduce((s, l) => s + l.qty, 0))
  const total = computed(() => cart.value.reduce((s, l) => s + l.qty * l.item.price, 0))

  function showToast(msg) {
    toast.value = msg
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => (toast.value = null), 2200)
  }

  function add(item, qty = 1) {
    const line = cart.value.find((l) => l.item.id === item.id)
    if (line) line.qty += qty
    else cart.value.push({ item, qty })
    showToast(`${item.name} adicionado ao pedido`)
  }
  const inc = (id) => { const l = cart.value.find((l) => l.item.id === id); if (l) l.qty++ }
  function dec(id) {
    const i = cart.value.findIndex((l) => l.item.id === id)
    if (i < 0) return
    if (cart.value[i].qty <= 1) cart.value.splice(i, 1)
    else cart.value[i].qty--
  }
  const removeLine = (id) => (cart.value = cart.value.filter((l) => l.item.id !== id))
  const clear = () => (cart.value = [])

  const waMessage = computed(() =>
    [
      'Olá, Kokoro! 👋 Gostaria de fazer um pedido:',
      '',
      ...cart.value.map((l) => `▪ ${l.qty}x ${l.item.name} — ${fmt(l.qty * l.item.price)}`),
      '',
      `Total: ${fmt(total.value)}`,
      '',
      'Entrega ou retirada:',
    ].join('\n')
  )
  const waUrl = computed(
    () => `https://wa.me/5511998765432?text=${encodeURIComponent(waMessage.value)}`
  )

  // Trava o scroll quando drawer/modal estão abertos
  watch([drawerOpen, selected], () => {
    document.body.style.overflow = drawerOpen.value || selected.value ? 'hidden' : ''
  })

  return {
    cart, count, total, toast,
    drawerOpen, selected,
    add, inc, dec, removeLine, clear,
    setSelected: (i) => (selected.value = i),
    waMessage, waUrl,
  }
}