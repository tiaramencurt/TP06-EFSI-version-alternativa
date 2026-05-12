Te falta solamente esto:

* `components/Profile/index.tsx`
* `components/Profile/Profile.css`
* `README.md`
* `main.tsx`

---

# components/Profile/index.tsx

```tsx
import './Profile.css'
import user from '../../data/user'

interface Props{
   posts: any[]
}

function Profile({ posts }: Props) {
   return (
      <div className='profile'>

         <div className='profileTop'>
            <img src={user.avatar} />

            <div>
               <h2>{user.username}</h2>

               <p>{user.bio}</p>

               <div className='stats'>
                  <span>{user.posts} publicaciones</span>
                  <span>{user.followers} seguidores</span>
                  <span>{user.following} seguidos</span>
               </div>
            </div>
         </div>

         <div className='profilePosts'>
            {
               posts.map((post) => (
                  <img
                     key={post.id}
                     src={post.image}
                  />
               ))
            }
         </div>
      </div>
   )
}

export default Profile
```

---

# components/Profile/Profile.css

```css
.profile{
   width: 1000px;

   margin: 40px auto;
}

.profileTop{
   display: flex;
   align-items: center;
   gap: 40px;

   margin-bottom: 50px;
}

.profileTop img{
   width: 150px;
   height: 150px;

   border-radius: 50%;

   object-fit: cover;
}

.profileTop h2{
   margin-bottom: 10px;
}

.stats{
   display: flex;
   gap: 20px;

   margin-top: 20px;
}

.profilePosts{
   display: grid;
   grid-template-columns: repeat(3,1fr);
   gap: 10px;
}

.profilePosts img{
   width: 100%;
   height: 300px;

   object-fit: cover;
}
```

---

# main.tsx

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
)
```

---

# README.md

````md
# Catstagram

Proyecto realizado con React + TypeScript inspirado en Instagram.

## Tecnologías utilizadas

- React
- TypeScript
- Axios
- CSS

## API utilizada

- The Cat API

## Componentes creados

- Header
- Feed
- Post
- PostModal
- Profile
- StoryBar
- Navbar

## Hooks utilizados

### useState

Se utilizó para:

- Guardar publicaciones.
- Manejar likes.
- Abrir y cerrar modal.
- Guardar publicación seleccionada.
- Navegar entre feed y perfil.

### useEffect

Se utilizó para consumir la API al cargar la aplicación.

## Componentización

Cada componente tiene una responsabilidad específica.

- Feed renderiza publicaciones.
- Post muestra una publicación individual.
- PostModal muestra información detallada.
- Profile muestra el perfil emulado.

## Diseño utilizado

Diseño inspirado en Instagram y basado en Figma.

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```
````
