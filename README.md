# Trabajo Práctico: Clon Web de Instagram con React & TypeScript

Este proyecto es una aplicación web inspirada en la interfaz moderna de Instagram (modo oscuro), desarrollada con **React**, **TypeScript**, **Axios** y **CSS nativo**. Para poblar el feed de la red social de manera dinámica, se realiza el consumo de datos en tiempo real desde una API externa de imágenes de gatos (*The Cat API*).

---

## 1. Diseño de Referencia (Figma)
El diseño e interfaz visual de este proyecto se encuentra estrictamente basado e inspirado en la siguiente comunidad de Figma:
* **Link del diseño guía:** [Instagram Web UI Recreated - Figma Community](https://www.figma.com/es-es/comunidad/file/1235135369163092252/instagram-web-ui-recreated)

Se priorizó al máximo la fidelidad visual, respetando la paleta de colores oscuros, espaciados, tipografías, bordes redondeados y la disposición de paneles en forma de Dashboard (Sidebar izquierda fija y área de contenido central con scroll independiente).

---

## 2. Organización del Proyecto y Estructura
El proyecto está estructurado de manera modular y ordenada, separando las responsabilidades de lógica de datos, peticiones HTTP y componentes de la interfaz de usuario.

```text
src
│
├── components
│   ├── Header
│   │   ├── index.tsx
│   │   └── Header.css
│   ├── Feed
│   │   ├── index.tsx
│   │   └── Feed.css
│   ├── Post
│   │   ├── index.tsx
│   │   └── Post.css
│   ├── PostModal
│   │   ├── index.tsx
│   │   └── PostModal.css
│   ├── Profile
│   │   ├── index.tsx
│   │   └── Profile.css
│   ├── StoryBar
│   │   ├── index.tsx
│   │   └── StoryBar.css
│   └── Navbar
│       ├── index.tsx
│       └── Navbar.css
│
├── data
│   └── user.ts
│
├── services
│   └── catApi.ts
│
├── App.tsx
├── App.css
└── main.tsx
3. Componentización y Responsabilidades
La decisión de componentizar se basó en el principio de Responsabilidad Única (SRP), facilitando la mantenibilidad del código, evitando archivos gigantes y permitiendo la reutilización de elementos visuales.

Justificación Técnica de los Componentes:
Header (Header/): Controla la barra superior global de la aplicación. Contiene el branding (logotipo), la barra de búsqueda estética y los botones de acción rápida de creación o mensajes. Su posición es fija (sticky).

Navbar (Navbar/): Gestiona el menú de navegación lateral. Su responsabilidad es emitir los eventos de cambio de vista activa mediante callbacks hacia el componente raíz.

Profile (Profile/): Encapsula la presentación de los datos del usuario logueado. Es un componente altamente reutilizable, ya que se renderiza tanto en formato miniatura en la sidebar como en formato expandido dentro de la sección principal al navegar al perfil.

StoryBar (StoryBar/): Controla el carrusel horizontal superior de las historias simuladas, aislando el comportamiento de scroll horizontal del resto de la página.

Feed (Feed/): Es el orquestador del contenido de terceros. Su única responsabilidad es conectarse al servicio de la API, manejar la asincronía del renderizado (estado de carga) y distribuir los datos mapeando múltiples componentes Post dentro de un diseño de grilla tipo Masonry.

Post (Post/): Representa la tarjeta individual de una publicación. Maneja de forma aislada las interacciones inmediatas de la publicación, tales como el estado visual del "Like".

PostModal (PostModal/): Ventana emergente encargada de la vista de detalle profundo. Aísla toda la estructura de interacciones extendidas (comentarios simulados, inputs de texto, etc.) y bloquea el flujo principal mediante un overlay.

4. Comunicación entre Componentes mediante Props
La información fluye de manera unidireccional siguiendo las buenas prácticas de React:

De App a Navbar y Profile: App le transfiere el estado de la vista actual (currentView) y la función modificadora (setView) a la Navbar para que esta pueda actualizar la interfaz reactivamente cuando el usuario cambia entre la pestaña de "Home" y "Profile".

De Feed a Post: El componente Feed itera sobre el array de objetos recibidos de la API y le transfiere a cada Post las props de id, imageUrl, username y la función callback onClick.

De Feed a PostModal: Cuando una publicación es seleccionada, el Feed le pasa el objeto completo del post (post) a través de props al PostModal, junto con una función de cierre onClose.

5. Hooks Utilizados y Justificación Técnica
useState:

En App.tsx para controlar la vista global activa ('home' | 'profile').

En Feed.tsx para almacenar la lista de publicaciones devueltas por la API (posts), controlar el estado de la animación de carga (loading) y guardar la publicación seleccionada para el modal (selectedPost).

En Post.tsx de manera local para alternar individualmente el estado del botón de me gusta (liked) sin afectar a las demás publicaciones del feed.

useEffect:

Utilizado en Feed.tsx con un array de dependencias vacío []. Esto asegura que la petición HTTP orientada a Axios para cargar las imágenes de los gatos se ejecute únicamente una vez al momento en que el componente se monta en el DOM, optimizando el consumo de red.

6. Resolución de la Visualización Individual (Modal)
La visualización individual detallada se resolvió mediante un componente Modal Emergente (PostModal).
Cuando el usuario hace clic sobre cualquier publicación en el feed de gatos, el componente Feed captura el evento y guarda dicho objeto en el estado selectedPost. Esto dispara el renderizado condicional del modal.

Dentro del modal se expone información ampliada:

Imagen del gato en alta fidelidad y tamaño completo con contenedor adaptativo (object-fit: contain).

Nombre del usuario dueño del post simulado de forma dinámica mediante el ID de la foto.

Caja de comentarios interactiva con diseño fiel a Instagram, incluyendo descripción (caption) y comentarios prefijados de otros usuarios simulados.

Botones extendidos de interacción y barra inferior funcional para añadir nuevos comentarios.

7. Simulación del Perfil de Usuario Logueado
Para cumplir con el requerimiento sin implementar sistemas de autenticación complejos (Login/Registro), se emuló una sesión activa mediante una persistencia de datos local estática ubicada en src/data/user.ts.

Datos mostrados en el perfil:
Nombre Completo: Ugur Mercan

Nombre de Usuario (Handle): @ugur_mercan0

Medalla de Verificación: Estado verificado emulado con un icono de check oficial.

Biografía (Bio): "Digital Creator | Photography & Mountains 🏔️"

Imagen de Perfil: URL real de alta calidad extraída de repositorios de fotografía profesional.

Métricas del perfil: Contador dinámico de seguidores (121K) y Likes acumulados (900K).

Interacción y Navegación:
Al hacer clic sobre la sección de perfil de la sidebar o al seleccionar "Profile" en la Navbar lateral, el estado global conmuta. El Feed principal se desmonta fluidamente y da paso a la Vista de Perfil Dedicada, donde se visualiza el perfil en tamaño completo acompañado de una grilla de publicaciones propias asociadas a dicho creador organizadas por pestañas dinámicas (Posts, Reels, Tagged).

8. Instrucciones para Ejecutar el Proyecto
Para clonar e iniciar este proyecto de forma local, ejecutá los siguientes comandos en tu terminal:

Instalar las dependencias del proyecto:

Bash
npm install
Iniciar el servidor de desarrollo local (Vite):

Bash
npm run dev
Abrir el navegador en la ruta provista por la consola (usualmente http://localhost:5173).