import React from 'react'
import NewCounter from './Counter/NewCounter'
import OldCounter from './Counter/OldCounter'

const Home = () => {
  return (
    <>
      <h1 className='text-xl'>Welcome To Our Home Page</h1>
      <NewCounter name={"New Counter"}/>
      <hr className='my-6'/>
      <OldCounter name={'Old Counter'}/>
    </>
  )
}

export default Home