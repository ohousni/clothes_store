/* ============================================
   LUMIÈRE — app.js
   Premium Women's Fashion E-Commerce
   ============================================ */

// =====================
// TRANSLATIONS
// =====================
const translations = {
  fr: {
    nav_new:"NOUVEAUTÉS",nav_clothing:"VÊTEMENTS",nav_dresses:"ROBES",nav_accessories:"ACCESSOIRES",nav_sale:"SOLDES",
    hero_label:"Collection PE 2026",hero_line1:"Habillée",hero_line2:"pour le",hero_line3:"Moment.",
    hero_sub:"Nouvelles arrivées, chaque jeudi.",hero_cta:"EXPLORER",
    marquee:"Livraison gratuite dès 500 MAD  ·  Nouvelles arrivées chaque jeudi  ·  Les membres économisent 10%  ·  Fabriqué au Maroc  ·  ",
    section_categories:"Acheter par Catégorie",section_new:"Cette Semaine",viewall:"Tout voir →",
    section_bestsellers_label:"MEILLEURES VENTES",section_bestsellers_sub:"Les pièces que tout le monde porte.",
    section_sale_top:"JUSQU'À",section_sale_num:"50% DE RÉDUCTION",section_sale_sub:"Pièces sélectionnées. Durée limitée.",
    section_instagram_title:"@lumiere.ma",section_instagram_sub:"Identifiez-nous pour être mis en avant.",
    newsletter_title:"Soyez la première informée.",newsletter_sub:"Nouvelles arrivées, accès exclusif, rien d'autre. Désabonnement à tout moment.",
    newsletter_placeholder:"Votre adresse email",newsletter_btn:"S'ABONNER",
    cat_dresses:"Robes",cat_tops:"Hauts",cat_outerwear:"Manteaux",cat_knitwear:"Maille",cat_accessories:"Accessoires",
    p1:"Robe Portefeuille en Lin",p2:"Ensemble Cami en Soie",p3:"Top en Maille Côtelée",p4:"Pantalon Large",
    p5:"Robe Blazer",p6:"Robe Midi Fleurie",p7:"Robe Slip en Satin",p8:"Cardigan Tricoté",
    p9:"Jean Taille Haute",p10:"Jupe Midi Plissée",p11:"Blouse en Dentelle",p12:"Pull en Cachemire",
    p13:"Jupe Portefeuille Maxi",p14:"Short Tailleur",p15:"Chemise Rayée",p16:"Veste en Jean",
    p17:"Blouse Fleurie",p18:"Tote Bag Structuré",p19:"Trench-Coat",p20:"Veste en Cuir Courte",
    quick_add:"AJOUT RAPIDE",shop_look:"VOIR LE LOOK",checkout:"PASSER LA COMMANDE",explore:"EXPLORER",
    cart_title:"Mon Panier",cart_subtotal:"Sous-total",cart_empty:"Votre panier est vide.",
    footer_shop:"BOUTIQUE",footer_help:"AIDE",footer_follow:"SUIVEZ-NOUS",
    footer_new:"Nouveautés",footer_dresses:"Robes",footer_tops:"Hauts",footer_outerwear:"Manteaux",
    footer_accessories:"Accessoires",footer_sale:"Soldes",footer_shipping:"Livraison & Retours",
    footer_size:"Guide des Tailles",footer_faq:"FAQ",footer_contact:"Nous Contacter",footer_stores:"Nos Boutiques",
    footer_copy:"© 2026 LUMIÈRE. Tous droits réservés.",footer_privacy:"Politique de Confidentialité · Conditions d'Utilisation",
    tag_new:"NOUVEAU",tag_trending:"TENDANCE",tag_low_stock:"STOCK LIMITÉ",tag_sale:"SOLDE"
  },
  ar: {
    nav_new:"وصل حديثاً",nav_clothing:"الملابس",nav_dresses:"الفساتين",nav_accessories:"الإكسسوارات",nav_sale:"التخفيضات",
    hero_label:"مجموعة ربيع ٢٠٢٦",hero_line1:"مُرتدِيةً",hero_line2:"للحظة",hero_line3:"المثالية.",
    hero_sub:"وصولات جديدة، كل خميس.",hero_cta:"اكتشفي",
    marquee:"شحن مجاني عند الشراء بأكثر من ٥٠٠ درهم  ·  وصولات جديدة كل خميس  ·  وفري ١٠٪ كعضو  ·  صنع في المغرب  ·  ",
    section_categories:"تسوقي حسب الفئة",section_new:"جديد هذا الأسبوع",viewall:"← عرض الكل",
    section_bestsellers_label:"الأكثر مبيعاً",section_bestsellers_sub:"القطع التي ترتديها الجميع.",
    section_sale_top:"خصم يصل إلى",section_sale_num:"٥٠٪",section_sale_sub:"قطع مختارة. لفترة محدودة.",
    section_instagram_title:"@lumiere.ma",section_instagram_sub:"شاركي صورتك لنبرزكِ.",
    newsletter_title:"كوني أول من يعلم.",newsletter_sub:"وصولات جديدة، وصول حصري، لا شيء غير ذلك.",
    newsletter_placeholder:"بريدك الإلكتروني",newsletter_btn:"اشتركي",
    cat_dresses:"الفساتين",cat_tops:"القمصان",cat_outerwear:"المعاطف",cat_knitwear:"التريكو",cat_accessories:"الإكسسوارات",
    p1:"فستان لفّ من الكتان",p2:"طقم كامي من الحرير",p3:"توب مضلّع محبوك",p4:"بنطلون واسع الساق",
    p5:"فستان بليزر",p6:"فستان ميدي بالأزهار",p7:"فستان ساتان سليب",p8:"كارديغان محبوك",
    p9:"جينز بخصر عالٍ",p10:"تنورة ميدي مكسّرة",p11:"بلوزة دانتيل",p12:"كنزة كشمير",
    p13:"تنورة ماكسي لفّ",p14:"شورت مُفصَّل",p15:"قميص مخطط",p16:"جاكيت جينز",
    p17:"بلوزة بالأزهار",p18:"حقيبة توت منظّمة",p19:"معطف ترنش",p20:"جاكيت جلد قصير",
    quick_add:"إضافة سريعة",shop_look:"تسوقي اللوك",checkout:"إتمام الشراء",explore:"اكتشفي",
    cart_title:"سلة التسوق",cart_subtotal:"المجموع الفرعي",cart_empty:"سلة تسوقك فارغة.",
    footer_shop:"المتجر",footer_help:"المساعدة",footer_follow:"تابعينا",
    footer_new:"وصل حديثاً",footer_dresses:"الفساتين",footer_tops:"القمصان",footer_outerwear:"المعاطف",
    footer_accessories:"الإكسسوارات",footer_sale:"التخفيضات",footer_shipping:"الشحن والإرجاع",
    footer_size:"دليل المقاسات",footer_faq:"الأسئلة الشائعة",footer_contact:"تواصلي معنا",footer_stores:"متاجرنا",
    footer_copy:"© ٢٠٢٦ لوميير. جميع الحقوق محفوظة.",footer_privacy:"سياسة الخصوصية · شروط الاستخدام",
    tag_new:"جديد",tag_trending:"رائج",tag_low_stock:"كميات محدودة",tag_sale:"تخفيض"
  },
  en: {
    nav_new:"NEW IN",nav_clothing:"CLOTHING",nav_dresses:"DRESSES",nav_accessories:"ACCESSORIES",nav_sale:"SALE",
    hero_label:"SS 2026 — New Collection",hero_line1:"Dressed",hero_line2:"for the",hero_line3:"Moment.",
    hero_sub:"New arrivals, every Thursday.",hero_cta:"EXPLORE NOW",
    marquee:"Free shipping over 500 MAD  ·  New arrivals every Thursday  ·  Members save 10%  ·  Handcrafted in Morocco  ·  ",
    section_categories:"Shop by Category",section_new:"New This Week",viewall:"View all →",
    section_bestsellers_label:"BEST SELLERS",section_bestsellers_sub:"The pieces everyone is wearing.",
    section_sale_top:"UP TO",section_sale_num:"50% OFF",section_sale_sub:"Selected pieces. Limited time.",
    section_instagram_title:"@lumiere.ma",section_instagram_sub:"Tag us to be featured.",
    newsletter_title:"Be the first to know.",newsletter_sub:"New arrivals, early access, and nothing else. Unsubscribe whenever.",
    newsletter_placeholder:"Your email address",newsletter_btn:"SUBSCRIBE",
    cat_dresses:"Dresses",cat_tops:"Tops",cat_outerwear:"Outerwear",cat_knitwear:"Knitwear",cat_accessories:"Accessories",
    p1:"Linen Wrap Dress",p2:"Silk Cami Set",p3:"Ribbed Knit Top",p4:"Wide Leg Trousers",
    p5:"Blazer Dress",p6:"Floral Midi Dress",p7:"Satin Slip Dress",p8:"Knit Cardigan",
    p9:"High Waist Jeans",p10:"Pleated Midi Skirt",p11:"Lace Blouse",p12:"Cashmere Sweater",
    p13:"Maxi Wrap Skirt",p14:"Tailored Shorts",p15:"Striped Shirt",p16:"Denim Jacket",
    p17:"Floral Blouse",p18:"Structured Tote",p19:"Trench Coat",p20:"Cropped Leather Jacket",
    quick_add:"QUICK ADD",shop_look:"SHOP THE LOOK",checkout:"PROCEED TO CHECKOUT",explore:"EXPLORE NOW",
    cart_title:"My Bag",cart_subtotal:"Subtotal",cart_empty:"Your bag is empty.",
    footer_shop:"SHOP",footer_help:"HELP",footer_follow:"FOLLOW US",
    footer_new:"New In",footer_dresses:"Dresses",footer_tops:"Tops",footer_outerwear:"Outerwear",
    footer_accessories:"Accessories",footer_sale:"Sale",footer_shipping:"Shipping & Returns",
    footer_size:"Size Guide",footer_faq:"FAQ",footer_contact:"Contact Us",footer_stores:"Store Locations",
    footer_copy:"© 2026 LUMIÈRE. All rights reserved.",footer_privacy:"Privacy Policy · Terms of Use",
    tag_new:"NEW",tag_trending:"TRENDING",tag_low_stock:"LOW STOCK",tag_sale:"SALE"
  }
};

// =====================
// UTILITY: Check if device is touch/mobile
// =====================
function isTouchDevice() {
  return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.matchMedia('(pointer: coarse)').matches);
}
function isMobile() {
  return window.innerWidth <= 768;
}

// =====================
// SCROLL POSITION MANAGEMENT
// =====================
let savedScrollY = 0;
function lockScroll() {
  savedScrollY = window.scrollY;
  document.body.style.top = `-${savedScrollY}px`;
  document.body.classList.add('menu-open');
}
function unlockScroll() {
  document.body.classList.remove('menu-open');
  document.body.style.top = '';
  window.scrollTo(0, savedScrollY);
}

// =====================
// LANGUAGE SWITCHER
// =====================
let currentLang = 'fr';
function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.classList.add('rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.body.classList.remove('rtl');
  }
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.tagName === 'INPUT') { el.placeholder = t[key]; }
      else { el.textContent = t[key]; }
    }
  });
  // Re-add category arrows after text replacement
  document.querySelectorAll('.category-name').forEach(el => {
    if (!el.querySelector('.category-arrow')) {
      const arrow = document.createElement('span');
      arrow.className = 'category-arrow';
      arrow.textContent = ' →';
      el.appendChild(arrow);
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  localStorage.setItem('lumiere_lang', lang);
}

// =====================
// SPLASH SCREEN
// =====================
function initSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;
  gsap.to(splash, { opacity: 0, duration: 0.6, delay: 1.5, ease: 'power2.inOut',
    onComplete: () => { splash.style.display = 'none'; }
  });
}

// =====================
// NAVBAR SCROLL
// =====================
function initNavbar() {
  const nav = document.getElementById('navbar');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        nav.classList.toggle('nav--scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// =====================
// MOBILE MENU
// =====================
function initMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const open = document.getElementById('hamburgerBtn');
  const close = document.getElementById('mobileClose');
  if (!menu || !open || !close) return;

  function openMenu() {
    menu.classList.add('open');
    lockScroll();
  }

  function closeMenu() {
    menu.classList.remove('open');
    unlockScroll();
  }

  open.addEventListener('click', openMenu);
  close.addEventListener('click', closeMenu);

  // Close mobile menu when clicking a nav link
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      closeMenu();
    });
  });

  // Close on swipe right (gesture to dismiss)
  let touchStartX = 0;
  let touchStartY = 0;
  menu.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  menu.addEventListener('touchend', (e) => {
    const deltaX = e.changedTouches[0].screenX - touchStartX;
    const deltaY = Math.abs(e.changedTouches[0].screenY - touchStartY);
    // Swipe right to close (for LTR), swipe left for RTL
    if (deltaX > 80 && deltaY < 50) {
      if (!document.body.classList.contains('rtl')) closeMenu();
    }
    if (deltaX < -80 && deltaY < 50) {
      if (document.body.classList.contains('rtl')) closeMenu();
    }
  }, { passive: true });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
    }
  });
}

// =====================
// CART DRAWER
// =====================
function initCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  const openBtn = document.getElementById('cartBtn');
  const closeBtn = document.getElementById('cartClose');
  if (!drawer) return;

  function openCart() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.classList.add('cart-open');
    if (isMobile()) {
      savedScrollY = window.scrollY;
      document.body.style.top = `-${savedScrollY}px`;
    }
  }

  function closeCart() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.classList.remove('cart-open');
    if (isMobile()) {
      document.body.style.top = '';
      window.scrollTo(0, savedScrollY);
    }
  }

  openBtn.addEventListener('click', openCart);
  closeBtn.addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);

  // Swipe to close cart drawer
  let touchStartX = 0;
  drawer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  drawer.addEventListener('touchend', (e) => {
    const deltaX = e.changedTouches[0].screenX - touchStartX;
    const isRTL = document.body.classList.contains('rtl');
    // Swipe right to close in LTR, swipe left in RTL
    if (!isRTL && deltaX > 80) closeCart();
    if (isRTL && deltaX < -80) closeCart();
  }, { passive: true });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeCart();
    }
  });
}

// =====================
// CUSTOM CURSOR
// =====================
function initCursor() {
  // Skip custom cursor on touch devices or mobile
  if (isTouchDevice() || isMobile()) return;
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    gsap.to(cursor, { x: mx, y: my, duration: 0.1 });
    gsap.to(follower, { x: mx, y: my, duration: 0.35 });
  });
  document.querySelectorAll('img, .product-card, .category-item, button, a').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });
}

// =====================
// THREE.JS HERO
// =====================
function initHero() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  // Reduce complexity on mobile for better performance
  const mobile = isMobile();
  const segments = mobile ? 30 : 60;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 3;
  const geometry = new THREE.PlaneGeometry(6, 6, segments, segments);
  const material = new THREE.MeshBasicMaterial({
    color: 0xC9A8A8, wireframe: true, transparent: true, opacity: mobile ? 0.12 : 0.18
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !mobile });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2));

  const clock = new THREE.Clock();
  let animationId;
  let isVisible = true;

  function animate() {
    animationId = requestAnimationFrame(animate);
    if (!isVisible) return;
    const time = clock.getElapsedTime();
    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      positions.setZ(i, Math.sin(x * 1.5 + time * 0.6) * 0.12 + Math.cos(y * 1.8 + time * 0.4) * 0.08);
    }
    positions.needsUpdate = true;
    renderer.render(scene, camera);
  }
  animate();

  // Pause animation when not visible (saves battery on mobile)
  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(canvas);
  }

  // Handle resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, 100);
  });
}

// =====================
// GSAP HERO ENTRANCE
// =====================
function initHeroAnimations() {
  gsap.from('.hero-line', { y: 80, opacity: 0, stagger: 0.12, duration: 1, ease: 'power3.out', delay: 1.8 });
  gsap.from('.hero-label', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 2.2 });
  gsap.from('.hero-cta', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 2.4 });
  gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 2.3 });
}

// =====================
// GSAP SCROLL ANIMATIONS
// =====================
function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Categories
  gsap.from('.category-item', {
    opacity: 0, y: 40, stagger: 0.1, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '.categories-section', start: 'top 80%' }
  });

  // Section titles
  document.querySelectorAll('.section-title, .bestsellers-title, .instagram-title, .newsletter-title').forEach(el => {
    gsap.from(el, {
      opacity: 0, y: 50, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });

  // New Arrivals products
  gsap.from('.arrivals-section .product-card', {
    opacity: 0, y: 30, stagger: 0.08, duration: 0.7, ease: 'power3.out',
    scrollTrigger: { trigger: '.arrivals-section', start: 'top 75%' }
  });

  // Editorial quote
  gsap.from('.editorial-quote', {
    opacity: 0, y: 40, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '.editorial-banner', start: 'top 70%' }
  });

  // Best sellers
  gsap.from('.bestsellers-grid .product-card', {
    opacity: 0, y: 30, stagger: 0.07, duration: 0.7, ease: 'power3.out',
    scrollTrigger: { trigger: '.bestsellers-section', start: 'top 75%' }
  });

  // Sale heading
  gsap.from('.sale-number', {
    opacity: 0, scale: 0.8, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '.sale-section', start: 'top 70%' }
  });

  // Sale cards
  gsap.from('.sale-grid .product-card', {
    opacity: 0, y: 30, stagger: 0.08, duration: 0.7, ease: 'power3.out',
    scrollTrigger: { trigger: '.sale-section', start: 'top 65%' }
  });

  // Newsletter
  gsap.from('.newsletter-content', {
    opacity: 0, y: 50, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: '.newsletter', start: 'top 80%' }
  });

  // Instagram
  gsap.from('.insta-item', {
    opacity: 0, y: 20, stagger: 0.06, duration: 0.6, ease: 'power3.out',
    scrollTrigger: { trigger: '.instagram-section', start: 'top 80%' }
  });
}

// =====================
// HANDLE VIEWPORT RESIZE (orientation change)
// =====================
function initViewportHandler() {
  // Handle orientation change
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
  });

  // Recalculate on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }, 250);
  });
}

// =====================
// PREVENT 300ms TAP DELAY (legacy browsers)
// =====================
function initTouchOptimizations() {
  // Add touch-action to clickable elements
  document.querySelectorAll('button, a, .product-card, .category-item').forEach(el => {
    el.style.touchAction = 'manipulation';
  });
}

// =====================
// INITIALIZE
// =====================
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lumiere_lang') || 'fr';
  setLanguage(saved);
  initSplash();
  initNavbar();
  initMobileMenu();
  initCart();
  initCursor();
  initHero();
  initHeroAnimations();
  initScrollAnimations();
  initViewportHandler();
  initTouchOptimizations();
});
