# Violencia Invisible

Landing page PWA orientada a conversión por WhatsApp para el servicio de consultoría informativa Violencia Invisible.

Sitio publicado en GitHub Pages:

https://braianruaimi.github.io/Violemcia-invisible-/

## Descripción

Violencia Invisible es una web app mobile-first pensada para presentar servicios de orientación informativa en situaciones de violencia psicológica o invisible, explicar las opciones de asesoramiento y convertir visitas en reservas por WhatsApp.

Todo el contenido visible del sitio está en español.

## Funcionalidades actuales

- Landing page de una sola página.
- Diseño responsive mobile-first.
- PWA instalable con manifest y service worker.
- Botones de conversión directa a WhatsApp.
- Botón flotante de WhatsApp.
- Panel CEO con acceso por contraseña.
- Analítica local de clics a WhatsApp por origen del botón.
- Exportación y reinicio de métricas locales.
- Asistente con 5 preguntas frecuentes automáticas.
- Formulario de reserva que arma el mensaje y lo envía a WhatsApp.

## Panel CEO

El panel se abre desde el botón discreto ubicado en la esquina inferior izquierda del sitio.

Datos importantes:

- Contraseña actual: 1234
- Tipo de analítica: local
- Almacenamiento: localStorage del navegador

Importante:

La analítica del panel no es global. Los datos se guardan solo en el navegador y dispositivo donde se generan los clics.

## Formulario de reserva

El formulario solicita:

- Nombre y apellido
- Email
- Número de teléfono
- Asunto o caso
- Servicio seleccionado

Opciones actuales del selector:

- Guía personalizada
- Entrevista 1 a 1
- PDF + 1 a 1 conmigo

Al confirmar, se abre WhatsApp con el mensaje ya completado con todos esos datos.

## Estructura del proyecto

Archivos principales en producción:

- [index.html](index.html)
- [manifest.json](manifest.json)
- [service-worker.js](service-worker.js)

Otros archivos/carpetas presentes en el repo:

- [style/styles.css](style/styles.css)
- [views/index.html](views/index.html)

Actualmente la versión publicada en GitHub Pages utiliza el archivo raíz [index.html](index.html).

## Ejecutar localmente

Como es un sitio estático, podés abrirlo con un servidor simple.

Ejemplo con VS Code Live Server o con cualquier servidor estático.

Si querés usar Python:

```bash
python -m http.server 8000
```

Después abrí:

http://localhost:8000/

## Despliegue

El proyecto está preparado para GitHub Pages usando la rama main y la carpeta raíz.

Configuración esperada en GitHub:

- Source: Deploy from a branch
- Branch: main
- Folder: / (root)

## Datos del servicio

- Marca: Violencia Invisible
- WhatsApp: +54 9 2494 28 4798
- Link: https://wa.me/5492494284798

## Notas técnicas

- El service worker usa versionado manual de caché.
- Si un cambio visual no aparece al instante en producción, conviene recargar forzado o reinstalar la PWA.
- La analítica actual no usa backend ni base de datos.

## Próximos pasos sugeridos

- Conectar analítica real con Firebase, Supabase o GA4.
- Guardar reservas en una base de datos además de enviarlas por WhatsApp.
- Reemplazar la contraseña fija del panel por un mecanismo más seguro.
