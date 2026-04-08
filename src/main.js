import { LitElement, html } from 'lit';
import '@/pages/home.js';

export class AppMain extends LitElement {
  createRenderRoot() { return this; }


  render() {
    return html`
    <home-page></home-page>
    `
  }
}

window.customElements.define('app-main', AppMain)
