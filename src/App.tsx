import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import Feed from './components/Feed'
import PostModal from './components/PostModal'
import Profile from './components/Profile'
import StoryBar from './components/StoryBar'
import Navbar from './components/Navbar'

import { getCats } from './services/catApi'

function App() {
   const [posts, setPosts] = useState<any[]>([])
   const [selectedPost, setSelectedPost] = useState<any | null>(null)
   const [view, setView] = useState('feed')

   useEffect(() => {
      const fetchCats = async () => {
         const data = await getCats()

         const formattedPosts = data.map((cat: any, index: number) => ({
            id: index,
            image: cat.url,
            username: `cat_user_${index + 1}`,
            likes: Math.floor(Math.random() * 5000),
            caption: 'Michi fachero 😺',
            comments: [
               'Que lindo gato 😍',
               'Necesito adoptarlo',
               'El mejor michi del feed'
            ]
         }))

         setPosts(formattedPosts)
      }

      fetchCats()
   }, [])

   return (
      <div className='app'>
         <Header />

         <Navbar setView={setView} />

         {
            view === 'feed'
            ?
            <>
               <StoryBar />

               <Feed
                  posts={posts}
                  setSelectedPost={setSelectedPost}
               />
            </>
            :
            <Profile posts={posts} />
         }

         {
            selectedPost &&
            <PostModal
               post={selectedPost}
               setSelectedPost={setSelectedPost}
            />
         }
      </div>
   )
}

export default App