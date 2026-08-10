/* Animação de entrada ao rolar: use class="reveal" + v-reveal */
export const reveal = {
  mounted(el) {
    if (!('IntersectionObserver' in window)) {
      el.classList.add('revealed')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('revealed')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
  },
}