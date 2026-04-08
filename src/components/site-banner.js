import { LitElement, html } from 'lit'

class SiteBanner extends LitElement {
    createRenderRoot() { return this; }

    static properties = {
        heading: { type: String },
        subtext: { type: String },
        btnLabel: { type: String },
        target: { type: String },
    }

    _scrollTo() {
        document.querySelector(`[data-section="${this.target}"]`)
            ?.scrollIntoView({ behavior: 'smooth' })
    }

    render() {
        return html`
      <div class="px-10 py-16 text-center text-white" style="background: #1A6B2A;">
        <p class="text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-6">
          ${this.heading}
        </p>
        <button 
          @click=${() => this._scrollTo()}
          class="text-sm border border-white text-white px-6 py-2.5 rounded cursor-pointer bg-transparent hover:bg-white hover:text-green-900 transition-colors"
        >
          ${this.btnLabel}
        </button>
      </div>
    `
    }
}

customElements.define('site-banner', SiteBanner)