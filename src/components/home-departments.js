import { LitElement, html } from 'lit'
import { DEPARTMENTS } from '@/constants/departments.js'

class HomeDepartments extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <section style="background: #111827; padding: 72px 80px;">

        <header style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 20px;">
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
            Learn more
          </button>
        </header>

        <ul style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; list-style: none; padding: 0; margin: 0;">
          ${DEPARTMENTS.map(dept => html`
            <li style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; overflow: hidden;">
              <figure style="height: 180px; background: url('${dept.img}') center/cover; position: relative; margin: 0;">
                <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(10,35,20,0.9));"></div>
                <figcaption style="position: absolute; bottom: 16px; left: 20px;">
                  <h3 style="font-size: 1rem; font-weight: 700; color: white; margin: 0;">${dept.name}</h3>
                </figcaption>
              </figure>
              <footer style="padding: 20px; display: flex; flex-wrap: wrap; gap: 6px;">
                ${dept.skills.map(skill => html`
                  <span style="background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.65); font-size: 0.72rem; padding: 4px 10px; border-radius: 99px; border: 1px solid rgba(255,255,255,0.1);">${skill}</span>
                `)}
              </footer>
            </li>
          `)}
        </ul>

        <aside style="margin-top: 24px; background: #1A6B2A; border-radius: 12px; padding: 20px 28px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
          <p style="font-size: 0.9rem; color: rgba(255,255,255,0.85); margin: 0;">
            <strong style="font-size: 1.5rem; color: white; margin-right: 10px;">50–100+</strong>
            Technical staff deployable per project — nationwide, any terrain.
          </p>
          <button
            @click=${() => window.location.hash = '#contact'}
            style="background: white; color: #1A6B2A; font-size: 0.82rem; font-weight: 600; padding: 10px 22px; border-radius: 8px; border: none; cursor: pointer; flex-shrink: 0;"
          >
            Request deployment
          </button>
        </aside>

      </section>
    `
  }
}

customElements.define('home-departments', HomeDepartments)
