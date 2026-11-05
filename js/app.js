/**
 * SANSKRATI CARDS & ARTS — BESPOKE WEDDING INVITATIONS & PRINT ATELIER
 * Dynamic Logic, Royal Maroon & Gold Catalog, Smart Budget Estimator & WhatsApp Composer
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initCollectionShowcase();
  initSmartCalculator();
  initModalInteractions();
  initConsultationForm();
});

/* ==========================================================================
   1. NAVIGATION & MOBILE MENU
   ========================================================================== */
function initNavbarScroll() {
  const siteNav = document.querySelector('.site-nav');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('mainNavMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteNav.style.boxShadow = '0 8px 30px rgba(74, 8, 17, 0.45)';
    } else {
      siteNav.style.boxShadow = '';
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      mobileToggle.setAttribute('aria-label', isOpen ? 'Close mobile navigation' : 'Open mobile navigation');
    });

    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.setAttribute('aria-label', 'Open mobile navigation');
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.setAttribute('aria-label', 'Open mobile navigation');
        mobileToggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1100 && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.setAttribute('aria-label', 'Open mobile navigation');
      }
    });
  }
}

/* ==========================================================================
   2. COLLECTION CATALOG DATA & FILTERING
   Covering: Wedding Cards, Digital & Video, Box Sets, Smoked Acrylic,
   Wedding Stationery Suite, Shagun Envelopes & Bags, Corporate Print.
   ========================================================================== */
const ATELIER_CARDS = [
  {
    id: 'sk-1',
    category: 'wedding',
    title: 'The Royal Maroon & Gold Vivah Suite',
    badge: 'Signature Flagship',
    image: 'assets/images/myshop-hero.jpg',
    fullImage: 'assets/images/myshop-hero.jpg',
    specs: '600 GSM Royal Velvet · 24K Hot Stamped Gold Foil · Silk Tassel',
    price: 'From ₹195 / suite',
    description: 'Our hallmark royal wedding creation. Wrapped in deep Royal Maroon velvet with embossed Sanskrit shlokas, glittering 24K gold foil borders, matching wax-sealed envelope, and gold cord embellishment.',
    paper: '600 GSM Imported Suede Velvet & Metallic Gold Kappa Board',
    finish: 'Deep Thermal 24K Gold Stamping & Custom Monogram Seal',
    minOrder: '100 Suites',
    timeline: '6–8 Working Days'
  },
  {
    id: 'sk-kanishka',
    category: 'wedding',
    title: 'Kanishka & Aadarsh Mandir Arches Suite',
    badge: 'Temple Ganesha Arch',
    image: 'assets/images/card-kanishka-aadarsh.jpg',
    fullImage: 'assets/images/card-kanishka-aadarsh-full.jpg',
    specs: 'Pastel Rose & Magenta · Temple Arches · Sacred Kamdhenu Pichwai',
    price: 'From ₹175 / suite',
    description: 'An architectural sacred temple concept featuring Lord Ganesha surrounded by ornate floral archways, sacred Gau Mata, and intricate gold foil accents on a textured pastel and magenta background.',
    paper: '450 GSM Heavy Textured Board & Gilded Borders',
    finish: 'Multi-Tone Foil Embossing & Sacred Temple Die-Cut',
    minOrder: '100 Suites',
    timeline: '5–7 Working Days'
  },
  {
    id: 'sk-aanohi',
    category: 'wedding',
    title: 'Aanohi & Vivaan Royal Palace & Baraat Suite',
    badge: 'Royal Palace Edition',
    image: 'assets/images/card-aanohi-vivaan.jpg',
    fullImage: 'assets/images/card-aanohi-vivaan-full.jpg',
    specs: 'Ivory & Sepia Palace Architecture · Royal Procession Elephants · Ganesha Medallion',
    price: 'From ₹185 / suite',
    description: 'Inspired by Rajasthan’s grand palaces. Showcases an opulent hand-detailed courtyard facade, decorated royal procession elephants, and a high-relief metallic Ganesha seal centerpiece.',
    paper: '500 GSM Imported Textured Ivory Board & Kappa Backing',
    finish: 'Intricate Gold Foil Detailing & Laser Cast Ganesha Crest',
    minOrder: '100 Suites',
    timeline: '6–8 Working Days'
  },
  {
    id: 'sk-aarohi-pichwai',
    category: 'wedding',
    title: 'Aarohi & Vivaan Sacred Pichwai Shrinathji Suite',
    badge: 'Sacred Shrinathji Pichwai',
    image: 'assets/images/card-aarohi-vivaan.jpg',
    fullImage: 'assets/images/card-aarohi-vivaan-full.jpg',
    specs: 'Shrinathji Swaroop · Kamdhenu Cows & Dancing Peacocks · Gold Leaf Borders',
    price: 'From ₹195 / suite',
    description: 'A deeply devotional Pichwai art masterpiece. Features Shrinathji Swaroop framed within a golden temple jharokha, accompanied by holy Kamdhenu cows, dancing peacocks, and floral lotus borders.',
    paper: 'Handmade Gold Shimmer Parchment & 400 GSM Art Board',
    finish: 'Multicolor Pichwai Traditional Print & Metallic Foil Borders',
    minOrder: '100 Suites',
    timeline: '6–8 Working Days'
  },
  {
    id: 'sk-deepika',
    category: 'wedding',
    title: 'Deepika & Ranveer Udaipur Mandap Lake Suite',
    badge: 'Udaipur Lake Palace',
    image: 'assets/images/card-deepika-ranveer.jpg',
    fullImage: 'assets/images/card-deepika-ranveer-full.jpg',
    specs: 'Royal Monogram · Lakeside Mandap Architecture · Floral Lake Palace Vignette',
    price: 'From ₹210 / suite',
    description: 'An idyllic destination wedding invitation portraying a serene lakeside floral mandap pavilion, royal elephants taking holy dip, regal peacocks, and customized couple monogram crest.',
    paper: 'Sapphire Blue Gilded Board & Soft Cream Textured Leaves',
    finish: 'Peacock Monogram Gold Foil & Royal Blue Border Accents',
    minOrder: '100 Suites',
    timeline: '6–8 Working Days'
  },
  {
    id: 'sk-aarohi-floral',
    category: 'wedding',
    title: 'Aarohi & Vivaan Botanical Blossom Suite',
    badge: 'Botanical Floral Foil',
    image: 'assets/images/card-aarohi-floral.jpg',
    fullImage: 'assets/images/card-aarohi-floral-full.jpg',
    specs: 'Pastel Meadow Florals · Filigree Ganesha Frame · Scalloped Royal Arch',
    price: 'From ₹155 / suite',
    description: 'Gentle pastel botanicals meeting royal Indian elegance. Features soft meadow blossom garlands, a delicate gold embossed Ganesha medallion, and an ornate Mughal scalloped arch border.',
    paper: '350 GSM Textured Natural Linen Cardstock',
    finish: 'Raised Metallic Gold Stamping & Scalloped Arch Die-Cut',
    minOrder: '100 Suites',
    timeline: '5–7 Working Days'
  },
  {
    id: 'sk-aarav-baraat',
    category: 'wedding',
    title: 'Aarav & Ridhi Grand Baraat Carriage Suite',
    badge: 'Grand Baraat Edition',
    image: 'assets/images/card-aarav-ridhi-baraat.jpg',
    fullImage: 'assets/images/card-aarav-ridhi-baraat-full.jpg',
    specs: 'AR Monogram · Gold Beveled Edge Frame · Royal Elephant Carriage Procession',
    price: 'From ₹225 / suite',
    description: 'Captures the sheer splendour of a royal Indian Baraat. Features the groom arriving in an ornate elephant howdah surrounded by courtiers and musicians, bordered in gleaming gold foil.',
    paper: '1200 GSM Hardbound Board with Gilded Edges',
    finish: 'Traditional Miniature Style Illustration & 24K Mirrored Foil Frame',
    minOrder: '100 Suites',
    timeline: '7–9 Working Days'
  },
  {
    id: 'sk-anant-jali',
    category: 'box',
    title: 'Anant & Radhika Laser-Cut Jali Floral Suite',
    badge: 'Laser-Cut Jali Lattice',
    image: 'assets/images/card-anant-radhika-jali.jpg',
    fullImage: 'assets/images/card-anant-radhika-jali-full.jpg',
    specs: 'Blush Pink Folded Jacket · Intricate Laser Filigree Windows · Satin Bow Knot',
    price: 'From ₹280 / suite',
    description: 'A breathtaking laser-cut invitation experience. Features a soft pastel blush outer folder with intricate botanical jali windows opening up to gold-foiled event inserts tied with a champagne satin ribbon.',
    paper: 'Fine Pastel Blush Board & Laser Cut Lattice Overlay',
    finish: 'Laser Filigree Die-Cut, Gold Foil Letterpress & Ribbon Bow',
    minOrder: '75 Suites',
    timeline: '8–10 Working Days'
  },
  {
    id: 'sk-aarav-mandap',
    category: 'box',
    title: 'Aarav & Ridhi Pavilion Mandap Hardbound Suite',
    badge: 'Pavilion Mandap Box',
    image: 'assets/images/card-aarav-ridhi-mandap.jpg',
    fullImage: 'assets/images/card-aarav-ridhi-mandap-full.jpg',
    specs: 'Square Hardbound Box Folio · Floral Mandap Canopy · Regal Procession Border',
    price: 'From ₹350 / suite',
    description: 'Luxurious square hardbound presentation folio. Features a floral canopy mandap with royal courtiers and royal elephant procession, housed in a pastel rose structured kappa frame.',
    paper: '1400 GSM Rigid Kappa Board with Pastel Pink Matte Facing',
    finish: 'Thermal 24K Gold Stamping & Silk-Screen Illustrated Mandap',
    minOrder: '75 Boxes',
    timeline: '10–12 Working Days'
  },
  {
    id: 'sk-aarohi-bluebox',
    category: 'box',
    title: 'Aarohi & Vivaan Regal Powder Blue Box Folio',
    badge: 'Couture Royal Blue Box',
    image: 'assets/images/card-aarohi-bluebox.jpg',
    fullImage: 'assets/images/card-aarohi-bluebox-full.jpg',
    specs: 'Powder Blue Rigid Folio · Twin Elephant Inserts · Intricate Brass Monogram Crest',
    price: 'From ₹390 / suite',
    description: 'Exquisite modern royalty in soft powder blue and antique gold. Includes a book-style rigid keepsake box with dual mirrored elephant motifs, gilded borders, and antique brass lock medallion.',
    paper: 'Heavyweight Rigid Box with Sky-Blue Imported Sheen Board',
    finish: 'Silver & Gold Dual Foil Stamping & Brass Metal Central Medallion',
    minOrder: '75 Boxes',
    timeline: '10–12 Working Days'
  },
  {
    id: 'sk-tree-of-life',
    category: 'wedding',
    title: 'Tree of Life Kalpavriksha Gold Foil Suite',
    badge: 'Kalpavriksha Sacred Tree',
    image: 'assets/images/card-tree-of-life.jpg',
    fullImage: 'assets/images/card-tree-of-life-full.jpg',
    specs: 'Intricate Kalpavriksha Tree of Life · Gold Foil Filigree Borders · Champagne Pearl',
    price: 'From ₹185 / suite',
    description: 'Symbolizing eternal growth and sacred blessing. Embellished with the mythical Kalpavriksha Tree of Life intricately rendered in multi-level embossed gold foil on metallic champagne pearl board.',
    paper: '450 GSM Metallic Champagne Pearl Board & Gold Kappa Board',
    finish: 'Deep Multi-level Embossed Gold Foil Tree & Gilded Borders',
    minOrder: '100 Suites',
    timeline: '6–8 Working Days'
  }
];

function initCollectionShowcase() {
  const container = document.getElementById('collectionCardsGrid');
  const tabs = document.querySelectorAll('.filter-tab-pill');

  if (!container) return;

  function renderShowcase(category = 'all') {
    container.innerHTML = '';
    const items = category === 'all' 
      ? ATELIER_CARDS 
      : ATELIER_CARDS.filter(c => c.category === category);

    if (items.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: #fff; border-radius: 16px; border: 1.5px solid #C9A24B;">
          <p style="color: #6B0F1A; font-size: 1.1rem; font-weight: 600;">No designs found in this category.</p>
        </div>
      `;
      return;
    }

    items.forEach(card => {
      const el = document.createElement('article');
      el.className = 'art-card-item';
      
      const hasImage = Boolean(card.image && card.image.trim() !== '');

      const mediaHtml = hasImage
        ? `<div class="art-card-media"><img src="${card.image}" alt="${card.title}" loading="lazy"><span class="art-badge-pill">${card.badge}</span></div>`
        : `<div class="art-card-media art-card-crest-header">
             <div class="card-crest-emblem">
               <img src="assets/images/sanskrati-logo.png" alt="Sanskrati Logo" class="card-logo-mini">
               <span class="card-crest-brand">Sanskrati</span>
             </div>
             <span class="art-badge-pill">${card.badge}</span>
             <span class="photo-updating-pill">Original Photos Updating Soon</span>
           </div>`;

      el.innerHTML = `
        ${mediaHtml}
        <div class="art-card-details">
          <div>
            <h3 class="art-card-title">${card.title}</h3>
            <p class="art-card-sub">${card.specs}</p>
          </div>
          <div class="art-card-footer">
            <span class="art-price-tag">${card.price}</span>
            <button class="btn-inspect" data-id="${card.id}">Inspect Craft &rarr;</button>
          </div>
        </div>
      `;
      container.appendChild(el);
    });

    container.querySelectorAll('.btn-inspect').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openCardModal(id);
      });
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-category');
      renderShowcase(cat);
    });
  });

  renderShowcase('all');
}

/* ==========================================================================
   3. SMART BUDGET ESTIMATOR & WHATSAPP COMPOSER
   ========================================================================== */
function initSmartCalculator() {
  const formatCards = document.querySelectorAll('.calc-format-group .calc-pill-option');
  const paperCards = document.querySelectorAll('.calc-paper-group .calc-pill-option');
  const slider = document.getElementById('smartQtySlider');
  const qtyNum = document.getElementById('smartQtyDisplay');

  const chkFoil = document.getElementById('chkFoil');
  const chkWax = document.getElementById('chkWax');
  const chkInserts = document.getElementById('chkInserts');
  const chkEnvelope = document.getElementById('chkEnvelope');
  const chkStationery = document.getElementById('chkStationery');

  // Summary Elements
  const lblFormat = document.getElementById('recFormat');
  const lblPaper = document.getElementById('recPaper');
  const lblQty = document.getElementById('recQty');
  const lblAddons = document.getElementById('recAddons');
  const lblTotal = document.getElementById('recTotal');
  const lblPerUnit = document.getElementById('recPerUnit');
  const btnOrder = document.getElementById('btnWhatsappOrder');

  if (!slider) return;

  let state = {
    formatName: 'Hardbound Folio',
    basePrice: 110,
    paperName: 'Royal Maroon Velvet',
    paperPrice: 25,
    qty: 150,
    foil: true,
    wax: false,
    inserts: true,
    envelope: true,
    stationery: false
  };

  function recalculate() {
    let addonSum = 0;
    let addonList = [];

    if (state.foil) {
      addonSum += 28;
      addonList.push('24K Hot Gold Foil');
    }
    if (state.wax) {
      addonSum += 20;
      addonList.push('Artisan Wax Seal');
    }
    if (state.inserts) {
      addonSum += 25;
      addonList.push('2 Gilded RSVP Leaves');
    }
    if (state.envelope) {
      addonSum += 15;
      addonList.push('Matching Shagun Envelope');
    }
    if (state.stationery) {
      addonSum += 45;
      addonList.push('Destination Stationery Pack');
    }

    const rawUnitRate = state.basePrice + state.paperPrice + addonSum;
    let discount = 1.0;
    if (state.qty >= 500) {
      discount = 0.85; // 15% discount for bulk
    } else if (state.qty >= 300) {
      discount = 0.90; // 10% discount
    }

    const finalUnitRate = Math.round(rawUnitRate * discount);
    const totalCost = finalUnitRate * state.qty;

    // Update DOM
    qtyNum.textContent = `${state.qty} Suites`;
    lblFormat.textContent = state.formatName;
    lblPaper.textContent = state.paperName;
    lblQty.textContent = `${state.qty} Units`;
    lblAddons.textContent = addonList.length > 0 ? addonList.join(', ') : 'Standard Craft';
    lblTotal.textContent = `₹${totalCost.toLocaleString('en-IN')}`;
    lblPerUnit.textContent = `Approx. ₹${finalUnitRate} / suite (Craft & Finishing Included)`;

    // WhatsApp pre-formatted inquiry for Sanskrati Cards & Arts
    const waText = encodeURIComponent(
      `Hello Sanskrati Cards & Arts! ✨\n\nI configured an invitation suite on your website:\n` +
      `• Format: ${state.formatName}\n` +
      `• Paper / Texture: ${state.paperName}\n` +
      `• Quantity: ${state.qty} units\n` +
      `• Enhancements & Stationery: ${addonList.join(', ') || 'None'}\n` +
      `• Estimated Investment: ₹${totalCost.toLocaleString('en-IN')} (approx ₹${finalUnitRate}/suite)\n\n` +
      `Please share video swatches, sample kit availability, and booking options. Looking forward to your response!`
    );

    btnOrder.href = `https://wa.me/919424443141?text=${waText}`;
  }

  // Format selection
  formatCards.forEach(card => {
    card.addEventListener('click', () => {
      formatCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.formatName = card.getAttribute('data-name');
      state.basePrice = parseInt(card.getAttribute('data-price'), 10);
      recalculate();
    });
  });

  // Paper selection
  paperCards.forEach(card => {
    card.addEventListener('click', () => {
      paperCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.paperName = card.getAttribute('data-name');
      state.paperPrice = parseInt(card.getAttribute('data-price'), 10);
      recalculate();
    });
  });

  // Slider
  slider.addEventListener('input', (e) => {
    state.qty = parseInt(e.target.value, 10);
    recalculate();
  });

  // Checkboxes
  chkFoil.addEventListener('change', (e) => { state.foil = e.target.checked; recalculate(); });
  chkWax.addEventListener('change', (e) => { state.wax = e.target.checked; recalculate(); });
  chkInserts.addEventListener('change', (e) => { state.inserts = e.target.checked; recalculate(); });
  chkEnvelope.addEventListener('change', (e) => { state.envelope = e.target.checked; recalculate(); });
  if (chkStationery) {
    chkStationery.addEventListener('change', (e) => { state.stationery = e.target.checked; recalculate(); });
  }

  recalculate();
}

/* ==========================================================================
   4. MODAL INSPECT DETAILS
   ========================================================================== */
function initModalInteractions() {
  const modal = document.getElementById('atelierModal');
  const closeBtn = document.getElementById('atelierModalClose');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') modal.classList.remove('open');
    });
  }
}

function openCardModal(cardId) {
  const card = ATELIER_CARDS.find(c => c.id === cardId);
  const modal = document.getElementById('atelierModal');
  const body = document.getElementById('atelierModalBody');

  if (!card || !modal || !body) return;

  const waInquiry = encodeURIComponent(
    `Hello Sanskrati Cards & Arts! ✨\nI am captivated by this creation from your collection:\n` +
    `"${card.title}" (${card.badge})\n\n` +
    `Please share high-resolution video clips, swatch availability, and sample kit options for 100-250 units.`
  );

  body.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr; gap: 1.8rem;">
      ${card.image === 'assets/images/myshop-hero.jpg' 
        ? `<div style="border-radius: var(--radius-lg); overflow: hidden; position: relative; border: 2px solid var(--color-gold); margin-bottom: 1.2rem;">
             <img src="${card.image}" alt="${card.title}" style="width: 100%; height: auto; max-height: 380px; object-fit: cover; display: block;">
             <span class="art-badge-pill" style="top: 14px; left: 14px;">${card.badge}</span>
           </div>`
        : `<div style="border-radius: var(--radius-lg); overflow: hidden; position: relative; border: 2px solid var(--color-gold); background: linear-gradient(135deg, #7D0E1E 0%, #4E0812 100%); padding: 1.8rem 1.4rem; text-align: center; color: #fff; margin-bottom: 1.2rem;">
             <img src="assets/images/sanskrati-logo.png" alt="Sanskrati Cards & Arts" style="width: 68px; height: 68px; border-radius: 50%; border: 2px solid #C9A24B; background: #FAF7F2; margin: 0 auto 0.75rem auto; display: block;">
             <span class="art-badge-pill" style="position: static; display: inline-block; margin-bottom: 0.5rem;">${card.badge}</span>
             <h3 style="font-family: var(--font-heading); font-size: 1.5rem; color: #DFC279; margin-bottom: 0.25rem;">${card.title}</h3>
             <p style="font-size: 0.75rem; color: rgba(255, 255, 255, 0.75); letter-spacing: 0.1em; text-transform: uppercase;">Original Studio Photos Updating Soon</p>
           </div>`
      }

      <div>
        <h2 style="font-family: var(--font-heading); font-size: 2rem; color: var(--color-maroon); line-height: 1.15; margin-bottom: 0.5rem;">${card.title}</h2>
        <div style="font-size: 1.35rem; font-weight: 700; color: var(--color-gold-dark); margin-bottom: 1rem;">${card.price}</div>
        <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.4rem;">${card.description}</p>

        <div style="padding: 1.2rem; border-radius: var(--radius-md); margin-bottom: 1.6rem; background: var(--color-soft-cream); border: 1px solid var(--color-gold);">
          <div style="font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--color-maroon); font-weight: 700; margin-bottom: 0.6rem;">Master Craft Specifications</div>
          <ul style="list-style: none; font-size: 0.86rem; color: var(--text-dark); display: flex; flex-direction: column; gap: 0.45rem;">
            <li><strong>Material:</strong> ${card.paper}</li>
            <li><strong>Craftsmanship:</strong> ${card.finish}</li>
            <li><strong>Minimum Batch:</strong> ${card.minOrder}</li>
            <li><strong>Lead Time:</strong> ${card.timeline}</li>
          </ul>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="https://wa.me/919424443141?text=${waInquiry}" target="_blank" rel="noreferrer" class="btn-maroon-solid" style="padding: 0.8rem 1.6rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
            Inquire on WhatsApp
          </a>
          <a href="tel:+919424443141" class="btn-gold-outline" style="padding: 0.8rem 1.4rem;">
            📞 Call Atelier: +91 9424443141
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

/* ==========================================================================
   5. CONSULTATION FORM
   ========================================================================== */
function initConsultationForm() {
  const form = document.getElementById('royalConsultationForm');
  const alertMsg = document.getElementById('consultSuccessAlert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="clientName"]').value;
    const phone = form.querySelector('[name="clientPhone"]').value;
    const craft = form.querySelector('[name="craftInterest"]').value;
    const note = form.querySelector('[name="clientNote"]').value;

    const wa = encodeURIComponent(
      `Hello Sanskrati Cards & Arts! ✨\n\nNew Consultation Request:\n` +
      `• Name: ${name}\n` +
      `• Mobile / WhatsApp: ${phone}\n` +
      `• Interest: ${craft}\n` +
      `• Wedding / Event Notes: ${note || 'Bespoke invitation consultation'}\n\n` +
      `Looking forward to connecting with Sanskrati Cards & Arts!`
    );

    if (alertMsg) alertMsg.style.display = 'block';

    setTimeout(() => {
      window.open(`https://wa.me/919424443141?text=${wa}`, '_blank');
      form.reset();
    }, 700);
  });
}
