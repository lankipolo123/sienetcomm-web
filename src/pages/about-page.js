import { LitElement, html } from 'lit'
import '@/components/site-nav.js'
import '@/components/site-footer.js'

const DEPARTMENTS = [
  {
    name: 'Enterprise Network Department',
    icon: '📡',
    color: '#1A6B2A',
    lead: 'Wilfredo Villen — Operations Manager',
    skills: [
      'IP/TDM PABX Systems (Avaya, Mitel, NEC)',
      'Security Systems — CCTV, Access Control, Paging',
      'IP Radio & Wireless Backhaul',
      'Fire Alarm & Detection Systems (FDAS)',
      'Audio Visual System Integration',
      'Car Parking Systems & Digital Signage',
      'Data Center Infrastructure',
      'Structured Cabling — Voice & Data',
    ],
  },
  {
    name: 'OSP Department',
    icon: '🔧',
    color: '#0a5c1e',
    lead: 'Immanuel Alcantara — Operations Manager',
    skills: [
      'OSP Fiber Optic & Copper Cabling',
      'Aerial & Underground Installation',
      'Fiber Optic Splicing & Auditing',
      'Civil Planning, Design & Development',
      'Inside Plant (ISP) Cabling',
      'Network Testing & Certification',
    ],
  },
  {
    name: 'Civil Works Department',
    icon: '🏗️',
    color: '#CC0000',
    lead: 'Dindo Vibar — Operations Manager',
    skills: [
      'Tower Design & Construction',
      'Civil Planning, Design & Construction',
      'Cell Site Development',
      'Fabrication & Installation',
      'Housing & Warehouse Construction',
      'Asphalt & Road Widening',
      'Foundation & Structural Works',
      'Electrical Planning & Installation',
    ],
  },
]

const WORKFORCE_SKILLS = [
  {
    domain: 'Avaya IP PBX',
    items: ['IP Office 500', 'Communication Managers', 'Unified Communications', 'Call Center Applications', 'Wireless/Mobile Solutions'],
  },
  {
    domain: 'Partner Applications',
    items: ['Call Accounting', 'Voice Messaging', 'Intervoice IVRS', 'VoIP Gateways', 'Voice Recording', 'CCTV Systems', 'Sonicwall', 'Fujifilm', 'HPE', 'Fluke Networks', 'Wireless Backhaul', 'AV Systems'],
  },
  {
    domain: 'Infrastructure Cabling',
    items: ['Panduit', 'Commscope', 'Belden', 'Vivanco', 'LS Cable', 'Linkbasic', 'Cisco Routers & Networking', 'Voice & Data Cabling'],
  },
  {
    domain: 'OSP',
    items: ['Copper Cable Layout & Installation', 'Fiber Optic Layout & Installation', 'Aerial & Underground Works', 'Fiber Splicing & Testing'],
  },
  {
    domain: 'Civil Works',
    items: ['Civil Planning, Design & Construction', 'Housing & Warehouses', 'Asphalt & Road Widening', 'Foundation Works'],
  },
  {
    domain: 'Tower Construction',
    items: ['Tower Design & Construction', 'Cell Site Fabrication & Erection', 'Tower Structural Assessment'],
  },
  {
    domain: 'Electrical',
    items: ['Electrical Planning', 'Electrical Design', 'Electrical Installation', 'Power Systems'],
  },
]

class AboutPage extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <site-nav></site-nav>

      <!-- Hero -->
      <section style="background: linear-gradient(135deg, #0a2314 0%, #1A6B2A 60%, #145224 100%); padding: 80px 80px 60px;">
        <span style="display: inline-block; background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.85); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; padding: 6px 14px; border-radius: 99px; margin-bottom: 20px;">
          Who We Are
        </span>
        <h1 style="font-size: 3rem; font-weight: 700; color: white; line-height: 1.1; margin: 0 0 20px; max-width: 640px;">
          About SIENETCOMM INC.
        </h1>
        <p style="font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.8; max-width: 580px; margin: 0 0 40px;">
          Originally established as SieNet Communications Services — a sole proprietorship — over 16 years ago,
          we incorporated as SIENETCOMM INC. to better serve large enterprise and civil works projects across the Philippines.
          We are a general contracting firm operating across ICT and civil construction.
        </p>
        <div style="display: flex; gap: 32px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.15);">
          <div><div style="font-size: 2rem; font-weight: 700; color: #86efac;">16+</div><div style="font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 4px;">Years in operation</div></div>
          <div><div style="font-size: 2rem; font-weight: 700; color: #86efac;">3</div><div style="font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 4px;">Core departments</div></div>
          <div><div style="font-size: 2rem; font-weight: 700; color: #86efac;">50–100+</div><div style="font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 4px;">Technical staff deployable</div></div>
          <div><div style="font-size: 2rem; font-weight: 700; color: #86efac;">Nationwide</div><div style="font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 4px;">Luzon, Visayas, Mindanao</div></div>
        </div>
      </section>

      <!-- Mission & Vision -->
      <section style="background: white; padding: 72px 80px;">
        <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; font-weight: 600; margin: 0 0 12px;">Our Foundation</p>
        <h2 style="font-size: 2rem; font-weight: 700; color: #111827; margin: 0 0 48px;">Mission & Vision</h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px;">

          <!-- Vision -->
          <div style="background: linear-gradient(160deg, #0a2314 0%, #1A6B2A 100%); border-radius: 20px; padding: 40px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
              <div style="width: 36px; height: 36px; background: rgba(255,255,255,0.15); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">🎯</div>
              <h3 style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: rgba(255,255,255,0.6); margin: 0; font-weight: 600;">Vision</h3>
            </div>
            <p style="font-size: 0.95rem; color: rgba(255,255,255,0.85); line-height: 1.8; margin: 0;">
              To be the leading ICT Service Provider using professional customer-oriented services and delivering enterprise
              business management products and solutions. To become one of the country's premier general construction services,
              making information and communication technology <strong style="color: #86efac;">affordable to our clients</strong> through
              continuous innovations and total quality management.
            </p>
          </div>

          <!-- Mission -->
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 20px; padding: 40px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
              <div style="width: 36px; height: 36px; background: #f0faf3; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">🚀</div>
              <h3 style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; margin: 0; font-weight: 600;">Mission</h3>
            </div>
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
        <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; font-weight: 600; margin: 0 0 12px;">Our Structure</p>
        <h2 style="font-size: 2rem; font-weight: 700; color: #111827; margin: 0 0 12px;">Operational Departments</h2>
        <p style="font-size: 0.95rem; color: #6b7280; margin: 0 0 48px; max-width: 560px;">
          SIENETCOMM operates through three specialized departments, each capable of deploying
          50–100 technical personnel per project with auxiliary equipment support.
        </p>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
          ${DEPARTMENTS.map(dept => html`
            <div style="background: white; border-radius: 20px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
              <div style="background: ${dept.color}; padding: 28px 28px 24px;">
                <div style="font-size: 2.5rem; margin-bottom: 14px;">${dept.icon}</div>
                <h3 style="font-size: 1rem; font-weight: 700; color: white; margin: 0 0 6px; line-height: 1.3;">${dept.name}</h3>
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

        <!-- Manpower callout -->
        <div style="margin-top: 32px; background: linear-gradient(135deg, #0a2314 0%, #1A6B2A 100%); border-radius: 16px; padding: 32px 40px; display: flex; align-items: center; justify-content: space-between; gap: 24px;">
          <div>
            <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.5); font-weight: 600; margin: 0 0 6px;">Manpower Support</p>
            <h3 style="font-size: 1.3rem; font-weight: 700; color: white; margin: 0 0 6px;">
              50–100 Technical Staff Per Project
            </h3>
            <p style="font-size: 0.875rem; color: rgba(255,255,255,0.7); margin: 0;">
              We can deploy auxiliary equipment, OSP, Electrical, and Civil Works manpower to any site nationwide.
            </p>
          </div>
          <button
            @click=${() => window.location.hash = '#contact'}
            style="background: white; color: #1A6B2A; font-size: 0.85rem; font-weight: 600; padding: 12px 28px; border-radius: 10px; border: none; cursor: pointer; flex-shrink: 0;"
          >
            Request Manpower →
          </button>
        </div>
      </section>

      <!-- Workforce Skills -->
      <section style="background: white; padding: 72px 80px;">
        <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; font-weight: 600; margin: 0 0 12px;">Technical Expertise</p>
        <h2 style="font-size: 2rem; font-weight: 700; color: #111827; margin: 0 0 12px;">Workforce Skills</h2>
        <p style="font-size: 0.95rem; color: #6b7280; margin: 0 0 48px; max-width: 560px;">
          Our engineers and technicians are certified and experienced across a broad range of ICT, electrical, and civil disciplines.
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

      <site-footer></site-footer>
    `
  }
}

customElements.define('about-page', AboutPage)
