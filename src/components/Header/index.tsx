import './Header.css'

function Header() {
   return (
      <header className='header'>
         <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h1>Instagram</h1>
         </div>

         <input
            type='text'
            placeholder='Username, hashtag and story search'
         />

         <div className='header-icons'>
            <button className='header-icon'>📷</button>
            <button className='header-icon'>⚙️</button>
            <button className='header-icon'>✈️</button>
            <button className='new-post-btn'>New Post</button>
         </div>
      </header>
   )
}

export default Header
