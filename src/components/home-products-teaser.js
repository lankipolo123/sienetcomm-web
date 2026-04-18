import { LitElement, html } from 'lit'
import { PRODUCTS } from '@/constants/products.js'

function productIcon(category, color) {
  const s = `width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`
  if (category.includes('PBX') || category.includes('Telephony') || category.includes('Communications'))
    return html`<svg xmlns="http://www.w3.org/2000/svg" ${s}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
  if (category.includes('CCTV') || category.includes('Surveillance'))
    return html`<svg xmlns="http://www.w3.org/2000/svg" ${s}><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`
  if (category.includes('Cabling') || category.includes('Infrastructure'))
    return html`<svg xmlns="http://www.w3.org/2000/svg" ${s}><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`
  if (category.includes('Building Automation'))
    return html`<svg xmlns="http://www.w3.org/2000/svg" ${s}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  if (category.includes('Fire') || category.includes('Alarm') || category.includes('Sprinkler'))
    return html`<svg xmlns="http://www.w3.org/2000/svg" ${s}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`
  if (category.includes('Radio') || category.includes('Wireless'))
    return html`<svg xmlns="http://www.w3.org/2000/svg" ${s}><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg>`
  if (category.includes('Turnstile') || category.includes('Access') || category.includes('Biometric') || category.includes('Gate'))
    return html`<svg xmlns="http://www.w3.org/2000/svg" ${s}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
  if (category.includes('Security') || category.includes('X-Ray') || category.includes('Detection'))
    return html`<svg xmlns="http://www.w3.org/2000/svg" ${s}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  if (category.includes('Audio') || category.includes('Visual') || category.includes('AV'))
    return html`<svg xmlns="http://www.w3.org/2000/svg" ${s}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`
  if (category.includes('Signage') || category.includes('Digital'))
    return html`<svg xmlns="http://www.w3.org/2000/svg" ${s}><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
  if (category.includes('Battery') || category.includes('UPS') || category.includes('AVR'))
    return html`<svg xmlns="http://www.w3.org/2000/svg" ${s}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
  if (category.includes('IT') || category.includes('Network'))
    return html`<svg xmlns="http://www.w3.org/2000/svg" ${s}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
  // Software & Others
  return html`<svg xmlns="http://www.w3.org/2000/svg" ${s}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
}

class HomeProductsTeaser extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <section style="background: #f0faf3; padding: 72px 80px; border-top: 1px solid #d1fae5; border-bottom: 1px solid #d1fae5;">

        <header style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 20px;">
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
            View all brands
          </button>
        </header>

        <ul style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; list-style: none; padding: 0; margin: 0;">
          ${PRODUCTS.slice(0, 8).map(p => html`
            <li
              @click=${() => window.location.hash = '#products'}
              style="background: white; border: 1px solid #e5e7eb; border-radius: 14px; overflow: hidden; cursor: pointer; transition: box-shadow 0.15s, transform 0.15s;"
              @mouseenter=${e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              @mouseleave=${e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
            >
              <div style="background: ${p.color}; padding: 18px 20px 14px; display: flex; flex-direction: column; gap: 10px;">
                <div style="width: 36px; height: 36px; border-radius: 8px; background: rgba(255,255,255,0.18); display: flex; align-items: center; justify-content: center;">
                  ${productIcon(p.category, 'white')}
                </div>
                <h3 style="font-size: 0.78rem; font-weight: 600; color: white; margin: 0; line-height: 1.35;">${p.category}</h3>
              </div>
              <div style="padding: 14px 20px;">
                <p style="font-size: 0.72rem; color: #6b7280; margin: 0; line-height: 1.65;">
                  ${p.brands.slice(0, 3).join(' · ')}${p.brands.length > 3 ? html`<span style="color: #9ca3af;"> +${p.brands.length - 3} more</span>` : ''}
                </p>
              </div>
            </li>
          `)}
        </ul>

      </section>
    `
  }
}

customElements.define('home-products-teaser', HomeProductsTeaser)
