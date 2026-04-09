import { LitElement, html } from 'lit'
import { PRODUCTS_HERO_STATS } from '@/constants/products.js'
import '@/layouts/page-layout.js'
import '@/components/site-nav.js'
import '@/components/page-hero.js'
import '@/components/products-brands.js'
import '@/components/products-cta.js'
import '@/components/site-footer.js'

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
          .stats=${PRODUCTS_HERO_STATS}
        ></page-hero>

        <products-brands slot="content"></products-brands>

        <products-cta slot="cta"></products-cta>

        <site-footer slot="footer"></site-footer>
      </page-layout>
    `
  }
}

customElements.define('products-page', ProductsPage)
