import { LitElement, html } from 'lit'
import '@/layouts/home-layout.js'
import '@/components/site-nav.js'
import '@/components/site-hero.js'
import '@/components/site-banner.js'
import '@/components/home-departments.js'
import '@/components/site-services.js'
import '@/components/home-products-teaser.js'
import '@/components/site-clients.js'
import '@/components/site-about.js'
import '@/components/site-footer.js'

class HomePage extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <home-layout>
        <site-nav               slot="nav"></site-nav>
        <site-hero              slot="hero"></site-hero>
        <site-banner            slot="banner-top"
          .heading=${"SIENETCOMM INC. is committed to delivering quality ICT and civil works solutions across the Philippines."}
          .btnLabel=${"Get in touch"}
          .target=${"contact"}
        ></site-banner>
        <home-departments       slot="departments"></home-departments>
        <site-services          slot="services"></site-services>
        <home-products-teaser   slot="products-teaser"></home-products-teaser>
        <site-clients           slot="clients"></site-clients>
        <site-about             slot="about"></site-about>
        <site-footer            slot="footer"></site-footer>
      </home-layout>
    `
  }
}

customElements.define('home-page', HomePage)
