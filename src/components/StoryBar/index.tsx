import './StoryBar.css'

function StoryBar() {

   const stories = [1,2,3,4,5,6]

   return (
      <div className='storyBar'>
         {
            stories.map((story) => (
               <div className='story' key={story}>
                  <div className='storyBorder'>
                     <img src={`https://i.pravatar.cc/100?img=${story}`} />
                  </div>
                  <p>cat_user</p>
               </div>
            ))
         }
      </div>
   )
}

export default StoryBar