import './Navbar.css'

interface Props {
   setView: React.Dispatch<React.SetStateAction<string>>
}

function Navbar({ setView }: Props) {
   return (
      <nav className='navbar'>
         <div style={{ padding: '0' }}>
            {/* Profile Section */}
            <div style={{
               padding: '40px 30px',
               borderBottom: '1px solid rgba(255,255,255,0.1)',
               textAlign: 'center'
            }}>
               <div style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '500px',
                  margin: '0 auto 20px',
                  background: `url('https://i.pravatar.cc/100?img=1') center/cover`,
                  border: '5px solid #0B6AF9'
               }} />
               <h3 style={{ fontSize: '45px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>Uğur Mercan</h3>
               <p style={{ fontSize: '28px', color: '#A4A4A4' }}>@ugur_mercan0 ✓</p>
            </div>

            {/* Stats Section */}
            <div style={{
               display: 'flex',
               gap: '10px',
               padding: '20px 30px',
               borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
               <div style={{
                  flex: 1,
                  background: '#282745',
                  padding: '20px',
                  borderRadius: '10px',
                  textAlign: 'center'
               }}>
                  <p style={{ fontSize: '35px', color: '#F5F5F5', fontWeight: 700 }}>121K</p>
                  <p style={{ fontSize: '12px', color: '#A4A4A4' }}>Followers</p>
               </div>
               <div style={{
                  flex: 1,
                  background: '#282745',
                  padding: '20px',
                  borderRadius: '10px',
                  textAlign: 'center'
               }}>
                  <p style={{ fontSize: '35px', color: '#F5F5F5', fontWeight: 700 }}>900K</p>
                  <p style={{ fontSize: '12px', color: '#A4A4A4' }}>Likes</p>
               </div>
            </div>

            {/* Menu Section */}
            <div style={{ padding: '50px 30px' }}>
               <button
                  onClick={() => setView('feed')}
                  style={{
                     width: '100%',
                     height: '65px',
                     border: 'none',
                     background: 'transparent',
                     color: '#FFFFFF',
                     fontSize: '35px',
                     fontWeight: 400,
                     cursor: 'pointer',
                     textAlign: 'left',
                     marginBottom: '50px',
                     fontFamily: 'Sarala'
                  }}
               >
                  🏠 Home
               </button>

               <button
                  style={{
                     width: '100%',
                     height: '65px',
                     border: 'none',
                     background: 'transparent',
                     color: '#FFFFFF',
                     fontSize: '35px',
                     fontWeight: 400,
                     cursor: 'pointer',
                     textAlign: 'left',
                     marginBottom: '50px',
                     fontFamily: 'Sarala'
                  }}
               >
                  🔍 Explore
               </button>

               <button
                  style={{
                     width: '100%',
                     height: '65px',
                     border: 'none',
                     background: 'transparent',
                     color: '#FFFFFF',
                     fontSize: '35px',
                     fontWeight: 400,
                     cursor: 'pointer',
                     textAlign: 'left',
                     marginBottom: '50px',
                     fontFamily: 'Sarala'
                  }}
               >
                  🎬 Reels
               </button>

               <button
                  style={{
                     width: '100%',
                     height: '65px',
                     border: 'none',
                     background: 'transparent',
                     color: '#FFFFFF',
                     fontSize: '35px',
                     fontWeight: 400,
                     cursor: 'pointer',
                     textAlign: 'left',
                     marginBottom: '50px',
                     fontFamily: 'Sarala'
                  }}
               >
                  📺 İGTV
               </button>

               <button
                  onClick={() => setView('profile')}
                  style={{
                     width: '100%',
                     height: '65px',
                     border: 'none',
                     background: 'transparent',
                     color: '#FFFFFF',
                     fontSize: '35px',
                     fontWeight: 400,
                     cursor: 'pointer',
                     textAlign: 'left',
                     fontFamily: 'Sarala'
                  }}
               >
                  🔔 Notification
               </button>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
