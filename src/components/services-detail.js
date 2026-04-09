import { LitElement, html } from 'lit'
import { SERVICES } from '@/constants/services.js'

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1548407260-da850faa41e3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=900&q=80',
]

class ServicesDetail extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
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
                <div style="position: relative; min-height: 360px; background: url('${SERVICE_IMAGES[i]}') center/cover;">
                  <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10,35,20,0.88) 0%, rgba(26,107,42,0.6) 100%);"></div>
                  <div style="position: relative; z-index: 1; padding: 40px; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-end;">
                    <h2 style="font-size: 1.6rem; font-weight: 700; color: white; margin: 0 0 6px;">${s.title}</h2>
                    <p style="font-size: 0.72rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 2px; margin: 0 0 14px;">${s.subtitle}</p>
                    <p style="font-size: 0.875rem; color: rgba(255,255,255,0.78); line-height: 1.7; margin: 0;">${s.desc}</p>
                  </div>
                </div>
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
                <div style="position: relative; min-height: 360px; background: url('${SERVICE_IMAGES[i]}') center/cover;">
                  <div style="position: absolute; inset: 0; background: linear-gradient(225deg, rgba(10,35,20,0.88) 0%, rgba(26,107,42,0.6) 100%);"></div>
                  <div style="position: relative; z-index: 1; padding: 40px; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-end;">
                    <h2 style="font-size: 1.6rem; font-weight: 700; color: white; margin: 0 0 6px;">${s.title}</h2>
                    <p style="font-size: 0.72rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 2px; margin: 0 0 14px;">${s.subtitle}</p>
                    <p style="font-size: 0.875rem; color: rgba(255,255,255,0.78); line-height: 1.7; margin: 0;">${s.desc}</p>
                  </div>
                </div>
              `}
            </div>
          `)}
        </div>
      </section>
    `
  }
}

customElements.define('services-detail', ServicesDetail)
