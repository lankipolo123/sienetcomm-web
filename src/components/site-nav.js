import { LitElement, html } from 'lit'
import { NAV_LINKS } from '@/constants/nav-links.js'
import '@/components/nav-logo.js'

class SiteNav extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    _route: { type: String, state: true },
    _open:  { type: Boolean, state: true },
  }

  constructor() {
    super()
    this._route = this._getRoute()
    this._open  = false
    window.addEventListener('hashchange', () => {
      this._route = this._getRoute()
      this._open  = false
    })
  }

  _getRoute() {
    return window.location.hash.slice(1) || 'home'
  }

  _navigate(href) {
    window.location.hash = href
    this._open = false
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

        <!-- Main bar -->
        <div class="flex items-center justify-between px-5 py-4 md:px-10 md:py-5">

          <a href="#home" style="text-decoration: none;">
            <nav-logo></nav-logo>
          </a>

          <!-- Desktop nav links (hidden on mobile) -->
          <div class="hidden md:flex gap-1">
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

          <!-- Desktop CTA (hidden on mobile) -->
          <button
            class="hidden md:block text-sm text-white rounded-lg px-5 py-2.5 cursor-pointer border-none"
            @click=${() => this._navigate('#contact')}
            style="background: #CC0000;"
          >
            Get in touch
          </button>

          <!-- Mobile hamburger (hidden on desktop) -->
          <button
            class="md:hidden flex flex-col justify-center gap-[5px] p-2 border-none bg-transparent cursor-pointer"
            @click=${() => this._open = !this._open}
            aria-label="Toggle menu"
          >
            <span style="
              display: block; width: 22px; height: 2px; border-radius: 2px;
              background: #111827; transition: transform 0.2s, opacity 0.2s;
              transform: ${this._open ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
            "></span>
            <span style="
              display: block; width: 22px; height: 2px; border-radius: 2px;
              background: #111827; transition: opacity 0.2s;
              opacity: ${this._open ? '0' : '1'};
            "></span>
            <span style="
              display: block; width: 22px; height: 2px; border-radius: 2px;
              background: #111827; transition: transform 0.2s;
              transform: ${this._open ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
            "></span>
          </button>

        </div>

        <!-- Mobile dropdown menu -->
        ${this._open ? html`
          <div class="md:hidden" style="background: white; border-top: 1px solid #f3f4f6; padding: 12px 16px 20px;">
            <div style="display: flex; flex-direction: column; gap: 2px;">
              ${NAV_LINKS.map(link => {
                const key = link.href.slice(1)
                const active = this._route === key
                return html`
                  <button
                    @click=${() => this._navigate(link.href)}
                    style="
                      background: ${active ? '#f0faf3' : 'transparent'};
                      color: ${active ? '#1A6B2A' : '#374151'};
                      font-weight: ${active ? '600' : '400'};
                      font-size: 0.9rem;
                      text-align: left;
                      padding: 11px 16px;
                      border-radius: 10px;
                      border: none;
                      cursor: pointer;
                      width: 100%;
                    "
                  >${link.label}</button>
                `
              })}
              <button
                @click=${() => this._navigate('#contact')}
                style="
                  background: #CC0000;
                  color: white;
                  font-size: 0.9rem;
                  font-weight: 600;
                  padding: 12px 16px;
                  border-radius: 10px;
                  border: none;
                  cursor: pointer;
                  margin-top: 10px;
                  width: 100%;
                "
              >Get in touch</button>
            </div>
          </div>
        ` : ''}

      </nav>
    `
  }
}

customElements.define('site-nav', SiteNav)
