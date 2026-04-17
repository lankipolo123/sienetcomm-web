import { LitElement, html } from 'lit'
import { DEPARTMENTS } from '@/constants/departments.js'
import { WORKFORCE_SKILLS } from '@/constants/workforce.js'

const SKILL_COLORS = ['#1A6B2A', '#1A6B2A', '#1A6B2A', '#0a5c1e', '#CC0000', '#CC0000', '#b45309']

function skillIcon(i, color) {
  switch (i) {
    case 0: return html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
    case 1: return html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
    case 2: return html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`
    case 3: return html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
    case 4: return html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
    case 5: return html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg>`
    default: return html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
  }
}

class AboutContent extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`

      <!-- Mission & Vision -->
      <section style="background: white; padding: 72px 80px;">
        <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; font-weight: 600; margin: 0 0 10px;">Our Foundation</p>
        <h2 style="font-size: 2rem; font-weight: 700; color: #111827; margin: 0 0 40px;">Mission & Vision</h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">

          <!-- Vision card -->
          <div style="border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; background: linear-gradient(160deg, #0a2314 0%, #1A6B2A 100%);">
            <div style="position: relative; height: 180px; overflow: hidden; flex-shrink: 0;">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                alt="Digital network globe"
                style="width: 100%; height: 100%; object-fit: cover; opacity: 0.35;"
              />
              <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,35,20,0.9) 0%, transparent 60%); display: flex; align-items: flex-end; padding: 24px;">
                <div>
                  <p style="font-size: 0.6rem; text-transform: uppercase; letter-spacing: 3px; color: rgba(255,255,255,0.5); font-weight: 600; margin: 0 0 4px;">Vision</p>
                  <h3 style="font-size: 1.2rem; font-weight: 700; color: white; margin: 0;">Where we are headed</h3>
                </div>
              </div>
            </div>
            <div style="padding: 32px; flex: 1; display: flex; gap: 16px; align-items: flex-start;">
              <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#86efac" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <p style="font-size: 0.93rem; color: rgba(255,255,255,0.85); line-height: 1.85; margin: 0;">
                To be the leading ICT Service Provider using professional customer-oriented services and delivering enterprise
                business management products and solutions — making information and communication technology
                <strong style="color: #86efac;">affordable to our clients</strong> through continuous innovations
                and total quality management.
              </p>
            </div>
          </div>

          <!-- Mission card -->
          <div style="border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; border: 1px solid #e5e7eb;">
            <div style="position: relative; height: 180px; overflow: hidden; flex-shrink: 0;">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                style="width: 100%; height: 100%; object-fit: cover;"
              />
              <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(249,250,251,1) 0%, rgba(249,250,251,0.15) 55%, transparent 100%); display: flex; align-items: flex-end; padding: 24px;">
                <div>
                  <p style="font-size: 0.6rem; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; font-weight: 600; margin: 0 0 4px;">Mission</p>
                  <h3 style="font-size: 1.2rem; font-weight: 700; color: #111827; margin: 0;">How we get there</h3>
                </div>
              </div>
            </div>
            <div style="padding: 32px; flex: 1; background: #f9fafb; display: flex; gap: 16px; align-items: flex-start;">
              <div style="width: 38px; height: 38px; border-radius: 10px; background: #dcfce7; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A6B2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <p style="font-size: 0.93rem; color: #374151; line-height: 1.85; margin: 0;">
                Success is not a destination — it is a journey. At SIENETCOMM INC, we understand the ongoing nature
                of this relationship and we've developed <strong style="color: #1A6B2A;">powerful long-term solutions</strong>
                that serve our customers' needs both now and in the future. We are committed to building partnerships
                that grow alongside our clients.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- Departments -->
      <section style="background: #f9fafb; padding: 72px 80px;">
        <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; font-weight: 600; margin: 0 0 10px;">Our Structure</p>
        <h2 style="font-size: 2rem; font-weight: 700; color: #111827; margin: 0 0 10px;">Operational Departments</h2>
        <p style="font-size: 0.95rem; color: #6b7280; margin: 0 0 40px; max-width: 560px;">
          Three specialized departments capable of deploying 50–100 technical personnel per project with auxiliary equipment support.
        </p>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
          ${DEPARTMENTS.map(dept => html`
            <div style="background: white; border-radius: 20px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
              <div style="position: relative; height: 160px; overflow: hidden;">
                <img
                  src="${dept.img}"
                  alt="${dept.name}"
                  style="width: 100%; height: 100%; object-fit: cover;"
                />
                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.1) 100%);"></div>
                <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 16px 22px;">
                  <span style="display: inline-block; background: ${dept.color}; border-radius: 5px; padding: 2px 9px; margin-bottom: 6px; font-size: 0.58rem; font-weight: 700; color: white; text-transform: uppercase; letter-spacing: 1px;">Department</span>
                  <h3 style="font-size: 0.95rem; font-weight: 700; color: white; margin: 0 0 2px; line-height: 1.3;">${dept.name}</h3>
                  <p style="font-size: 0.68rem; color: rgba(255,255,255,0.65); margin: 0;">${dept.lead}</p>
                </div>
              </div>
              <div style="padding: 24px 28px;">
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 9px;">
                  ${dept.skills.map(skill => html`
                    <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.82rem; color: #4b5563; line-height: 1.5;">
                      <span style="width: 5px; height: 5px; border-radius: 50%; background: ${dept.color}; flex-shrink: 0; margin-top: 7px;"></span>
                      ${skill}
                    </li>
                  `)}
                </ul>
              </div>
            </div>
          `)}
        </div>

        <div style="margin-top: 28px; background: linear-gradient(135deg, #0a2314 0%, #1A6B2A 100%); border-radius: 16px; padding: 28px 40px; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;">
          <div>
            <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.5); font-weight: 600; margin: 0 0 6px;">Manpower Support</p>
            <h3 style="font-size: 1.2rem; font-weight: 700; color: white; margin: 0 0 6px;">50–100 Technical Staff Per Project</h3>
            <p style="font-size: 0.875rem; color: rgba(255,255,255,0.7); margin: 0;">
              Deploy auxiliary equipment, OSP, Electrical, and Civil Works manpower to any site nationwide.
            </p>
          </div>
          <button
            @click=${() => window.location.hash = '#contact'}
            style="background: white; color: #1A6B2A; font-size: 0.85rem; font-weight: 600; padding: 12px 28px; border-radius: 10px; border: none; cursor: pointer; flex-shrink: 0;"
          >
            Request Manpower
          </button>
        </div>
      </section>

      <!-- Workforce Skills -->
      <section style="background: white; padding: 72px 80px;">
        <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; font-weight: 600; margin: 0 0 10px;">Technical Expertise</p>
        <h2 style="font-size: 2rem; font-weight: 700; color: #111827; margin: 0 0 10px;">Workforce Skills</h2>
        <p style="font-size: 0.95rem; color: #6b7280; margin: 0 0 40px; max-width: 560px;">
          Our engineers and technicians are certified across a broad range of ICT, electrical, and civil disciplines.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">
          ${WORKFORCE_SKILLS.map((domain, i) => {
            const color = SKILL_COLORS[i] ?? '#1A6B2A'
            return html`
              <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 14px; overflow: hidden;">
                <div style="padding: 18px 22px; background: white; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; gap: 12px;">
                  <div style="width: 36px; height: 36px; border-radius: 10px; background: ${color}1a; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    ${skillIcon(i, color)}
                  </div>
                  <h3 style="font-size: 0.85rem; font-weight: 700; color: #111827; margin: 0;">${domain.domain}</h3>
                </div>
                <div style="padding: 16px 22px;">
                  <div style="display: flex; flex-wrap: wrap; gap: 7px;">
                    ${domain.items.map(item => html`
                      <span style="background: white; border: 1px solid #d1d5db; color: #374151; font-size: 0.75rem; padding: 4px 10px; border-radius: 99px;">${item}</span>
                    `)}
                  </div>
                </div>
              </div>
            `
          })}
        </div>
      </section>

      <!-- Registration -->
      <section style="background: #f9fafb; padding: 48px 80px; border-top: 1px solid #e5e7eb;">
        <div style="max-width: 700px; margin: 0 auto; text-align: center;">
          <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; font-weight: 600; margin: 0 0 20px;">Legal & Registration</p>
          <div style="display: flex; gap: 24px; justify-content: center; flex-wrap: wrap;">
            <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px 32px; text-align: center;">
              <p style="font-size: 0.65rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 6px;">SEC Reg. No.</p>
              <p style="font-size: 0.9rem; font-weight: 600; color: #111827; margin: 0;">2024040144132-00</p>
              <p style="font-size: 0.75rem; color: #9ca3af; margin: 4px 0 0;">Incorporated April 2, 2024</p>
            </div>
            <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px 32px; text-align: center;">
              <p style="font-size: 0.65rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 6px;">TIN</p>
              <p style="font-size: 0.9rem; font-weight: 600; color: #111827; margin: 0;">648-143-823-00000</p>
              <p style="font-size: 0.75rem; color: #9ca3af; margin: 4px 0 0;">Bureau of Internal Revenue</p>
            </div>
            <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px 32px; text-align: center;">
              <p style="font-size: 0.65rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 6px;">Operations Since</p>
              <p style="font-size: 0.9rem; font-weight: 600; color: #111827; margin: 0;">16+ Years</p>
              <p style="font-size: 0.75rem; color: #9ca3af; margin: 4px 0 0;">Formerly SieNet Communications</p>
            </div>
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('about-content', AboutContent)
