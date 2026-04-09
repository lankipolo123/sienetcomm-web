import { LitElement, html } from 'lit'

class HomeLayout extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <slot name="nav"></slot>
      <main>
        <slot name="hero"></slot>
        <slot name="banner-top"></slot>
        <slot name="departments"></slot>
        <slot name="services"></slot>
        <slot name="products-teaser"></slot>
        <slot name="clients"></slot>
        <slot name="about"></slot>
      </main>
      <slot name="footer"></slot>
    `
  }
}

customElements.define('home-layout', HomeLayout)
