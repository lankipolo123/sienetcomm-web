import { LitElement, html } from 'lit'
import '@/router.js'

function syncViewport() {
  const w = window.innerWidth
  document.documentElement.dataset.viewport = w <= 767 ? 'mobile' : w <= 1023 ? 'tablet' : 'desktop'
}
syncViewport()
window.addEventListener('resize', syncViewport)

export class AppMain extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`<app-router></app-router>`
  }
}

window.customElements.define('app-main', AppMain)
