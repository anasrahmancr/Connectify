import React from 'react'
// import StatusIcons from '../components/home/homeComponents/StatusIcons.jsx'
import SideBar from '../components/home/homeComponents/SideBar.jsx'
import Timeline from '../components/home/homeComponents/TImeline.jsx'
import PostContainer from '../components/home/homeComponents/post/PostContainer.jsx'

const Home = () => {
  return (
    <div className='homepage'>
      <div className='homepag-nav'>
      <SideBar/>
      </div>
      <div className='homepage_timeline'>
        <Timeline/>
      </div>
       
      <div className='flex flex-col justify-center items-center max-h-min '>
        <PostContainer/>
        </div>
       
    
    </div>
  )
}

export default Home;
