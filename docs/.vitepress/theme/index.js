import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return

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

    document.addEventListener('DOMContentLoaded', attachFAQListeners)

    router.onAfterRouteChanged = attachFAQListeners
  }
}
