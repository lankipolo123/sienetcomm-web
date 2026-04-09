import { LitElement, html } from 'lit'
import { ABOUT_HERO_STATS } from '@/constants/departments.js'
import '@/layouts/page-layout.js'
import '@/components/site-nav.js'
import '@/components/page-hero.js'
import '@/components/about-content.js'
import '@/components/site-footer.js'

class AboutPage extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <page-layout>
        <site-nav slot="nav"></site-nav>

        <page-hero
          slot="hero"
          eyebrow="Who We Are"
          title="About SIENETCOMM INC."
          subtitle="Originally established as SieNet Communications Services over 16 years ago, we incorporated as SIENETCOMM INC. to better serve large enterprise and civil works projects across the Philippines."
          .stats=${ABOUT_HERO_STATS}
        ></page-hero>

        <about-content slot="content"></about-content>

        <site-footer slot="footer"></site-footer>
      </page-layout>
    `
  }
}

customElements.define('about-page', AboutPage)
