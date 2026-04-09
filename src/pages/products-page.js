import { LitElement, html } from 'lit'
import '@/layouts/page-layout.js'
import '@/components/site-nav.js'
import '@/components/page-hero.js'
import '@/components/products-brands.js'
import '@/components/site-footer.js'

const HERO_STATS = [
  { value: '14',             label: 'Product categories' },
  { value: '60+',            label: 'Brand partners' },
  { value: 'Supply & Install', label: 'End-to-end capability' },
]

class ProductsPage extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <page-layout>
        <site-nav slot="nav"></site-nav>

        <page-hero
          slot="hero"
          eyebrow="Brand Partners"
          title="Products & Brand Partners"
          subtitle="We supply, install, and maintain equipment from the world's leading technology brands — spanning communications, security, civil infrastructure, and enterprise IT."
          .stats=${HERO_STATS}
        ></page-hero>

        <products-brands slot="content"></products-brands>

        <section slot="cta" style="background: #111827; padding: 64px 80px;">
          <div style="max-width: 600px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 1.8rem; font-weight: 700; color: white; margin: 0 0 12px;">Need a specific product or brand?</h2>
            <p style="color: rgba(255,255,255,0.6); font-size: 0.95rem; line-height: 1.7; margin: 0 0 32px;">
              We source, supply, and install equipment from hundreds of brands. Reach out with your requirements.
            </p>
            <div style="display: flex; gap: 12px; justify-content: center;">
              <a href="mailto:sales@sienetcomm.com"
                style="background: #1A6B2A; color: white; font-size: 0.9rem; font-weight: 600; padding: 13px 32px; border-radius: 10px; text-decoration: none;"
              >Email Sales Team</a>
              <button
                @click=${() => window.location.hash = '#contact'}
                style="background: transparent; color: white; font-size: 0.9rem; padding: 13px 32px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.25); cursor: pointer;"
              >Contact Us</button>
            </div>
          </div>
        </section>

        <site-footer slot="footer"></site-footer>
      </page-layout>
    `
  }
}

customElements.define('products-page', ProductsPage)
