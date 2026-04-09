import { LitElement, html } from 'lit'

class SiteFooter extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <footer>

        <div class="grid px-10 py-14 gap-10" style="background: #111827; grid-template-columns: 2fr 1fr 1fr 1fr;">

          <!-- Brand column -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <img src="/siennet_logo.png" alt="SIENETCOMM" style="height: 36px; width: auto; object-fit: contain;" />
              <div>
                <div class="text-white font-bold text-sm tracking-wide" style="font-family: 'Barlow Condensed', sans-serif; font-size: 1rem;">SIENETCOMM INC.</div>
                <div class="text-xs" style="color: rgba(255,255,255,0.45);">ICT & Civil Works Solutions</div>
              </div>
            </div>
            <p class="text-sm leading-relaxed mb-5" style="color: rgba(255,255,255,0.55); max-width: 280px;">
              General contracting across ICT and civil construction — serving enterprises, government, and institutions across the Philippines since 2008.
            </p>
            <div class="flex gap-3">
              <a href="mailto:sales@sienetcomm.com" class="text-xs px-3 py-1.5 rounded-full border" style="color: #4ade80; border-color: rgba(74,222,128,0.3);">
                sales@sienetcomm.com
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <p class="text-xs uppercase tracking-widest mb-5 font-semibold" style="color: rgba(255,255,255,0.4);">Navigate</p>
            <div class="flex flex-col gap-2">
              ${['Home','Services','Products','Clients','About','Contact'].map(label => html`
                <a
                  href="#${label.toLowerCase()}"
                  class="text-sm"
                  style="color: rgba(255,255,255,0.65); text-decoration: none;"
                >
                  ${label}
                </a>
              `)}
            </div>
          </div>

          <!-- Contact -->
          <div>
            <p class="text-xs uppercase tracking-widest mb-5 font-semibold" style="color: rgba(255,255,255,0.4);">Talk to Us</p>
            <div class="text-sm leading-loose" style="color: rgba(255,255,255,0.65);">
              +63 2 7527 1448<br>
              +63 2 8524 6084<br>
              +63 2 7000 1572<br>
              +63 917 324 7630<br>
              +63 923 144 5729
            </div>
            <div class="mt-4 text-xs" style="color: rgba(255,255,255,0.4);">
              Fax: +632-82844732
            </div>
          </div>

          <!-- Offices -->
          <div>
            <p class="text-xs uppercase tracking-widest mb-5 font-semibold" style="color: rgba(255,255,255,0.4);">Our Offices</p>
            <div class="mb-5">
              <div class="text-xs mb-1" style="color: #4ade80;">Main Office</div>
              <div class="text-sm leading-relaxed" style="color: rgba(255,255,255,0.65);">
                Unit 3D Julia C. Pascual Realty<br>
                No. 2 Kadalagahan St.<br>
                Dolores, Taytay, Rizal 1920
              </div>
            </div>
            <div>
              <div class="text-xs mb-1" style="color: #4ade80;">Satellite Office</div>
              <div class="text-sm leading-relaxed" style="color: rgba(255,255,255,0.65);">
                P-5 Namantao<br>
                Daraga, Albay
              </div>
            </div>
            <a href="https://www.sienetcomm.com" target="_blank" class="inline-block mt-4 text-xs" style="color: rgba(255,255,255,0.4); text-decoration: none;">
              www.sienetcomm.com ↗
            </a>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="px-10 py-4 flex items-center justify-between" style="background: #1A6B2A;">
          <p class="text-xs text-white">© 2024 SIENETCOMM INC. All rights reserved.</p>
          <div class="flex gap-6">
            <p class="text-xs" style="color: rgba(255,255,255,0.7);">SEC Reg. No. 2024040144132-00</p>
            <p class="text-xs" style="color: rgba(255,255,255,0.7);">TIN 648-143-823-00000</p>
          </div>
        </div>

      </footer>
    `
  }
}

customElements.define('site-footer', SiteFooter)
