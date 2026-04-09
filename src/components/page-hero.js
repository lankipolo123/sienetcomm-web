import { LitElement, html } from 'lit'

class PageHero extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    eyebrow:  { type: String },
    title:    { type: String },
    subtitle: { type: String },
    bgImage:  { type: String },
    stats:    { type: Array },
  }

  constructor() {
    super()
    this.eyebrow  = ''
    this.title    = ''
    this.subtitle = ''
    this.bgImage  = ''
    this.stats    = []
  }

  render() {
    const bg = this.bgImage
      ? `linear-gradient(135deg, rgba(10,35,20,0.95) 0%, rgba(26,107,42,0.85) 60%, rgba(20,82,36,0.8) 100%), url('${this.bgImage}') center/cover`
      : 'linear-gradient(135deg, #0a2314 0%, #1A6B2A 60%, #145224 100%)'

    return html`
      <section style="background: ${bg}; padding: 72px 80px 56px;">

        ${this.eyebrow ? html`
          <span style="display: inline-block; background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.85); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; padding: 6px 14px; border-radius: 99px; margin-bottom: 20px;">
            ${this.eyebrow}
          </span>
        ` : ''}

        <h1 style="font-size: 2.6rem; font-weight: 700; color: white; line-height: 1.1; margin: 0 0 14px; max-width: 680px;">
          ${this.title}
        </h1>

        ${this.subtitle ? html`
          <p style="font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.75; max-width: 560px; margin: 0 0 ${this.stats.length ? '36px' : '0'};">
            ${this.subtitle}
          </p>
        ` : ''}

        ${this.stats.length ? html`
          <div style="display: flex; gap: 40px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.15); flex-wrap: wrap;">
            ${this.stats.map(s => html`
              <div>
                <div style="font-size: 1.8rem; font-weight: 700; color: #86efac;">${s.value}</div>
                <div style="font-size: 0.7rem; color: rgba(255,255,255,0.5); margin-top: 4px; text-transform: uppercase; letter-spacing: 1px;">${s.label}</div>
              </div>
            `)}
          </div>
        ` : ''}

      </section>
    `
  }
}

customElements.define('page-hero', PageHero)
