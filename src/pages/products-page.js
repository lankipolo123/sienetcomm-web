import { LitElement, html } from 'lit'
import { PRODUCTS } from '@/constants/products.js'
import '@/components/site-nav.js'
import '@/components/site-footer.js'

class ProductsPage extends LitElement {
  createRenderRoot() { return this; }

  static properties = { _active: { type: String, state: true } }

  constructor() {
    super()
    this._active = 'all'
  }

  get _categories() {
    return ['all', ...PRODUCTS.map(p => p.category)]
  }

  get _filtered() {
    if (this._active === 'all') return PRODUCTS
    return PRODUCTS.filter(p => p.category === this._active)
  }

  render() {
    return html`
      <site-nav></site-nav>

      <!-- Hero -->
      <section style="background: linear-gradient(135deg, #0a2314 0%, #1A6B2A 60%, #145224 100%); padding: 80px 80px 60px;">
        <span style="display: inline-block; background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.85); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; padding: 6px 14px; border-radius: 99px; margin-bottom: 20px;">
          Brand Partners
        </span>
        <h1 style="font-size: 3rem; font-weight: 700; color: white; line-height: 1.1; margin: 0 0 16px; max-width: 640px;">
          Products & Brand Partners
        </h1>
        <p style="font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.7; max-width: 580px; margin: 0 0 40px;">
          We supply, install, and maintain equipment from the world's leading technology brands —
          spanning communications, security, civil infrastructure, and enterprise IT.
        </p>
        <!-- Stats row -->
        <div style="display: flex; gap: 40px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.15);">
          <div>
            <div style="font-size: 2rem; font-weight: 700; color: #86efac;">14</div>
            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 4px;">Product categories</div>
          </div>
          <div>
            <div style="font-size: 2rem; font-weight: 700; color: #86efac;">60+</div>
            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 4px;">Brand partners</div>
          </div>
          <div>
            <div style="font-size: 2rem; font-weight: 700; color: #86efac;">Supply & Install</div>
            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 4px;">End-to-end capability</div>
          </div>
        </div>
      </section>

      <!-- Filter Tabs -->
      <div style="background: white; border-bottom: 1px solid #e5e7eb; padding: 0 80px; position: sticky; top: 73px; z-index: 50; overflow-x: auto;">
        <div style="display: flex; gap: 0; min-width: max-content;">
          <button
            @click=${() => this._active = 'all'}
            style="
              padding: 16px 20px;
              font-size: 0.8rem;
              font-weight: ${this._active === 'all' ? '600' : '400'};
              color: ${this._active === 'all' ? '#1A6B2A' : '#6b7280'};
              background: none;
              border: none;
              border-bottom: ${this._active === 'all' ? '2px solid #1A6B2A' : '2px solid transparent'};
              cursor: pointer;
              white-space: nowrap;
            "
          >All Categories</button>
          ${PRODUCTS.map(p => html`
            <button
              @click=${() => this._active = p.category}
              style="
                padding: 16px 18px;
                font-size: 0.8rem;
                font-weight: ${this._active === p.category ? '600' : '400'};
                color: ${this._active === p.category ? '#1A6B2A' : '#6b7280'};
                background: none;
                border: none;
                border-bottom: ${this._active === p.category ? '2px solid #1A6B2A' : '2px solid transparent'};
                cursor: pointer;
                white-space: nowrap;
              "
            >${p.icon} ${p.category}</button>
          `)}
        </div>
      </div>

      <!-- Products Grid -->
      <section style="background: #f9fafb; padding: 60px 80px 80px;">
        <div style="
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        ">
          ${this._filtered.map(p => html`
            <div style="
              background: white;
              border-radius: 16px;
              border: 1px solid #e5e7eb;
              overflow: hidden;
              box-shadow: 0 2px 12px rgba(0,0,0,0.05);
              transition: box-shadow 0.2s;
            ">
              <!-- Card header -->
              <div style="
                background: linear-gradient(135deg, #0a2314 0%, ${p.color} 100%);
                padding: 28px 28px 24px;
              ">
                <div style="font-size: 2.2rem; margin-bottom: 12px;">${p.icon}</div>
                <h3 style="font-size: 0.95rem; font-weight: 600; color: white; margin: 0; line-height: 1.4;">${p.category}</h3>
              </div>
              <!-- Brands -->
              <div style="padding: 24px 28px;">
                <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #9ca3af; font-weight: 600; margin: 0 0 14px;">Brand Partners</p>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${p.brands.map(brand => html`
                    <span style="
                      display: inline-block;
                      background: #f0faf3;
                      color: #1A6B2A;
                      font-size: 0.78rem;
                      font-weight: 500;
                      padding: 5px 12px;
                      border-radius: 99px;
                      border: 1px solid #bbf7d0;
                    ">${brand}</span>
                  `)}
                </div>
              </div>
            </div>
          `)}
        </div>
      </section>

      <!-- Bottom CTA -->
      <section style="background: #111827; padding: 64px 80px;">
        <div style="max-width: 600px; margin: 0 auto; text-align: center;">
          <h2 style="font-size: 1.8rem; font-weight: 700; color: white; margin: 0 0 12px;">
            Need a specific product or brand?
          </h2>
          <p style="color: rgba(255,255,255,0.6); font-size: 0.95rem; line-height: 1.7; margin: 0 0 32px;">
            We source, supply, and install equipment from hundreds of brands.
            Reach out to our sales team with your requirements.
          </p>
          <div style="display: flex; gap: 12px; justify-content: center;">
            <a
              href="mailto:sales@sienetcomm.com"
              style="background: #1A6B2A; color: white; font-size: 0.9rem; font-weight: 600; padding: 13px 32px; border-radius: 10px; text-decoration: none;"
            >
              Email Sales Team
            </a>
            <button
              @click=${() => window.location.hash = '#contact'}
              style="background: transparent; color: white; font-size: 0.9rem; padding: 13px 32px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.25); cursor: pointer;"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <site-footer></site-footer>
    `
  }
}

customElements.define('products-page', ProductsPage)
