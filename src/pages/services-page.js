import { LitElement, html } from 'lit'
import { SERVICES_HERO_STATS } from '@/constants/services.js'
import '@/layouts/page-layout.js'
import '@/components/site-nav.js'
import '@/components/page-hero.js'
import '@/components/services-detail.js'
import '@/components/services-cta.js'
import '@/components/site-footer.js'

class ServicesPage extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <page-layout>
        <site-nav slot="nav"></site-nav>

        <page-hero
          slot="hero"
          eyebrow="What We Do"
          title="Our Services"
          subtitle="End-to-end ICT and civil works solutions across enterprise networks, fiber infrastructure, civil construction, and tower engineering — delivered nationwide."
          bgImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=80"
          .stats=${SERVICES_HERO_STATS}
        ></page-hero>

        <services-detail slot="content"></services-detail>

        <services-cta slot="cta"></services-cta>

        <site-footer slot="footer"></site-footer>
      </page-layout>
    `
  }
}

customElements.define('services-page', ServicesPage)
