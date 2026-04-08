import { LitElement, html } from 'lit'

class HomeLayout extends LitElement {
    createRenderRoot() { return this; }

    render() {
        return html`
    <div class="bg-white">
      <slot name="nav"></slot>
      <slot name="hero"></slot>
      <slot name="banner-top"></slot>
      <slot name="services"></slot>
      <slot name="clients"></slot>
      <slot name="about"></slot>
      <slot name="footer"></slot>
    </div>
  `
    }
}

customElements.define('home-layout', HomeLayout)