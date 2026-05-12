import { useState } from 'react'
import './Post.css'

interface Props{
   post: any
   setSelectedPost: React.Dispatch<React.SetStateAction<any>>
}

function Post({ post, setSelectedPost }: Props) {

   const [liked, setLiked] = useState(false)
   const [likes, setLikes] = useState(post.likes)

   const handleLike = () => {
      setLiked(!liked)

      if(!liked){
         setLikes(likes + 1)
      }
      else{
         setLikes(likes - 1)
      }
   }

   return (
      <div className='post'>
         <div className='postTop'>
            <img src='https://i.pravatar.cc/50' />
            <p>{post.username}</p>
         </div>

         <img
            className='postImage'
            src={post.image}
            onClick={() => setSelectedPost(post)}
         />

         <div className='postContent'>
            <button onClick={handleLike}>
               {
                  liked
                  ? '❤️'
                  : '🤍'
               }
            </button>

            <p>{likes} likes</p>

            <span>
               <strong>{post.username}</strong> {post.caption}
            </span>
         </div>
      </div>
   )
}

export default Post