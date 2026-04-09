import { LitElement, html } from 'lit'
import '@/layouts/page-layout.js'
import '@/components/site-nav.js'
import '@/components/page-hero.js'
import '@/components/services-detail.js'
import '@/components/site-footer.js'

const HERO_STATS = [
  { value: '50–100+', label: 'Technical staff per project' },
  { value: '3',       label: 'Core departments' },
  { value: '16+',     label: 'Industries served' },
]

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
          .stats=${HERO_STATS}
        ></page-hero>

        <services-detail slot="content"></services-detail>

        <section slot="cta" style="
          position: relative;
          background:
            linear-gradient(rgba(204,0,0,0.9), rgba(153,0,0,0.95)),
            url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=80') center/cover;
          padding: 72px 80px; text-align: center;
        ">
          <h2 style="font-size: 2rem; font-weight: 700; color: white; margin: 0 0 12px;">Ready to start your project?</h2>
          <p style="font-size: 0.95rem; color: rgba(255,255,255,0.8); margin: 0 auto 32px; max-width: 480px;">
            Our engineering teams are on standby. Get a free consultation and quotation today.
          </p>
          <div style="display: flex; gap: 12px; justify-content: center;">
            <button
              @click=${() => window.location.hash = '#contact'}
              style="background: white; color: #CC0000; font-size: 0.9rem; font-weight: 700; padding: 13px 32px; border-radius: 10px; border: none; cursor: pointer;"
            >Contact Us</button>
            <a href="mailto:sales@sienetcomm.com"
              style="background: transparent; color: white; font-size: 0.9rem; font-weight: 500; padding: 13px 32px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.4); text-decoration: none; display: inline-block;"
            >Email Sales Team</a>
          </div>
        </section>

        <site-footer slot="footer"></site-footer>
      </page-layout>
    `
  }
}

customElements.define('services-page', ServicesPage)
