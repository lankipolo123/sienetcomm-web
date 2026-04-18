import { LitElement, html } from 'lit'
import { CLIENTS, CLIENT_CATEGORIES } from '@/constants/clients.js'
import { fadeSlideUp } from '@/designs/clients-animations.js'
import '@/components/filter-pill.js'

class SiteClients extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    activeFilter: { type: String }
  }

  constructor() {
    super()
    this.activeFilter = 'All'
  }

  get filteredClients() {
    if (this.activeFilter === 'All') return CLIENTS
    return CLIENTS.filter(c => c.category === this.activeFilter)
  }

  get _animKey() {
    return this.activeFilter.replace(/[\s&]/g, '')
  }

  render() {
    return html`
      <style>${fadeSlideUp(this._animKey)}</style>

      <section data-section="clients" class="px-10 py-16 border-b border-gray-100">

        <p class="text-xs uppercase tracking-widest text-gray-400 mb-2">Who we work with</p>
        <h2 class="text-3xl font-semibold mb-6" style="color: #1A6B2A;">Our Clients</h2>

        <!-- Filter pills — wraps on desktop, scrolls horizontally on mobile -->
        <div class="filter-pills" style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 32px;">
          ${CLIENT_CATEGORIES.map(cat => html`
            <filter-pill
              label=${cat}
              ?active=${this.activeFilter === cat}
              @pill-select=${() => this.activeFilter = cat}
            ></filter-pill>
          `)}
        </div>

        <div class="flex flex-wrap items-center" style="margin: -2px;">
          ${this.filteredClients.map((client, i) => html`
            <div
              class="client-card"
              style="animation-delay: ${i * 30}ms; margin: -2px;"
            >
              ${client.logo
                ? html`<img src="${client.logo}" alt="${client.name}" class="h-20 w-auto object-contain" />`
                : html`<span class="text-sm text-gray-500 font-medium">${client.name}</span>`
              }
            </div>
          `)}
        </div>

      </section>
    `
  }
}

customElements.define('site-clients', SiteClients)
