import { LitElement, html } from 'lit'
import { SERVICES } from '@/constants/services.js'
import '@/components/site-nav.js'
import '@/components/site-footer.js'

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1548407260-da850faa41e3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=900&q=80',
]

class ServicesPage extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <site-nav></site-nav>

      <!-- Page Hero -->
      <section style="
        position: relative;
        background:
          linear-gradient(135deg, rgba(10,35,20,0.95) 0%, rgba(26,107,42,0.85) 60%, rgba(20,82,36,0.8) 100%),
          url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=80') center/cover;
        padding: 80px 80px 60px;
      ">
        <span style="display: inline-block; background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.85); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; padding: 6px 14px; border-radius: 99px; margin-bottom: 20px;">
          What We Do
        </span>
        <h1 style="font-size: 3.2rem; font-weight: 800; color: white; line-height: 1.1; margin: 0 0 16px; max-width: 640px;">
          Our Services
        </h1>
        <p style="font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.75; max-width: 540px; margin: 0 0 40px;">
          SIENETCOMM delivers end-to-end ICT and civil works solutions across the Philippines —
          from enterprise communications to fiber infrastructure, civil construction, and tower engineering.
        </p>
        <div style="display: flex; gap: 40px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.15);">
          <div><div style="font-size: 2rem; font-weight: 700; color: #86efac;">50–100+</div><div style="font-size: 0.72rem; color: rgba(255,255,255,0.5); margin-top: 4px; text-transform: uppercase; letter-spacing: 1px;">Technical staff per project</div></div>
          <div><div style="font-size: 2rem; font-weight: 700; color: #86efac;">3</div><div style="font-size: 0.72rem; color: rgba(255,255,255,0.5); margin-top: 4px; text-transform: uppercase; letter-spacing: 1px;">Core departments</div></div>
          <div><div style="font-size: 2rem; font-weight: 700; color: #86efac;">16+</div><div style="font-size: 0.72rem; color: rgba(255,255,255,0.5); margin-top: 4px; text-transform: uppercase; letter-spacing: 1px;">Industries served</div></div>
        </div>
      </section>

      <!-- Services Detail -->
      <section style="background: #f9fafb; padding: 72px 80px;">
        <div style="display: flex; flex-direction: column; gap: 40px; max-width: 1200px; margin: 0 auto;">
          ${SERVICES.map((s, i) => html`
            <div style="
              display: grid;
              grid-template-columns: ${i % 2 === 0 ? '1fr 1.4fr' : '1.4fr 1fr'};
              border-radius: 20px;
              overflow: hidden;
              box-shadow: 0 4px 24px rgba(0,0,0,0.08);
              border: 1px solid #e5e7eb;
              background: white;
            ">

              ${i % 2 === 0 ? html`
                <!-- Image left -->
                <div style="
                  position: relative;
                  min-height: 380px;
                  background: url('${SERVICE_IMAGES[i]}') center/cover;
                ">
                  <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10,35,20,0.85) 0%, rgba(26,107,42,0.6) 100%);"></div>
                  <div style="position: relative; z-index: 1; padding: 40px; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-end;">
                    <div style="font-size: 3rem; margin-bottom: 14px;">${s.icon}</div>
                    <h2 style="font-size: 1.8rem; font-weight: 800; color: white; margin: 0 0 6px;">${s.title}</h2>
                    <p style="font-size: 0.75rem; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px;">${s.subtitle}</p>
                    <p style="font-size: 0.88rem; color: rgba(255,255,255,0.8); line-height: 1.7; margin: 0;">${s.desc}</p>
                  </div>
                </div>
                <!-- Capabilities right -->
                <div style="padding: 40px 44px;">
                  <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2.5px; color: #9ca3af; font-weight: 600; margin: 0 0 20px;">Capabilities</p>
                  <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
                    ${s.items.map(item => html`
                      <li style="display: flex; align-items: flex-start; gap: 12px; font-size: 0.875rem; color: #374151; line-height: 1.5;">
                        <span style="width: 20px; height: 20px; background: #f0faf3; border-radius: 6px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;">
                          <span style="width: 5px; height: 5px; border-radius: 50%; background: #1A6B2A; display: block;"></span>
                        </span>
                        ${item}
                      </li>
                    `)}
                  </ul>
                </div>
              ` : html`
                <!-- Capabilities left -->
                <div style="padding: 40px 44px;">
                  <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2.5px; color: #9ca3af; font-weight: 600; margin: 0 0 20px;">Capabilities</p>
                  <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
                    ${s.items.map(item => html`
                      <li style="display: flex; align-items: flex-start; gap: 12px; font-size: 0.875rem; color: #374151; line-height: 1.5;">
                        <span style="width: 20px; height: 20px; background: #f0faf3; border-radius: 6px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;">
                          <span style="width: 5px; height: 5px; border-radius: 50%; background: #1A6B2A; display: block;"></span>
                        </span>
                        ${item}
                      </li>
                    `)}
                  </ul>
                </div>
                <!-- Image right -->
                <div style="
                  position: relative;
                  min-height: 380px;
                  background: url('${SERVICE_IMAGES[i]}') center/cover;
                ">
                  <div style="position: absolute; inset: 0; background: linear-gradient(225deg, rgba(10,35,20,0.85) 0%, rgba(26,107,42,0.6) 100%);"></div>
                  <div style="position: relative; z-index: 1; padding: 40px; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-end;">
                    <div style="font-size: 3rem; margin-bottom: 14px;">${s.icon}</div>
                    <h2 style="font-size: 1.8rem; font-weight: 800; color: white; margin: 0 0 6px;">${s.title}</h2>
                    <p style="font-size: 0.75rem; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px;">${s.subtitle}</p>
                    <p style="font-size: 0.88rem; color: rgba(255,255,255,0.8); line-height: 1.7; margin: 0;">${s.desc}</p>
                  </div>
                </div>
              `}
            </div>
          `)}
        </div>
      </section>

      <!-- CTA Banner -->
      <section style="
        position: relative;
        background:
          linear-gradient(rgba(204,0,0,0.9), rgba(153,0,0,0.95)),
          url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=80') center/cover;
        padding: 72px 80px;
        text-align: center;
      ">
        <h2 style="font-size: 2.2rem; font-weight: 800; color: white; margin: 0 0 12px;">Ready to start your project?</h2>
        <p style="font-size: 1rem; color: rgba(255,255,255,0.8); margin: 0 0 36px; max-width: 480px; margin-left: auto; margin-right: auto;">
          Our engineering teams are on standby. Get a free consultation and quotation today.
        </p>
        <div style="display: flex; gap: 14px; justify-content: center;">
          <button
            @click=${() => window.location.hash = '#contact'}
            style="background: white; color: #CC0000; font-size: 0.95rem; font-weight: 700; padding: 14px 36px; border-radius: 12px; border: none; cursor: pointer;"
          >
            Contact Us
          </button>
          <a
            href="mailto:sales@sienetcomm.com"
            style="background: transparent; color: white; font-size: 0.95rem; font-weight: 500; padding: 14px 36px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.4); text-decoration: none; display: inline-block;"
          >
            Email Sales Team
          </a>
        </div>
      </section>

      <site-footer></site-footer>
    `
  }
}

customElements.define('services-page', ServicesPage)
