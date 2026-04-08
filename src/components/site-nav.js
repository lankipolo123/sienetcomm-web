import { LitElement, html } from 'lit'
import { NAV_LINKS } from '@/constants/nav-links.js'
import '@/components/nav-logo.js'

class SiteNav extends LitElement {
  createRenderRoot() { return this; }

  _scrollTo(target) {
    document.querySelector(`[data-section="${target}"]`)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return html`
      <div class="flex items-center justify-between px-10 py-6 border-b border-gray-200 bg-white">

        <nav-logo></nav-logo>

        <div class="flex gap-8">
          ${NAV_LINKS.map(link => html`
            <button
              class="text-base text-gray-500 hover:text-gray-900 bg-transparent border-none cursor-pointer"
              @click=${() => this._scrollTo(link.target)}
            >
              ${link.label}
            </button>
          `)}
        </div>

        <button class="text-base text-white rounded-md px-6 py-2.5 cursor-pointer border-none" style="background: #CC0000;">
          Get in touch
        </button>

      </div>
    `
  }
}

customElements.define('site-nav', SiteNav)