# Guía de contribución - NOVASTORE

## Arquitectura
El proyecto utiliza una arquitectura de componentes de React.

- `components/`: elementos reutilizables de interfaz.
- `context/`: estado global del carrito y del usuario.
- `data/`: productos de ejemplo.
- `pages/`: páginas principales.
- `styles/`: estilos globales.

## Convenciones
- Componentes y archivos de componentes en PascalCase.
- Variables y funciones en camelCase.
- Componentes con extensión `.jsx`.
- Mantener los componentes pequeños y reutilizables.
- Separar la presentación, los datos y el estado.
- Utilizar Hooks para administrar estado y efectos.

## Herramientas
- Visual Studio Code: editor.
- React: interfaz.
- Vite: desarrollo y compilación.
- React Router DOM: navegación.
- Git y GitHub: control de versiones.
- Navegador: pruebas.

## Preparar el entorno
```bash
npm install
npm run dev
```

## Flujo de trabajo
1. Revisar la estructura y el componente relacionado.
2. Realizar un cambio concreto.
3. Probar la funcionalidad en el navegador.
4. Ejecutar `npm run build`.
5. Registrar los cambios en Git.

## Convenciones de commits
- `feat`: nueva funcionalidad.
- `fix`: corrección.
- `style`: cambios visuales.
- `docs`: documentación.
- `refactor`: reorganización interna.

## Lista de pruebas
- Navegación entre páginas.
- Búsqueda y filtros.
- Carga progresiva.
- Agregar y eliminar productos.
- Cambiar cantidades y comprobar el total.
- Persistencia del carrito tras recargar.
- Inicio y cierre de sesión.
- Validación del formulario.
- Confirmación de compra simulada.
- Compilación de producción.

## Seguridad y alcance
La aplicación es únicamente frontend. No se deben introducir datos bancarios reales ni tratar el inicio de sesión como autenticación de producción.