import { LitElement, html } from 'lit'
import '@/router.js'

export class AppMain extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`<app-router></app-router>`
  }
}

window.customElements.define('app-main', AppMain)
