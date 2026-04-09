import { LitElement, html } from 'lit'
import '@/pages/home.js'
import '@/pages/services-page.js'
import '@/pages/products-page.js'
import '@/pages/clients-page.js'
import '@/pages/about-page.js'
import '@/pages/contact-page.js'

class AppRouter extends LitElement {
  createRenderRoot() { return this; }

  static properties = { route: { type: String } }

  constructor() {
    super()
    this.route = this._getRoute()
    window.addEventListener('hashchange', () => {
      this.route = this._getRoute()
      window.scrollTo({ top: 0, behavior: 'instant' })
    })
  }

  _getRoute() {
    return window.location.hash.slice(1) || 'home'
  }

  render() {
    switch (this.route) {
      case 'services': return html`<services-page></services-page>`
      case 'products': return html`<products-page></products-page>`
      case 'clients':  return html`<clients-page></clients-page>`
      case 'about':    return html`<about-page></about-page>`
      case 'contact':  return html`<contact-page></contact-page>`
      default:         return html`<home-page></home-page>`
    }
  }
}

customElements.define('app-router', AppRouter)
