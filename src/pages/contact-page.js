import { LitElement, html } from 'lit'
import '@/components/site-nav.js'
import '@/components/site-footer.js'

class ContactPage extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    _sent: { type: Boolean, state: true },
    _name: { type: String, state: true },
    _email: { type: String, state: true },
    _subject: { type: String, state: true },
    _message: { type: String, state: true },
  }

  constructor() {
    super()
    this._sent = false
    this._name = ''
    this._email = ''
    this._subject = ''
    this._message = ''
  }

  _handleSubmit(e) {
    e.preventDefault()
    this._sent = true
  }

  render() {
    return html`
      <site-nav></site-nav>

      <!-- Hero -->
      <section style="background: linear-gradient(135deg, #0a2314 0%, #1A6B2A 60%, #145224 100%); padding: 80px 80px 60px;">
        <span style="display: inline-block; background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.85); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; padding: 6px 14px; border-radius: 99px; margin-bottom: 20px;">
          Reach Out
        </span>
        <h1 style="font-size: 3rem; font-weight: 700; color: white; line-height: 1.1; margin: 0 0 16px;">
          Contact Us
        </h1>
        <p style="font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.7; max-width: 520px; margin: 0;">
          Whether it's a large enterprise deployment or a simple inquiry — we're ready to help.
          Reach our team through any channel below.
        </p>
      </section>

      <!-- Contact Cards -->
      <section style="background: #f9fafb; padding: 64px 80px;">
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 60px;">

          <!-- Phone -->
          <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; padding: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="width: 40px; height: 40px; background: #f0faf3; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; font-size: 1.2rem;">📞</div>
            <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #9ca3af; font-weight: 600; margin: 0 0 10px;">Telephone</p>
            <div style="font-size: 0.85rem; color: #374151; line-height: 2;">
              +63 2 7527 1448<br>
              +63 2 8524 6084<br>
              +63 2 7000 1572
            </div>
          </div>

          <!-- Mobile -->
          <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; padding: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="width: 40px; height: 40px; background: #f0faf3; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; font-size: 1.2rem;">📱</div>
            <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #9ca3af; font-weight: 600; margin: 0 0 10px;">Mobile / Fax</p>
            <div style="font-size: 0.85rem; color: #374151; line-height: 2;">
              +63 917 324 7630<br>
              +63 923 144 5729<br>
              <span style="color: #9ca3af;">Fax: +632-82844732</span>
            </div>
          </div>

          <!-- Email -->
          <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; padding: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="width: 40px; height: 40px; background: #f0faf3; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; font-size: 1.2rem;">✉</div>
            <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #9ca3af; font-weight: 600; margin: 0 0 10px;">Email</p>
            <div style="font-size: 0.85rem; line-height: 2;">
              <a href="mailto:sales@sienetcomm.com" style="color: #1A6B2A; display: block;">sales@sienetcomm.com</a>
              <a href="mailto:techsupport@sienetcomm.com" style="color: #1A6B2A; display: block; font-size: 0.8rem;">techsupport@sienetcomm.com</a>
            </div>
          </div>

          <!-- Website -->
          <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; padding: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="width: 40px; height: 40px; background: #f0faf3; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; font-size: 1.2rem;">🌐</div>
            <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #9ca3af; font-weight: 600; margin: 0 0 10px;">Website</p>
            <a href="https://www.sienetcomm.com" target="_blank" style="color: #1A6B2A; font-size: 0.85rem; display: block; margin-bottom: 12px;">www.sienetcomm.com ↗</a>
          </div>

        </div>

        <!-- Two columns: form + offices -->
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; align-items: start;">

          <!-- Contact Form -->
          <div style="background: white; border-radius: 20px; border: 1px solid #e5e7eb; padding: 40px; box-shadow: 0 2px 12px rgba(0,0,0,0.05);">
            ${this._sent ? html`
              <div style="text-align: center; padding: 40px 0;">
                <div style="font-size: 3rem; margin-bottom: 16px;">✅</div>
                <h3 style="font-size: 1.3rem; font-weight: 600; color: #1A6B2A; margin: 0 0 8px;">Message Sent!</h3>
                <p style="color: #6b7280; font-size: 0.9rem;">We'll get back to you within 24 hours.</p>
                <button
                  @click=${() => { this._sent = false; this._name = ''; this._email = ''; this._subject = ''; this._message = '' }}
                  style="margin-top: 20px; background: #f0faf3; color: #1A6B2A; border: none; padding: 10px 24px; border-radius: 8px; cursor: pointer; font-size: 0.85rem;"
                >Send another</button>
              </div>
            ` : html`
              <h2 style="font-size: 1.3rem; font-weight: 700; color: #111827; margin: 0 0 6px;">Send us a message</h2>
              <p style="font-size: 0.85rem; color: #9ca3af; margin: 0 0 28px;">Our team responds within 24 hours on business days.</p>

              <form @submit=${this._handleSubmit} style="display: flex; flex-direction: column; gap: 16px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                  <div>
                    <label style="font-size: 0.75rem; font-weight: 600; color: #374151; display: block; margin-bottom: 6px;">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Juan dela Cruz"
                      .value=${this._name}
                      @input=${e => this._name = e.target.value}
                      style="width: 100%; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; box-sizing: border-box;"
                    />
                  </div>
                  <div>
                    <label style="font-size: 0.75rem; font-weight: 600; color: #374151; display: block; margin-bottom: 6px;">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="juan@company.com"
                      .value=${this._email}
                      @input=${e => this._email = e.target.value}
                      style="width: 100%; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; box-sizing: border-box;"
                    />
                  </div>
                </div>
                <div>
                  <label style="font-size: 0.75rem; font-weight: 600; color: #374151; display: block; margin-bottom: 6px;">Subject</label>
                  <input
                    type="text"
                    placeholder="Project inquiry, maintenance request, etc."
                    .value=${this._subject}
                    @input=${e => this._subject = e.target.value}
                    style="width: 100%; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; box-sizing: border-box;"
                  />
                </div>
                <div>
                  <label style="font-size: 0.75rem; font-weight: 600; color: #374151; display: block; margin-bottom: 6px;">Message *</label>
                  <textarea
                    required
                    rows="6"
                    placeholder="Tell us about your project or inquiry..."
                    .value=${this._message}
                    @input=${e => this._message = e.target.value}
                    style="width: 100%; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; resize: vertical; box-sizing: border-box; font-family: inherit;"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  style="background: #1A6B2A; color: white; font-size: 0.9rem; font-weight: 600; padding: 13px; border-radius: 10px; border: none; cursor: pointer; margin-top: 4px;"
                >
                  Send Message →
                </button>
              </form>
            `}
          </div>

          <!-- Offices + Map -->
          <div style="display: flex; flex-direction: column; gap: 20px;">

            <!-- Main Office -->
            <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
              <div style="background: linear-gradient(135deg, #0a2314, #1A6B2A); padding: 20px 24px;">
                <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.6); margin: 0 0 4px;">Main Office</p>
                <h3 style="font-size: 1rem; font-weight: 600; color: white; margin: 0;">Taytay, Rizal</h3>
              </div>
              <div style="padding: 20px 24px;">
                <p style="font-size: 0.875rem; color: #374151; line-height: 1.7; margin: 0 0 16px;">
                  Unit 3D Julia C. Pascual Realty<br>
                  No. 2 Kadalagahan St.<br>
                  Dolores, Taytay, Rizal 1920
                </p>
                <iframe
                  src="https://maps.google.com/maps?q=Kadalagahan+St+Dolores+Taytay+Rizal+Philippines&output=embed"
                  width="100%"
                  height="180"
                  style="border: none; border-radius: 10px; display: block;"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <!-- Satellite Office -->
            <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
              <div style="display: flex; gap: 12px; align-items: flex-start;">
                <div style="width: 36px; height: 36px; background: #f0faf3; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1rem;">📍</div>
                <div>
                  <p style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #9ca3af; font-weight: 600; margin: 0 0 4px;">Satellite Office</p>
                  <h3 style="font-size: 0.95rem; font-weight: 600; color: #111827; margin: 0 0 6px;">Daraga, Albay</h3>
                  <p style="font-size: 0.85rem; color: #6b7280; line-height: 1.6; margin: 0;">
                    P-5 Namantao, Daraga, Albay<br>
                    Bicol Region, Philippines
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <site-footer></site-footer>
    `
  }
}

customElements.define('contact-page', ContactPage)
