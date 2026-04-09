import { LitElement, html } from 'lit'
import { NAV_LINKS } from '@/constants/nav-links.js'
import '@/components/nav-logo.js'

class SiteNav extends LitElement {
  createRenderRoot() { return this; }

  static properties = { _route: { type: String, state: true } }

  constructor() {
    super()
    this._route = this._getRoute()
    window.addEventListener('hashchange', () => {
      this._route = this._getRoute()
    })
  }

  _getRoute() {
    return window.location.hash.slice(1) || 'home'
  }

  _navigate(href) {
    window.location.hash = href
  }

  render() {
    return html`
      <nav style="
        position: sticky;
        top: 0;
        z-index: 100;
        background: rgba(255,255,255,0.97);
        backdrop-filter: blur(8px);
        border-bottom: 1px solid #e5e7eb;
        box-shadow: 0 1px 8px rgba(0,0,0,0.06);
      ">
        <div class="flex items-center justify-between px-10 py-5">

          <a href="#home" style="text-decoration: none;">
            <nav-logo></nav-logo>
          </a>

          <div class="flex gap-1">
            ${NAV_LINKS.map(link => {
              const key = link.href.slice(1)
              const active = this._route === key
              return html`
                <button
                  @click=${() => this._navigate(link.href)}
                  class="text-sm rounded-lg px-4 py-2 cursor-pointer border-none transition-all"
                  style="
                    background: ${active ? '#1A6B2A' : 'transparent'};
                    color: ${active ? 'white' : '#CC0000'};
                    font-weight: ${active ? '600' : '400'};
                  "
                >
                  ${link.label}
                </button>
              `
            })}
          </div>

          <button
            @click=${() => this._navigate('#contact')}
            class="text-sm text-white rounded-lg px-5 py-2.5 cursor-pointer border-none"
            style="background: #CC0000;"
          >
            Get in touch
          </button>

        </div>
      </nav>
    `
  }
}

customElements.define('site-nav', SiteNav)
