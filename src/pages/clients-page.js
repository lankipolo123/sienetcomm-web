import { LitElement, html } from 'lit'
import { CLIENTS_HERO_STATS } from '@/constants/clients.js'
import '@/layouts/page-layout.js'
import '@/components/site-nav.js'
import '@/components/page-hero.js'
import '@/components/site-clients.js'
import '@/components/site-footer.js'

class ClientsPage extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <page-layout>
        <site-nav slot="nav"></site-nav>

        <page-hero
          slot="hero"
          eyebrow="Who We Work With"
          title="Our Clients"
          subtitle="From banks and hospitals to government agencies and food chains — SIENETCOMM serves enterprises across 16 industries throughout the Philippines."
          .stats=${CLIENTS_HERO_STATS}
        ></page-hero>

        <site-clients slot="content"></site-clients>

        <site-footer slot="footer"></site-footer>
      </page-layout>
    `
  }
}

customElements.define('clients-page', ClientsPage)
