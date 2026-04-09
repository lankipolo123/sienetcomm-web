import { LitElement, html } from 'lit'
import { PRODUCTS } from '@/constants/products.js'

class HomeProductsTeaser extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <section style="background: #f0faf3; padding: 72px 80px; border-top: 1px solid #d1fae5; border-bottom: 1px solid #d1fae5;">

        <header style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 20px;">
          <div>
            <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: #6b7280; font-weight: 600; margin: 0 0 10px;">Brand Partners</p>
            <h2 style="font-size: 2rem; font-weight: 700; color: #111827; margin: 0 0 10px;">Products We Supply & Install</h2>
            <p style="font-size: 0.9rem; color: #6b7280; margin: 0; max-width: 480px;">
              From IP PBX systems and CCTV to fire alarms, AV equipment, and UPS — we source and install from 60+ world-class brands across 14 categories.
            </p>
          </div>
          <button
            @click=${() => window.location.hash = '#products'}
            style="background: #1A6B2A; color: white; font-size: 0.85rem; font-weight: 600; padding: 11px 24px; border-radius: 10px; border: none; cursor: pointer; white-space: nowrap;"
          >
            View all brands
          </button>
        </header>

        <ul style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; list-style: none; padding: 0; margin: 0;">
          ${PRODUCTS.slice(0, 8).map(p => html`
            <li
              @click=${() => window.location.hash = '#products'}
              style="background: white; border: 1px solid #e5e7eb; border-radius: 14px; padding: 20px; cursor: pointer;"
            >
              <h3 style="font-size: 0.8rem; font-weight: 600; color: #111827; margin: 0 0 8px; line-height: 1.3;">${p.category}</h3>
              <p style="font-size: 0.72rem; color: #9ca3af; margin: 0;">${p.brands.slice(0, 3).join(', ')}${p.brands.length > 3 ? ` +${p.brands.length - 3} more` : ''}</p>
            </li>
          `)}
        </ul>

      </section>
    `
  }
}

customElements.define('home-products-teaser', HomeProductsTeaser)
