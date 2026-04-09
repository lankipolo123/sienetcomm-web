import { LitElement, html } from 'lit'

class PageLayout extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <div style="background: white;">
        <slot name="nav"></slot>
        <slot name="hero"></slot>
        <slot name="content"></slot>
        <slot name="cta"></slot>
        <slot name="footer"></slot>
      </div>
    `
  }
}

customElements.define('page-layout', PageLayout)
