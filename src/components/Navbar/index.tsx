import './Navbar.css'

interface Props{
   setView: React.Dispatch<React.SetStateAction<string>>
}

function Navbar({ setView }: Props) {
   return (
      <nav className='navbar'>
         <button onClick={() => setView('feed')}>
            Home
         </button>

         <button onClick={() => setView('profile')}>
            Perfil
         </button>
      </nav>
   )
}

export default Navbar