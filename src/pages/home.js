import { LitElement, html } from 'lit'
import '@/layouts/home-layout.js'
import '@/components/site-nav.js'
import '@/components/site-hero.js'
import '@/components/site-banner.js'
import '@/components/site-services.js'
import '@/components/site-clients.js'
import '@/components/site-about.js'
import '@/components/site-contact.js'
import '@/components/site-footer.js'
import { PRODUCTS } from '@/constants/products.js'

const DEPARTMENTS = [
  {
    name: 'Enterprise Network',
    icon: '📡',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    skills: ['IP/TDM PABX', 'Structured Cabling', 'CCTV & Access Control', 'FDAS & AV Systems', 'Data Center'],
  },
  {
    name: 'OSP Department',
    icon: '🔧',
    img: 'https://images.unsplash.com/photo-1548407260-da850faa41e3?auto=format&fit=crop&w=600&q=80',
    skills: ['Fiber Optic & Copper OSP', 'Fiber Splicing & Auditing', 'Aerial & Underground Cabling', 'Civil Planning & Design'],
  },
  {
    name: 'Civil Works',
    icon: '🏗️',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    skills: ['Cell Site Construction', 'Tower Design & Erection', 'Civil & Foundation Works', 'Electrical Installation'],
  },
]

class HomePage extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <home-layout>

        <site-nav slot="nav"></site-nav>

        <site-hero slot="hero"></site-hero>

        <site-banner
          slot="banner-top"
          .heading=${"SIENETCOMM INC. is committed to delivering quality ICT and civil works solutions across the Philippines."}
          .btnLabel=${"Get in touch"}
          .target=${"contact"}
        ></site-banner>

        <!-- Departments Section (NEW) -->
        <section slot="departments" style="background: #111827; padding: 72px 80px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 20px;">
            <div>
              <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: rgba(255,255,255,0.4); font-weight: 600; margin: 0 0 10px;">Our Structure</p>
              <h2 style="font-size: 2rem; font-weight: 700; color: white; margin: 0 0 10px;">3 Operational Departments</h2>
              <p style="font-size: 0.9rem; color: rgba(255,255,255,0.55); margin: 0; max-width: 460px;">
                Capable of deploying 50–100 technical staff per project with auxiliary equipment, OSP, Electrical, and Civil Works support.
              </p>
            </div>
            <button
              @click=${() => window.location.hash = '#about'}
              style="background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.8); font-size: 0.85rem; padding: 11px 24px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.15); cursor: pointer; white-space: nowrap;"
            >
              Meet our team →
            </button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
            ${DEPARTMENTS.map(dept => html`
              <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; overflow: hidden;">
                <div style="height: 180px; background: url('${dept.img}') center/cover; position: relative;">
                  <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(10,35,20,0.9));"></div>
                  <div style="position: absolute; bottom: 16px; left: 20px;">
                    <span style="font-size: 1.5rem;">${dept.icon}</span>
                    <h3 style="font-size: 1rem; font-weight: 700; color: white; margin: 4px 0 0;">${dept.name}</h3>
                  </div>
                </div>
                <div style="padding: 20px;">
                  <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    ${dept.skills.map(skill => html`
                      <span style="background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.65); font-size: 0.72rem; padding: 4px 10px; border-radius: 99px; border: 1px solid rgba(255,255,255,0.1);">${skill}</span>
                    `)}
                  </div>
                </div>
              </div>
            `)}
          </div>

          <!-- Manpower strip -->
          <div style="margin-top: 24px; background: #1A6B2A; border-radius: 12px; padding: 20px 28px; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
            <div style="display: flex; align-items: center; gap: 16px;">
              <span style="font-size: 1.8rem; font-weight: 700; color: white;">50–100+</span>
              <span style="font-size: 0.9rem; color: rgba(255,255,255,0.8);">Technical staff deployable per project — nationwide, any terrain.</span>
            </div>
            <button
              @click=${() => window.location.hash = '#contact'}
              style="background: white; color: #1A6B2A; font-size: 0.82rem; font-weight: 600; padding: 10px 22px; border-radius: 8px; border: none; cursor: pointer; flex-shrink: 0;"
            >
              Request deployment
            </button>
          </div>
        </section>

        <site-services slot="services"></site-services>

        <!-- Products Teaser (NEW) -->
        <section slot="products-teaser" style="background: #f0faf3; padding: 72px 80px; border-top: 1px solid #d1fae5; border-bottom: 1px solid #d1fae5;">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 20px;">
            <div>
              <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: #6b7280; font-weight: 600; margin: 0 0 10px;">Brand Partners</p>
              <h2 style="font-size: 2rem; font-weight: 700; color: #111827; margin: 0 0 10px;">Products We Supply & Install</h2>
              <p style="font-size: 0.9rem; color: #6b7280; margin: 0; max-width: 480px;">
                From IP PBX systems and CCTV to fire alarms, AV equipment, and UPS — we source and install from 60+ world-class brands across 14 categories.
              </p>
            </div>
            <button
              @click=${() => window.location.hash = '#products'}
              style="background: #1A6B2A; color: white; font-size: 0.85rem; font-weight: 600; padding: 11px 24px; border-radius: 10px; border: none; cursor: pointer; white-space: nowrap;"
            >
              View all brands →
            </button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;">
            ${PRODUCTS.slice(0, 8).map(p => html`
              <div
                style="background: white; border: 1px solid #e5e7eb; border-radius: 14px; padding: 20px; cursor: pointer; transition: box-shadow 0.2s;"
                @click=${() => window.location.hash = '#products'}
              >
                <div style="font-size: 1.8rem; margin-bottom: 10px;">${p.icon}</div>
                <h3 style="font-size: 0.8rem; font-weight: 600; color: #111827; margin: 0 0 8px; line-height: 1.3;">${p.category}</h3>
                <p style="font-size: 0.72rem; color: #9ca3af; margin: 0;">${p.brands.slice(0, 3).join(', ')}${p.brands.length > 3 ? ` +${p.brands.length - 3} more` : ''}</p>
              </div>
            `)}
          </div>
        </section>

        <site-clients slot="clients"></site-clients>

        <site-about slot="about"></site-about>

        <site-contact slot="contact"></site-contact>

        <site-footer slot="footer"></site-footer>

      </home-layout>
    `
  }
}

customElements.define('home-page', HomePage)
