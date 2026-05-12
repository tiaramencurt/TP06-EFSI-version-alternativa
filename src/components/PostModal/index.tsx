import './PostModal.css'

interface Props{
   post: any
   setSelectedPost: React.Dispatch<React.SetStateAction<any>>
}

function PostModal({ post, setSelectedPost }: Props) {
   return (
      <div className='modalBackground'>
         <div className='modal'>

            <button
               className='closeButton'
               onClick={() => setSelectedPost(null)}
            >
               X
            </button>

            <img src={post.image} />

            <div className='modalInfo'>
               <h2>{post.username}</h2>

               <p>{post.caption}</p>

               <h3>{post.likes} likes</h3>

               <div className='comments'>
                  {
                     post.comments.map((comment: string, index: number) => (
                        <p key={index}>{comment}</p>
                     ))
                  }
               </div>
            </div>
         </div>
      </div>
   )
}

export default PostModal