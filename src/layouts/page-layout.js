import { LitElement, html } from 'lit'

class PageLayout extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <slot name="nav"></slot>
      <main>
        <slot name="hero"></slot>
        <slot name="content"></slot>
        <slot name="cta"></slot>
      </main>
      <slot name="footer"></slot>
    `
  }
}

customElements.define('page-layout', PageLayout)
