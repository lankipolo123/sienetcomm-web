import { LitElement, html } from 'lit'

class SiteBanner extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    heading:  { type: String },
    btnLabel: { type: String },
  }

  render() {
    return html`
      <section class="px-10 py-16 text-center text-white" style="background: #1A6B2A;">
        <p class="text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-6">
          ${this.heading}
        </p>
        <button
          @click=${() => window.location.hash = '#contact'}
          class="text-sm border border-white text-white px-6 py-2.5 rounded cursor-pointer bg-transparent"
        >
          ${this.btnLabel}
        </button>
      </section>
    `
  }
}

customElements.define('site-banner', SiteBanner)
