import { LitElement, html } from 'lit'

class SiteFooter extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <footer>

        <!-- Main grid: 2-col mobile → 4-col desktop -->
        <div class="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] px-5 py-12 gap-8 md:px-10 md:py-14" style="background: #111827;">

          <!-- Brand column -->
          <div class="col-span-2 lg:col-span-1">
            <div class="mb-4">
              <div class="text-white font-bold tracking-wide" style="font-family: 'Barlow Condensed', sans-serif; font-size: 1.1rem;">SIENETCOMM INC.</div>
              <div class="text-xs" style="color: rgba(255,255,255,0.45);">ICT & Civil Works Solutions</div>
            </div>
            <p class="text-sm leading-relaxed mb-5" style="color: rgba(255,255,255,0.55); max-width: 340px;">
              General contracting across ICT and civil construction — serving enterprises, government, and institutions across the Philippines since 2008.
            </p>
            <a href="mailto:sales@sienetcomm.com" class="inline-block text-xs px-3 py-1.5 rounded-full border" style="color: #4ade80; border-color: rgba(74,222,128,0.3); word-break: break-all;">
              sales@sienetcomm.com
            </a>
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
                >${label}</a>
              `)}
            </div>
          </div>

          <!-- Contact -->
          <div>
            <p class="text-xs uppercase tracking-widest mb-5 font-semibold" style="color: rgba(255,255,255,0.4);">Talk to Us</p>
            <div class="flex flex-col gap-1">
              ${['+63 2 7527 1448','+63 2 8524 6084','+63 2 7000 1572','+63 917 324 7630','+63 923 144 5729'].map(n => html`
                <a href="tel:${n.replace(/\s/g,'')}" class="text-sm" style="color: rgba(255,255,255,0.65); text-decoration: none;">${n}</a>
              `)}
            </div>
            <p class="mt-3 text-xs" style="color: rgba(255,255,255,0.4);">Fax: +632-82844732</p>
          </div>

          <!-- Offices: Main (left) | Satellite + web (right) -->
          <div>
            <p class="text-xs uppercase tracking-widest mb-5 font-semibold" style="color: rgba(255,255,255,0.4);">Main Office</p>
            <div class="text-sm leading-relaxed" style="color: rgba(255,255,255,0.65);">
              Unit 3D Julia C. Pascual Realty<br>
              No. 2 Kadalagahan St.<br>
              Dolores, Taytay, Rizal 1920
            </div>
          </div>

          <div>
            <p class="text-xs uppercase tracking-widest mb-5 font-semibold" style="color: rgba(255,255,255,0.4);">Satellite Office</p>
            <div class="text-sm leading-relaxed mb-4" style="color: rgba(255,255,255,0.65);">
              P-5 Namantao<br>
              Daraga, Albay
            </div>
            <a href="https://www.sienetcomm.com" target="_blank" class="inline-block text-xs" style="color: rgba(255,255,255,0.4); text-decoration: none;">
              www.sienetcomm.com ↗
            </a>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 md:px-10" style="background: #1A6B2A;">
          <p class="text-xs text-white text-center sm:text-left">© 2024 SIENETCOMM INC. All rights reserved.</p>
          <div class="flex flex-col sm:flex-row items-center gap-1 sm:gap-6">
            <p class="text-xs text-center" style="color: rgba(255,255,255,0.7);">SEC Reg. No. 2024040144132-00</p>
            <p class="text-xs text-center" style="color: rgba(255,255,255,0.7);">TIN 648-143-823-00000</p>
          </div>
        </div>

      </footer>
    `
  }
}

customElements.define('site-footer', SiteFooter)
