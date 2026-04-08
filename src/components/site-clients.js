import { LitElement, html } from 'lit'
import { CLIENTS, CLIENT_CATEGORIES } from '@/constants/clients.js'
import { fadeSlideUp } from '@/designs/clients-animations.js'

class SiteClients extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    showFilters: { type: Boolean },
    activeFilter: { type: String }
  }

  constructor() {
    super()
    this.showFilters = false
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

        <button
          @click=${() => {
        this.showFilters = !this.showFilters
        if (!this.showFilters) this.activeFilter = 'All'
      }}
          class="text-xs px-4 py-1.5 rounded-full border cursor-pointer mb-8 flex items-center gap-2"
          style="border-color: #1A6B2A; color: #1A6B2A;"
        >
          All Industries ${this.showFilters ? '▲' : '▼'}
        </button>

        ${this.showFilters ? html`
          <div class="flex flex-wrap gap-2 mb-10">
            ${CLIENT_CATEGORIES.filter(c => c !== 'All').map(cat => html`
              <button
                @click=${() => this.activeFilter = cat}
                class="text-xs px-4 py-1.5 rounded-full border cursor-pointer"
                style="${this.activeFilter === cat
          ? 'background: #1A6B2A; color: white; border-color: #1A6B2A;'
          : 'background: white; color: #6b7280; border-color: #e5e7eb;'
        }"
              >
                ${cat}
              </button>
            `)}
          </div>
        ` : ''}

        <div class="flex flex-wrap items-center" style="margin: -2px;">
          ${this.filteredClients.map((client, i) => html`
            <div
              class="client-card"
              style="animation-delay: ${i * 30}ms; margin: -2px;"
            >
              ${client.logo
            ? html`<img
                    src="${client.logo}"
                    alt="${client.name}"
                    class="h-20 w-auto object-contain"
                  />`
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