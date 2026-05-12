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