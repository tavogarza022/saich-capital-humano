// =========================================================================
// Google Analytics 4 (G-5H7RSFLJKP) — Eventos de Conversión del Funnel
// La etiqueta oficial gtag.js está instalada en el <head> de cada página.
// =========================================================================

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
