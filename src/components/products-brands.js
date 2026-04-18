import { LitElement, html } from 'lit'
import { PRODUCTS } from '@/constants/products.js'
import { productIcon } from '@/utils/product-icon.js'

class ProductsBrands extends LitElement {
  createRenderRoot() { return this; }

  static properties = { _active: { type: String, state: true } }

  constructor() {
    super()
    this._active = 'all'
  }

  get _filtered() {
    if (this._active === 'all') return PRODUCTS
    return PRODUCTS.filter(p => p.category === this._active)
  }

  render() {
    return html`
      <!-- Wrapping pill filters -->
      <div class="products-pill-wrap" style="background: white; border-bottom: 1px solid #e5e7eb; padding: 16px 80px;">
        <div class="filter-pills" style="display: flex; flex-wrap: wrap; gap: 6px;">
          <button
            @click=${() => this._active = 'all'}
            style="
              padding: 5px 12px; font-size: 0.72rem;
              font-weight: ${this._active === 'all' ? '600' : '400'};
              color: ${this._active === 'all' ? 'white' : '#6b7280'};
              background: ${this._active === 'all' ? '#1A6B2A' : 'white'};
              border: 1px solid ${this._active === 'all' ? '#1A6B2A' : '#e5e7eb'};
              border-radius: 99px; cursor: pointer;
            "
          >All Categories</button>
          ${PRODUCTS.map(p => html`
            <button
              @click=${() => this._active = p.category}
              style="
                padding: 5px 12px; font-size: 0.72rem;
                font-weight: ${this._active === p.category ? '600' : '400'};
                color: ${this._active === p.category ? 'white' : '#6b7280'};
                background: ${this._active === p.category ? '#1A6B2A' : 'white'};
                border: 1px solid ${this._active === p.category ? '#1A6B2A' : '#e5e7eb'};
                border-radius: 99px; cursor: pointer;
              "
            >${p.category}</button>
          `)}
        </div>
      </div>

      <!-- Brand cards grid -->
      <section style="background: #f9fafb; padding: 56px 80px 80px;">
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
            ">
              <div style="background: linear-gradient(135deg, #0a2314 0%, ${p.color} 100%); padding: 20px 28px 18px; display: flex; align-items: center; gap: 14px;">
                <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  ${productIcon(p.category, 'white', 20)}
                </div>
                <h3 style="font-size: 0.95rem; font-weight: 600; color: white; margin: 0; line-height: 1.4;">${p.category}</h3>
              </div>
              <div style="padding: 20px 28px 24px;">
                <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #9ca3af; font-weight: 600; margin: 0 0 12px;">Brand Partners</p>
                <div style="display: flex; flex-wrap: wrap; gap: 7px;">
                  ${p.brands.map(brand => html`
                    <span style="
                      display: inline-block;
                      background: #f0faf3; color: #1A6B2A;
                      font-size: 0.78rem; font-weight: 500;
                      padding: 5px 12px; border-radius: 99px;
                      border: 1px solid #bbf7d0;
                    ">${brand}</span>
                  `)}
                </div>
              </div>
            </div>
          `)}
        </div>
      </section>
    `
  }
}

customElements.define('products-brands', ProductsBrands)
