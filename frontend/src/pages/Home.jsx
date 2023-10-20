import React from 'react'
import StatusIcons from '../components/homePage/StatusIcons'
import SideBar from '../components/homePage/SideBar'
import Posts from '../components/homePage/Posts'

const Home = () => {
  return (
    <div className='sideNav flex'>
      <div className='side-nav'>
      <SideBar/>
      </div>

      <div className='statuses'>
        <StatusIcons/>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <Posts/>
        </div>
      
    </div>
  )
}

export default Home;
