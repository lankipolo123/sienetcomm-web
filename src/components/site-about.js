import { LitElement, html } from 'lit'
import '@/components/registration-card.js'

const STATS = [
  {
    value: 'Est. 2008',
    label: 'In operation',
    icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  },
  {
    value: '3',
    label: 'Core departments',
    icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
  },
  {
    value: '50–100+',
    label: 'Technical staff per project',
    icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    value: 'Nationwide',
    label: 'Luzon · Visayas · Mindanao',
    icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  },
]

class SiteAbout extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <section data-section="about" class="px-10 py-16" style="background: #145224;">

        <!-- centered intro -->
        <div class="text-center mx-auto mb-10" style="max-width: 620px;">
          <p class="text-xs uppercase tracking-widest mb-2" style="color: #CC0000;">Who we are</p>
          <h2 class="text-3xl font-semibold mb-5 text-white">About SIENETCOMM</h2>
          <p class="text-sm leading-relaxed" style="color: rgba(255,255,255,0.75);">
            Originally founded as SieNet Communications Services, we incorporated as
            SIENETCOMM INC. to better serve large enterprise and civil works projects.
            Committed to quality service and innovative delivery across the full ICT
            and construction spectrum — making technology affordable through continuous
            innovation and total quality management.
          </p>
        </div>

        <!-- stats row -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(255,255,255,0.12); border-radius: 16px; overflow: hidden; margin-bottom: 28px;">
          ${STATS.map(s => html`
            <div style="background: rgba(0,0,0,0.2); padding: 22px 16px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <div style="color: rgba(255,255,255,0.55);">${s.icon}</div>
              <p style="font-size: 1.15rem; font-weight: 700; color: white; margin: 0;">${s.value}</p>
              <p style="font-size: 0.7rem; color: rgba(255,255,255,0.5); margin: 0; line-height: 1.4;">${s.label}</p>
            </div>
          `)}
        </div>

        <!-- card row -->
        <div class="flex flex-row gap-3 flex-wrap justify-center items-stretch">

          <!-- Headquarters card -->
          <div class="flex-1 self-stretch" style="min-width: 260px; background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; overflow: hidden;">
            <div style="padding: 18px 20px 14px;">
              <p style="font-size: 0.6rem; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.45); margin: 0 0 4px;">Office</p>
              <h3 style="font-size: 0.95rem; font-weight: 700; color: white; margin: 0 0 10px;">Headquarters</h3>
              <p style="font-size: 0.82rem; color: rgba(255,255,255,0.7); line-height: 1.65; margin: 0 0 14px;">
                Unit 3D Julia C. Pascual Realty<br>
                No. 2 Kadalagahan St.<br>
                Dolores, Taytay, Rizal 1920
              </p>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Kadalagahan+St+Dolores+Taytay+Rizal+Philippines&output=embed"
              width="100%" height="180"
              style="border: none; display: block;"
              loading="lazy"
            ></iframe>
          </div>

          <!-- Coverage card -->
          <div class="flex-1 self-stretch" style="min-width: 260px; background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; overflow: hidden;">
            <div style="padding: 18px 20px 14px;">
              <p style="font-size: 0.6rem; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.45); margin: 0 0 4px;">Reach</p>
              <h3 style="font-size: 0.95rem; font-weight: 700; color: white; margin: 0 0 10px;">Coverage</h3>
              <p style="font-size: 0.82rem; color: rgba(255,255,255,0.7); line-height: 1.65; margin: 0 0 14px;">
                Luzon · Visayas · Mindanao<br>
                Nationwide project deployment<br>
                across the Philippines
              </p>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Philippines&output=embed"
              width="100%" height="180"
              style="border: none; display: block;"
              loading="lazy"
            ></iframe>
          </div>

          <registration-card
            class="flex-1 self-stretch"
            secNo="2024040144132-00"
            tin="648-143-823-00000"
          ></registration-card>

        </div>

      </section>
    `
  }
}

customElements.define('site-about', SiteAbout)
