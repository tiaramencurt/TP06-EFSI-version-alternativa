import './Header.css'

function Header() {
   return (
      <header className='header'>
         <h1>Catstagram</h1>

         <input
            type='text'
            placeholder='Buscar'
         />
      </header>
   )
}

export default Header