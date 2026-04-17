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
              style="background: white; border: 1px solid #e5e7eb; border-radius: 14px; overflow: hidden; cursor: pointer; transition: box-shadow 0.15s, transform 0.15s;"
              @mouseenter=${e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              @mouseleave=${e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
            >
              <div style="background: ${p.color}; padding: 18px 20px 14px; display: flex; flex-direction: column; gap: 10px;">
                <span style="font-size: 1.8rem; line-height: 1;">${p.icon}</span>
                <h3 style="font-size: 0.78rem; font-weight: 600; color: white; margin: 0; line-height: 1.35;">${p.category}</h3>
              </div>
              <div style="padding: 14px 20px;">
                <p style="font-size: 0.72rem; color: #6b7280; margin: 0; line-height: 1.65;">
                  ${p.brands.slice(0, 3).join(' · ')}${p.brands.length > 3 ? html`<span style="color: #9ca3af;"> +${p.brands.length - 3} more</span>` : ''}
                </p>
              </div>
            </li>
          `)}
        </ul>

      </section>
    `
  }
}

customElements.define('home-products-teaser', HomeProductsTeaser)
