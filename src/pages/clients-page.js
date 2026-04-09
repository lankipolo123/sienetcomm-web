import { LitElement, html } from 'lit'
import { CLIENTS, CLIENT_CATEGORIES } from '@/constants/clients.js'
import { fadeSlideUp } from '@/designs/clients-animations.js'
import '@/components/site-nav.js'
import '@/components/site-footer.js'

class ClientsPage extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    activeFilter: { type: String },
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

      <site-nav></site-nav>

      <!-- Hero -->
      <section style="background: linear-gradient(135deg, #0a2314 0%, #1A6B2A 60%, #145224 100%); padding: 80px 80px 60px;">
        <span style="display: inline-block; background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.85); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; padding: 6px 14px; border-radius: 99px; margin-bottom: 20px;">
          Who We Work With
        </span>
        <h1 style="font-size: 3rem; font-weight: 700; color: white; line-height: 1.1; margin: 0 0 16px;">
          Our Clients
        </h1>
        <p style="font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.7; max-width: 560px; margin: 0 0 40px;">
          From banks and hospitals to government agencies and food chains — SIENETCOMM serves enterprises
          across 16 industries throughout the Philippines.
        </p>
        <div style="display: flex; gap: 32px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.15);">
          <div><div style="font-size: 2rem; font-weight: 700; color: #86efac;">50+</div><div style="font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 4px;">Client organizations</div></div>
          <div><div style="font-size: 2rem; font-weight: 700; color: #86efac;">16</div><div style="font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 4px;">Industries served</div></div>
          <div><div style="font-size: 2rem; font-weight: 700; color: #86efac;">Nationwide</div><div style="font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 4px;">Coverage across all regions</div></div>
        </div>
      </section>

      <!-- Industry filter bar -->
      <div style="background: white; border-bottom: 1px solid #e5e7eb; padding: 0 80px; position: sticky; top: 73px; z-index: 50; overflow-x: auto;">
        <div style="display: flex; gap: 0; min-width: max-content;">
          ${CLIENT_CATEGORIES.map(cat => html`
            <button
              @click=${() => this.activeFilter = cat}
              style="
                padding: 16px 18px;
                font-size: 0.8rem;
                font-weight: ${this.activeFilter === cat ? '600' : '400'};
                color: ${this.activeFilter === cat ? '#1A6B2A' : '#6b7280'};
                background: none;
                border: none;
                border-bottom: ${this.activeFilter === cat ? '2px solid #1A6B2A' : '2px solid transparent'};
                cursor: pointer;
                white-space: nowrap;
              "
            >${cat}</button>
          `)}
        </div>
      </div>

      <!-- Clients grid -->
      <section style="background: #f9fafb; padding: 60px 80px 80px; min-height: 60vh;">
        <div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between;">
          <p style="font-size: 0.85rem; color: #6b7280; margin: 0;">
            Showing <strong style="color: #111827;">${this.filteredClients.length}</strong> clients
            ${this.activeFilter !== 'All' ? html` in <strong style="color: #1A6B2A;">${this.activeFilter}</strong>` : ''}
          </p>
        </div>

        <div class="flex flex-wrap items-center" style="margin: -2px;">
          ${this.filteredClients.map((client, i) => html`
            <div
              class="client-card"
              style="animation-delay: ${i * 30}ms; margin: -2px;"
            >
              ${client.logo
                ? html`<img src="${client.logo}" alt="${client.name}" class="h-20 w-auto object-contain" />`
                : html`<span style="font-size: 0.85rem; color: #6b7280; font-weight: 500;">${client.name}</span>`
              }
            </div>
          `)}
        </div>
      </section>

      <site-footer></site-footer>
    `
  }
}

customElements.define('clients-page', ClientsPage)
