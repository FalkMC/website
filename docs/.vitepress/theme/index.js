import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    // ----- FAQ toggle logic -----
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

    router.onAfterRouteChanged = attachFAQListeners

    if (typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', attachFAQListeners)

      const observer = new MutationObserver(() => {
        if (document.querySelector('.faq-q')) {
          attachFAQListeners()
          observer.disconnect()
        }
      })
      observer.observe(document.body, { childList: true, subtree: true })
    }

    // ----- CUSTOM DIVIDER (new) -----
    const addDivider = () => {
      const navbar = document.querySelector('.VPNavBar')
      if (!navbar) return

      // Remove any existing custom divider
      const existing = navbar.querySelector('.custom-nav-divider')
      if (existing) existing.remove()

      // Ensure navbar is positioned relative for absolute child
      navbar.style.position = 'relative'

      // Remove any borders from navbar and its children
      const allChildren = navbar.querySelectorAll('*')
      allChildren.forEach(el => {
        el.style.border = 'none'
        el.style.borderBottom = 'none'
        el.style.boxShadow = 'none'
      })
      navbar.style.border = 'none'
      navbar.style.borderBottom = 'none'
      navbar.style.boxShadow = 'none'

      // Create the divider
      const divider = document.createElement('div')
      divider.className = 'custom-nav-divider'
      divider.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--vp-c-border);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        z-index: 10;
      `
      navbar.appendChild(divider)

      // Update opacity based on scroll
      const updateDivider = () => {
        const scrollY = window.scrollY
        divider.style.opacity = scrollY > 10 ? '1' : '0'
      }

      updateDivider()
      window.addEventListener('scroll', updateDivider)
    }

    // Wait for navbar to appear
    if (typeof document !== 'undefined') {
      if (document.querySelector('.VPNavBar')) {
        addDivider()
      } else {
        const observer = new MutationObserver(() => {
          if (document.querySelector('.VPNavBar')) {
            addDivider()
            observer.disconnect()
          }
        })
        observer.observe(document.body, { childList: true, subtree: true })
      }
    }
  }
}