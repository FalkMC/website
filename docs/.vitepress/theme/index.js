import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  setup() {
    import('vue').then(({ onMounted, nextTick }) => {
      onMounted(() => {
        const toggleFAQ = function(e) {
          const item = this.parentElement
          if (item) {
            item.classList.toggle('open')
          }
        }

        const attachFAQListeners = () => {
          document.querySelectorAll('.faq-q').forEach((q) => {
            q.removeEventListener('click', toggleFAQ)
            q.addEventListener('click', toggleFAQ)
          })
        }

        attachFAQListeners()

        const observer = new MutationObserver(() => {
          if (document.querySelector('.faq-q')) {
            attachFAQListeners()
          }
        })
        observer.observe(document.body, { childList: true, subtree: true })
      })
    })
  }
}
