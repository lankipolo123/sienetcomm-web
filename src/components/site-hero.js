import { LitElement, html } from 'lit'

class SiteHero extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <section data-section="hero" style="
        position: relative;
        min-height: 55vh;
        display: flex;
        align-items: center;
        background:
          linear-gradient(135deg, rgba(10,35,20,0.93) 0%, rgba(26,107,42,0.82) 55%, rgba(20,82,36,0.75) 100%),
          url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80') center/cover no-repeat;
        padding: 80px;
        overflow: hidden;
      ">

        <div style="
          position: absolute;
          right: -120px;
          top: 50%;
          transform: translateY(-50%);
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(204,0,0,0.15) 0%, transparent 70%);
          pointer-events: none;
        "></div>

        <div style="position: relative; z-index: 1; max-width: 760px;">

          <span style="
            display: inline-flex; align-items: center; gap: 8px;
            background: rgba(255,255,255,0.1);
            color: rgba(255,255,255,0.85);
            font-size: 11px;
            letter-spacing: 3px;
            text-transform: uppercase;
            padding: 7px 16px;
            border-radius: 99px;
            margin-bottom: 24px;
            border: 1px solid rgba(255,255,255,0.15);
          ">
            <span style="width: 6px; height: 6px; background: #4ade80; border-radius: 50%; display: inline-block;"></span>
            ICT & Civil Works · Philippines
          </span>

          <h1 style="
            font-size: 2.6rem;
            font-weight: 700;
            color: white;
            line-height: 1.15;
            margin: 0 0 18px;
            letter-spacing: -0.5px;
          ">
            Building the networks that
            <span style="color: #f87171;"> connect</span>
            the Philippines.
          </h1>

          <p style="
            font-size: 1rem;
            color: rgba(255,255,255,0.7);
            line-height: 1.75;
            max-width: 540px;
            margin: 0 0 32px;
          ">
            From telecommunications infrastructure to civil construction, SIENETCOMM delivers
            end-to-end project management, installation, and maintenance services across
            Luzon, Visayas, and Mindanao.
          </p>

          <div style="display: flex; gap: 12px; margin-bottom: 48px; flex-wrap: wrap;">
            <button
              @click=${() => window.location.hash = '#services'}
              style="
                font-size: 0.9rem;
                font-weight: 600;
                color: white;
                background: #CC0000;
                border-radius: 10px;
                padding: 12px 28px;
                cursor: pointer;
                border: none;
                box-shadow: 0 4px 20px rgba(204,0,0,0.4);
              "
            >
              View Services
            </button>
            <button
              @click=${() => window.location.hash = '#contact'}
              style="
                font-size: 0.9rem;
                font-weight: 500;
                color: white;
                background: rgba(255,255,255,0.12);
                border-radius: 10px;
                padding: 12px 28px;
                cursor: pointer;
                border: 1px solid rgba(255,255,255,0.25);
              "
            >
              Contact Us
            </button>
            <button
              @click=${() => window.location.hash = '#products'}
              style="
                font-size: 0.9rem;
                font-weight: 500;
                color: rgba(255,255,255,0.8);
                background: transparent;
                border-radius: 10px;
                padding: 12px 28px;
                cursor: pointer;
                border: 1px solid rgba(255,255,255,0.15);
              "
            >
              Our Products
            </button>
          </div>

          <div style="display: flex; gap: 0; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 28px; flex-wrap: wrap;">
            ${[
              { value: '16+', label: 'Years in operation' },
              { value: '50–100', label: 'Engineers per project' },
              { value: '3', label: 'Core departments' },
              { value: '16', label: 'Industries served' },
            ].map((stat, i) => html`
              <div style="
                padding: ${i === 0 ? '0 36px 0 0' : '0 36px'};
                border-right: ${i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none'};
              ">
                <div style="font-size: 1.8rem; font-weight: 700; color: #86efac;">${stat.value}</div>
                <div style="font-size: 0.7rem; color: rgba(255,255,255,0.5); margin-top: 4px; text-transform: uppercase; letter-spacing: 1px;">${stat.label}</div>
              </div>
            `)}
          </div>

        </div>
      </section>
    `
  }
}

customElements.define('site-hero', SiteHero)
