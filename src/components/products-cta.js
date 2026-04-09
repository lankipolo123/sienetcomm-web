import { LitElement, html } from 'lit'

class ProductsCta extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <section style="background: #111827; padding: 64px 80px; text-align: center;">
        <h2 style="font-size: 1.8rem; font-weight: 700; color: white; margin: 0 0 12px;">Need a specific product or brand?</h2>
        <p style="color: rgba(255,255,255,0.6); font-size: 0.95rem; line-height: 1.7; margin: 0 auto 32px; max-width: 600px;">
          We source, supply, and install equipment from hundreds of brands. Reach out with your requirements.
        </p>
        <nav style="display: flex; gap: 12px; justify-content: center;">
          <a
            href="mailto:sales@sienetcomm.com"
            style="background: #1A6B2A; color: white; font-size: 0.9rem; font-weight: 600; padding: 13px 32px; border-radius: 10px; text-decoration: none;"
          >Email Sales Team</a>
          <button
            @click=${() => window.location.hash = '#contact'}
            style="background: transparent; color: white; font-size: 0.9rem; padding: 13px 32px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.25); cursor: pointer;"
          >Contact Us</button>
        </nav>
      </section>
    `
  }
}

customElements.define('products-cta', ProductsCta)
