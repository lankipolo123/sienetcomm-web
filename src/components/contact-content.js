import { LitElement, html } from 'lit'

class ContactContent extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    _sent:    { type: Boolean, state: true },
    _name:    { type: String,  state: true },
    _email:   { type: String,  state: true },
    _subject: { type: String,  state: true },
    _message: { type: String,  state: true },
  }

  constructor() {
    super()
    this._sent    = false
    this._name    = ''
    this._email   = ''
    this._subject = ''
    this._message = ''
  }

  _handleSubmit(e) {
    e.preventDefault()
    this._sent = true
  }

  render() {
    return html`
      <section style="background: #f9fafb; padding: 64px 80px;">

        <!-- Contact info cards -->
        <div class="contact-cards-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 48px;">

          <!-- Telephone -->
          <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; padding: 22px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
              <div style="width: 36px; height: 36px; border-radius: 10px; background: #f0faf3; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1A6B2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #9ca3af; font-weight: 600; margin: 0;">Telephone</p>
            </div>
            <div style="font-size: 0.85rem; color: #374151; line-height: 2;">
              <a href="tel:+6327527448" style="color: #374151; text-decoration: none; display: block;">+63 2 7527 1448</a>
              <a href="tel:+6285246084" style="color: #374151; text-decoration: none; display: block;">+63 2 8524 6084</a>
              <a href="tel:+6270001572" style="color: #374151; text-decoration: none; display: block;">+63 2 7000 1572</a>
            </div>
          </div>

          <!-- Mobile / Fax -->
          <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; padding: 22px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
              <div style="width: 36px; height: 36px; border-radius: 10px; background: #f0faf3; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1A6B2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #9ca3af; font-weight: 600; margin: 0;">Mobile / Fax</p>
            </div>
            <div style="font-size: 0.85rem; color: #374151; line-height: 2;">
              <a href="tel:+639173247630" style="color: #374151; text-decoration: none; display: block;">+63 917 324 7630</a>
              <a href="tel:+639231445729" style="color: #374151; text-decoration: none; display: block;">+63 923 144 5729</a>
              <span style="color: #9ca3af; font-size: 0.8rem; display: block;">Fax: +632-82844732</span>
            </div>
          </div>

          <!-- Email -->
          <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; padding: 22px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
              <div style="width: 36px; height: 36px; border-radius: 10px; background: #f0faf3; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1A6B2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #9ca3af; font-weight: 600; margin: 0;">Email</p>
            </div>
            <div style="font-size: 0.85rem; line-height: 2;">
              <a href="mailto:sales@sienetcomm.com" style="color: #1A6B2A; display: block; word-break: break-all;">sales@sienetcomm.com</a>
              <a href="mailto:techsupport@sienetcomm.com" style="color: #1A6B2A; display: block; font-size: 0.78rem; word-break: break-all;">techsupport@sienetcomm.com</a>
            </div>
          </div>

          <!-- Website -->
          <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; padding: 22px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
              <div style="width: 36px; height: 36px; border-radius: 10px; background: #f0faf3; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1A6B2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #9ca3af; font-weight: 600; margin: 0;">Website</p>
            </div>
            <a href="https://www.sienetcomm.com" target="_blank" style="color: #1A6B2A; font-size: 0.85rem; display: block; word-break: break-all; text-decoration: none; line-height: 2;">
              www.sienetcomm.com
            </a>
          </div>

        </div>

        <!-- Form + Offices grid -->
        <div class="contact-layout-grid" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 36px; align-items: start;">

          <!-- Contact Form -->
          <div style="background: white; border-radius: 20px; border: 1px solid #e5e7eb; padding: 40px; box-shadow: 0 2px 12px rgba(0,0,0,0.05);">
            ${this._sent ? html`
              <div style="text-align: center; padding: 40px 0;">
                <div style="width: 52px; height: 52px; border-radius: 50%; background: #f0faf3; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A6B2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 style="font-size: 1.3rem; font-weight: 600; color: #1A6B2A; margin: 0 0 8px;">Message Sent</h3>
                <p style="color: #6b7280; font-size: 0.9rem; margin: 0 0 20px;">We'll get back to you within 24 hours.</p>
                <button
                  @click=${() => { this._sent = false; this._name = ''; this._email = ''; this._subject = ''; this._message = '' }}
                  style="background: #f0faf3; color: #1A6B2A; border: none; padding: 10px 24px; border-radius: 8px; cursor: pointer; font-size: 0.85rem;"
                >Send another</button>
              </div>
            ` : html`
              <h2 style="font-size: 1.2rem; font-weight: 700; color: #111827; margin: 0 0 6px;">Send us a message</h2>
              <p style="font-size: 0.85rem; color: #9ca3af; margin: 0 0 28px;">Our team responds within 24 hours on business days.</p>

              <form @submit=${this._handleSubmit} style="display: flex; flex-direction: column; gap: 16px;">
                <div class="form-name-email" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                  <div>
                    <label style="font-size: 0.75rem; font-weight: 600; color: #374151; display: block; margin-bottom: 6px;">Full Name *</label>
                    <input
                      required type="text" placeholder="Juan dela Cruz"
                      .value=${this._name} @input=${e => this._name = e.target.value}
                      style="width: 100%; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; box-sizing: border-box;"
                    />
                  </div>
                  <div>
                    <label style="font-size: 0.75rem; font-weight: 600; color: #374151; display: block; margin-bottom: 6px;">Email Address *</label>
                    <input
                      required type="email" placeholder="juan@company.com"
                      .value=${this._email} @input=${e => this._email = e.target.value}
                      style="width: 100%; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; box-sizing: border-box;"
                    />
                  </div>
                </div>
                <div>
                  <label style="font-size: 0.75rem; font-weight: 600; color: #374151; display: block; margin-bottom: 6px;">Subject</label>
                  <input
                    type="text" placeholder="Project inquiry, maintenance request, etc."
                    .value=${this._subject} @input=${e => this._subject = e.target.value}
                    style="width: 100%; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; box-sizing: border-box;"
                  />
                </div>
                <div>
                  <label style="font-size: 0.75rem; font-weight: 600; color: #374151; display: block; margin-bottom: 6px;">Message *</label>
                  <textarea
                    required rows="5" placeholder="Tell us about your project or inquiry..."
                    .value=${this._message} @input=${e => this._message = e.target.value}
                    style="width: 100%; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; resize: vertical; box-sizing: border-box; font-family: inherit;"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  style="background: #1A6B2A; color: white; font-size: 0.9rem; font-weight: 600; padding: 13px; border-radius: 10px; border: none; cursor: pointer;"
                >Send Message</button>
              </form>
            `}
          </div>

          <!-- Offices -->
          <div style="display: flex; flex-direction: column; gap: 18px;">
            <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
              <div style="background: linear-gradient(135deg, #0a2314, #1A6B2A); padding: 18px 24px;">
                <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.55); margin: 0 0 2px;">Main Office</p>
                <h3 style="font-size: 0.95rem; font-weight: 600; color: white; margin: 0;">Taytay, Rizal</h3>
              </div>
              <div style="padding: 20px 24px;">
                <p style="font-size: 0.875rem; color: #374151; line-height: 1.7; margin: 0 0 14px;">
                  Unit 3D Julia C. Pascual Realty<br>
                  No. 2 Kadalagahan St.<br>
                  Dolores, Taytay, Rizal 1920
                </p>
                <a
                  href="https://maps.google.com/maps?q=Kadalagahan+St+Dolores+Taytay+Rizal+Philippines"
                  target="_blank"
                  rel="noopener"
                  style="display: flex; align-items: center; justify-content: center; gap: 10px; background: linear-gradient(135deg, #0a2314 0%, #1A6B2A 100%); border-radius: 10px; padding: 18px; text-decoration: none;"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span style="font-size: 0.8rem; font-weight: 600; color: white;">View on Google Maps ↗</span>
                </a>
              </div>
            </div>

            <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; padding: 22px 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
              <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #9ca3af; font-weight: 600; margin: 0 0 4px;">Satellite Office</p>
              <h3 style="font-size: 0.95rem; font-weight: 600; color: #111827; margin: 0 0 6px;">Daraga, Albay</h3>
              <p style="font-size: 0.85rem; color: #6b7280; line-height: 1.6; margin: 0;">
                P-5 Namantao, Daraga, Albay<br>
                Bicol Region, Philippines
              </p>
            </div>
          </div>

        </div>
      </section>
    `
  }
}

customElements.define('contact-content', ContactContent)
