import { LitElement, html } from 'lit'
import { SERVICES, SERVICE_IMAGES } from '@/constants/services.js'

class SiteServices extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <section data-section="services" style="background: white; padding: 72px 80px; border-bottom: 1px solid #f0f0f0;">

        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; flex-wrap: wrap; gap: 20px;">
          <div>
            <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; font-weight: 600; margin: 0 0 10px;">What We Do</p>
            <h2 style="font-size: 2rem; font-weight: 700; color: #111827; margin: 0 0 10px;">Our Services</h2>
            <p style="font-size: 0.9rem; color: #6b7280; margin: 0; max-width: 460px;">
              End-to-end ICT and civil works solutions across enterprise networks, fiber infrastructure, construction, and tower engineering.
            </p>
          </div>
          <button
            @click=${() => window.location.hash = '#services'}
            style="background: #1A6B2A; color: white; font-size: 0.85rem; font-weight: 600; padding: 11px 24px; border-radius: 10px; border: none; cursor: pointer; white-space: nowrap;"
          >
            View full details
          </button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
          ${SERVICES.map((s, i) => html`
            <div
              style="
                position: relative;
                border-radius: 18px;
                overflow: hidden;
                cursor: pointer;
                min-height: 280px;
                background: url('${SERVICE_IMAGES[i]}') center/cover;
              "
              @click=${() => window.location.hash = '#services'}
            >
              <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,35,20,0.95) 0%, rgba(10,35,20,0.4) 60%, rgba(0,0,0,0.1) 100%);"></div>
              <div style="position: relative; z-index: 1; padding: 28px; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; box-sizing: border-box;">
                <h3 style="font-size: 1.1rem; font-weight: 700; color: white; margin: 0 0 5px;">${s.title}</h3>
                <p style="font-size: 0.75rem; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 14px;">${s.subtitle}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                  ${s.items.slice(0, 3).map(item => html`
                    <span style="background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.8); font-size: 0.7rem; padding: 3px 10px; border-radius: 99px; border: 1px solid rgba(255,255,255,0.15);">${item.split('/')[0].trim()}</span>
                  `)}
                  <span style="background: rgba(26,107,42,0.6); color: rgba(255,255,255,0.9); font-size: 0.7rem; padding: 3px 10px; border-radius: 99px;">+${s.items.length - 3} more</span>
                </div>
              </div>
            </div>
          `)}
        </div>

      </section>
    `
  }
}

customElements.define('site-services', SiteServices)
