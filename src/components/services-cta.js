import { LitElement, html } from 'lit'

class ServicesCta extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <section style="
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
        <nav style="display: flex; gap: 12px; justify-content: center;">
          <button
            @click=${() => window.location.hash = '#contact'}
            style="background: white; color: #CC0000; font-size: 0.9rem; font-weight: 700; padding: 13px 32px; border-radius: 10px; border: none; cursor: pointer;"
          >Contact Us</button>
          <a
            href="mailto:sales@sienetcomm.com"
            style="background: transparent; color: white; font-size: 0.9rem; font-weight: 500; padding: 13px 32px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.4); text-decoration: none; display: inline-block;"
          >Email Sales Team</a>
        </nav>
      </section>
    `
  }
}

customElements.define('services-cta', ServicesCta)
