
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Header/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime]=useState(0)

  const handleAddToBookmark = blog=>{
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id,time)=>{
    const newReadingTime = readingTime+ time;
    setReadingTime(newReadingTime)
     // remove the read blog from bookmark
     // console.log('remove bookmark', id)
     const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
     setBookmarks(remainingBookmarks)
  }
  
  return (
    <>
     
      <div className=' m-3'>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-3'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>

      </div>

     
      <footer className=' bg-black h-32' >

      <p className=' text-white text-center items-center' >Copyright © 2023 - All right reserved</p>

    <p className='text-white text-center' >
    work hard <br />
   Go ahead and dont lose heart <br />
    Give up the peaceful sleep <br />
 You will be successful inshallah
    </p>

      </footer>

    
      
    </>
  )
}

export default App
