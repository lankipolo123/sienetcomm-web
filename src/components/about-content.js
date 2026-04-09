import { LitElement, html } from 'lit'
import { DEPARTMENTS } from '@/constants/departments.js'
import { WORKFORCE_SKILLS } from '@/constants/workforce.js'

class AboutContent extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`

      <!-- Mission & Vision -->
      <section style="background: white; padding: 72px 80px;">
        <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; font-weight: 600; margin: 0 0 10px;">Our Foundation</p>
        <h2 style="font-size: 2rem; font-weight: 700; color: #111827; margin: 0 0 40px;">Mission & Vision</h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
          <div style="background: linear-gradient(160deg, #0a2314 0%, #1A6B2A 100%); border-radius: 20px; padding: 40px;">
            <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 3px; color: rgba(255,255,255,0.5); font-weight: 600; margin: 0 0 16px;">Vision</p>
            <p style="font-size: 0.95rem; color: rgba(255,255,255,0.85); line-height: 1.8; margin: 0;">
              To be the leading ICT Service Provider using professional customer-oriented services and delivering enterprise
              business management products and solutions. To become one of the country's premier general construction services,
              making information and communication technology <strong style="color: #86efac;">affordable to our clients</strong> through
              continuous innovations and total quality management.
            </p>
          </div>

          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 20px; padding: 40px;">
            <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; font-weight: 600; margin: 0 0 16px;">Mission</p>
            <p style="font-size: 0.95rem; color: #374151; line-height: 1.8; margin: 0;">
              Success is not a destination — it is a journey. At SIENETCOMM INC, we understand the ongoing nature of this relationship
              and we've developed <strong style="color: #1A6B2A;">powerful long-term solutions</strong> that serve our customers'
              needs both now and in the future. We are committed to building partnerships that grow alongside our clients.
            </p>
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
              <div style="background: ${dept.color}; padding: 24px 28px;">
                <h3 style="font-size: 0.95rem; font-weight: 700; color: white; margin: 0 0 4px; line-height: 1.3;">${dept.name}</h3>
                <p style="font-size: 0.72rem; color: rgba(255,255,255,0.6); margin: 0;">${dept.lead}</p>
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
          ${WORKFORCE_SKILLS.map(domain => html`
            <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 14px; padding: 24px;">
              <h3 style="font-size: 0.85rem; font-weight: 700; color: #111827; margin: 0 0 14px; padding-bottom: 12px; border-bottom: 1px solid #e5e7eb;">${domain.domain}</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 7px;">
                ${domain.items.map(item => html`
                  <span style="background: white; border: 1px solid #d1d5db; color: #374151; font-size: 0.75rem; padding: 4px 10px; border-radius: 99px;">${item}</span>
                `)}
              </div>
            </div>
          `)}
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
