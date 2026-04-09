import { LitElement, html } from 'lit'
import '@/layouts/page-layout.js'
import '@/components/site-nav.js'
import '@/components/page-hero.js'
import '@/components/contact-content.js'
import '@/components/site-footer.js'

class ContactPage extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <page-layout>
        <site-nav slot="nav"></site-nav>

        <page-hero
          slot="hero"
          eyebrow="Reach Out"
          title="Contact Us"
          subtitle="Whether it's a large enterprise deployment or a simple inquiry — we're ready to help. Reach our team through any channel below."
        ></page-hero>

        <contact-content slot="content"></contact-content>

        <site-footer slot="footer"></site-footer>
      </page-layout>
    `
  }
}

customElements.define('contact-page', ContactPage)
