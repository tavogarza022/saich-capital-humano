// =========================================================================
// Google Analytics 4 (gtag.js) — Listo para activar
// Cuando SAICH cree su propiedad GA4, coloca aquí su ID (ej. 'G-XXXXXXXXXX')
// =========================================================================
const GA_MEASUREMENT_ID = '';

function initAnalytics() {
    if (!GA_MEASUREMENT_ID) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
        window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(script);
}

// Carga diferida tras el pintado inicial para no penalizar velocidad móvil
if (document.readyState === 'complete') {
    initAnalytics();
} else {
    window.addEventListener('load', initAnalytics, { once: true });
}

// Navbar Scroll Effect + Tracking de Conversiones del Funnel
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar-custom');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }, { passive: true });
    }

    // Evento conversión B2B (Empresas)
    const b2bForm = document.getElementById('b2b-form');
    if (b2bForm) {
        b2bForm.addEventListener('submit', () => {
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'generate_lead', {
                    event_category: 'B2B',
                    event_label: 'Formulario Empresas'
                });
            }
        });
    }

    // Evento conversión B2C (Postulación Candidatos)
    const b2cForm = document.getElementById('b2c-form');
    if (b2cForm) {
        b2cForm.addEventListener('submit', () => {
            if (typeof window.gtag === 'function') {
                const vacanteInput = document.getElementById('vacante-interes');
                window.gtag('event', 'postulacion_vacante', {
                    event_category: 'B2C',
                    vacante: vacanteInput ? vacanteInput.value : 'General'
                });
            }
        });
    }

    // Evento clic en WhatsApp flotante
    const waBtn = document.querySelector('.whatsapp-float');
    if (waBtn) {
        waBtn.addEventListener('click', () => {
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'click_whatsapp', {
                    event_category: 'Contacto',
                    page_location: window.location.pathname
                });
            }
        });
    }
});
