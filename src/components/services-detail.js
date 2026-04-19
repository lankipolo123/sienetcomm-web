import { LitElement, html } from 'lit'
import { SERVICES, SERVICE_IMAGES } from '@/constants/services.js'

class ServicesDetail extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <section style="background: #f9fafb; padding: 72px 80px;">
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; max-width: 1200px; margin: 0 auto;">
          ${SERVICES.map((s, i) => html`
            <div style="
              border-radius: 20px;
              overflow: hidden;
              box-shadow: 0 4px 24px rgba(0,0,0,0.08);
              border: 1px solid #e5e7eb;
              background: white;
              display: flex;
              flex-direction: column;
            ">
              <!-- Image header with title overlay -->
              <div style="position: relative; min-height: 220px; background: url('${SERVICE_IMAGES[i]}') center/cover; flex-shrink: 0;">
                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(5,18,10,0.97) 0%, rgba(10,35,20,0.6) 55%, rgba(10,35,20,0.2) 100%);"></div>
                <div style="position: relative; z-index: 1; padding: 28px; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-end;">
                  <h2 style="font-size: 1.2rem; font-weight: 700; color: white; margin: 0 0 4px;">${s.title}</h2>
                  <p style="font-size: 0.65rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 2px; margin: 0 0 10px;">${s.subtitle}</p>
                  <p style="font-size: 0.8rem; color: rgba(255,255,255,0.75); line-height: 1.6; margin: 0;">${s.desc}</p>
                </div>
              </div>

              <!-- Capabilities list -->
              <div style="padding: 24px 28px; flex: 1;">
                <p style="font-size: 0.62rem; text-transform: uppercase; letter-spacing: 2.5px; color: #9ca3af; font-weight: 600; margin: 0 0 14px;">Capabilities</p>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                  ${s.items.map(item => html`
                    <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.82rem; color: #374151; line-height: 1.5;">
                      <span style="width: 18px; height: 18px; background: #f0faf3; border-radius: 5px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;">
                        <span style="width: 5px; height: 5px; border-radius: 50%; background: #1A6B2A; display: block;"></span>
                      </span>
                      ${item}
                    </li>
                  `)}
                </ul>
              </div>
            </div>
          `)}
        </div>
      </section>
    `
  }
}

customElements.define('services-detail', ServicesDetail)
