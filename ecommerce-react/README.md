# NOVASTORE - E-commerce con React

## Descripción
NOVASTORE es una aplicación frontend de comercio electrónico desarrollada con React. Permite explorar un catálogo, buscar y filtrar productos, consultar detalles, administrar un carrito e iniciar una compra simulada.

No utiliza backend propio ni base de datos. Los productos se encuentran en datos locales y el carrito y la sesión se conservan mediante LocalStorage.

## Tecnologías
- React 19 y JavaScript
- Vite
- React Router DOM
- Context API y Hooks
- HTML5 y CSS3
- LocalStorage
- IntersectionObserver

## Funcionalidades
- Catálogo con carga progresiva mediante scroll infinito.
- Carga diferida de imágenes.
- Búsqueda y filtros por categoría.
- Detalle individual de cada producto.
- Agregar, eliminar y cambiar cantidades en el carrito.
- Cálculo automático del total.
- Inicio y cierre de sesión simulados.
- Formulario de compra con validación.
- Confirmación de compra simulada.

## Instalación
```bash
npm install
npm run dev
```
Abre la dirección local que indique Vite en la terminal.

## Compilación
```bash
npm run build
npm run preview
```

## Estructura
- `src/components`: componentes reutilizables.
- `src/context`: estado global de la tienda.
- `src/data`: catálogo local.
- `src/pages`: páginas de la aplicación.
- `src/styles`: estilos.
- `src/App.jsx`: rutas.
- `src/main.jsx`: punto de entrada.

## Arquitectura
La interfaz está dividida en componentes y páginas. Context API comparte el estado del carrito y del usuario. React Router DOM administra la navegación. LocalStorage conserva el carrito y la sesión simulada. IntersectionObserver permite cargar más productos al desplazarse.

## Limitaciones
El inicio de sesión y la compra son demostraciones frontend. No hay autenticación real, procesamiento de pagos ni almacenamiento en servidor. No introduzcas datos bancarios reales.

## Repositorio
Sustituye `URL_DEL_REPOSITORIO` por la dirección del repositorio GitHub cuando lo publiques.