import './Feed.css'
import Post from '../Post'

interface Props{
   posts: any[]
   setSelectedPost: React.Dispatch<React.SetStateAction<any>>
}

function Feed({ posts, setSelectedPost }: Props) {
   return (
      <div className='feed'>
         {
            posts.map((post) => (
               <Post
                  key={post.id}
                  post={post}
                  setSelectedPost={setSelectedPost}
               />
            ))
         }
      </div>
   )
}

export default Feed