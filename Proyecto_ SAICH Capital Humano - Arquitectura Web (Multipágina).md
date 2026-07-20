\# Proyecto: SAICH Capital Humano \- Arquitectura Web (Multipágina)

\#\# Stack Tecnológico y Tracking  
\- \*\*Estructura:\*\* HTML5  
\- \*\*Estilos:\*\* Bootstrap CSS (Última versión)  
\- \*\*Interactividad:\*\* Vanilla JavaScript (Gestión de formularios, DOM y validaciones)  
\- \*\*Tracking:\*\* Integración exclusiva de Pixel de Meta (sin herramientas de Google activas) para mantener la carga ligera y segmentar conversiones.

\#\# UX/UI & Branding (Identidad Visual)  
\- \*\*Enfoque:\*\* Separación de embudos B2B (Empresas) y B2C (Candidatos).  
\- \*\*Estilo:\*\* Premium, limpio, corporativo.  
\- \*\*Paleta de Colores:\*\* Azul Marino profundo (Primario) y Verde Esmeralda (Acento).  
\- \*\*Assets Gráficos Requeridos:\*\* Logo corporativo y Favicon por separado, ambos en formato .png sin fondo.

\#\# Mapa de Sitio (Sitemap)

\#\#\# 1\. \`/index.html\` (Home / Enrutador)  
\- \*\*Objetivo:\*\* Dividir el tráfico inmediatamente sin fricción.  
\- \*\*Diseño:\*\* Pantalla dividida (Split Screen) o botones Hero masivos.  
\- \*\*Acciones:\*\*   
  \- Botón A: "Soy Empresa (Busco Talento)" \-\> Redirige a \`/empresas.html\`  
  \- Botón B: "Soy Candidato (Busco Empleo)" \-\> Redirige a \`/vacantes.html\`

\#\#\# 2\. \`/empresas.html\` (Landing B2B)  
\- \*\*Objetivo:\*\* Captura de Leads corporativos.  
\- \*\*Hero Section:\*\* Mensaje enfocado en resolver rotación/falta de personal.  
\- \*\*Cinta de Confianza \[NOTA CRÍTICA PARA ANTIGRAVITY\]:\*\* Colocar los logos de clientes top (Nemak, Martinrea, etc.) debajo del Hero con filtro \`grayscale(100%)\`. Mantener el código modular por si se requiere mover esta sección al final del sitio (Opción B).  
\- \*\*Servicios (Cards):\*\* Descripción visual del reclutamiento (operarios, técnicos, gerenciales).  
\- \*\*Formulario B2B:\*\* Captura de Nombre, Empresa, Teléfono, Perfil que busca. JS dispara evento "Lead" en Pixel de Meta.

\#\#\# 3\. \`/vacantes.html\` (Bolsa de Trabajo B2C)  
\- \*\*Objetivo:\*\* Captación de talento y CVs.  
\- \*\*Hero Section:\*\* Mensaje motivacional para unirse a las mejores empresas.  
\- \*\*Grid de Vacantes:\*\* Tarjetas dinámicas o listado limpio con las vacantes disponibles.  
\- \*\*Formulario B2C:\*\* Captura de datos personales y subida de archivo (CV). JS dispara evento "Postulación" en Pixel de Meta.

\#\#\# 4\. Footer Global y Legales  
\- \*\*Elementos:\*\* Logotipo, datos de contacto, enlaces rápidos.  
\- \*\*Legales:\*\* Enlaces directos al Aviso de Privacidad y Términos y Condiciones vigentes bajo la legislación de México.  
