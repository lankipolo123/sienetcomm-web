import { LitElement, html } from 'lit'
import '@/pages/home.js'
import '@/pages/services-page.js'
import '@/pages/products-page.js'
import '@/pages/clients-page.js'
import '@/pages/about-page.js'
import '@/pages/contact-page.js'
import '@/components/scroll-to-top.js'

const SCROLL_THRESHOLD = () => window.innerHeight * 0.2

class AppRouter extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    route:   { type: String },
    visible: { type: Boolean },
  }

  constructor() {
    super()
    this.route = this._getRoute()
    this.visible = false
    window.addEventListener('hashchange', () => {
      this.route = this._getRoute()
      window.scrollTo({ top: 0, behavior: 'instant' })
    })
    window.addEventListener('scroll', () => {
      this.visible = window.scrollY > SCROLL_THRESHOLD()
    }, { passive: true })
  }

  _getRoute() {
    return window.location.hash.slice(1) || 'home'
  }

  _renderPage() {
    switch (this.route) {
      case 'services': return html`<services-page></services-page>`
      case 'products': return html`<products-page></products-page>`
      case 'clients':  return html`<clients-page></clients-page>`
      case 'about':    return html`<about-page></about-page>`
      case 'contact':  return html`<contact-page></contact-page>`
      default:         return html`<home-page></home-page>`
    }
  }

  render() {
    return html`
      ${this._renderPage()}
      <scroll-to-top .visible=${this.visible}></scroll-to-top>
    `
  }
}

customElements.define('app-router', AppRouter)
