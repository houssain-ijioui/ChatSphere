import React from 'react'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='p-10 pt-40'>
        <h1 className='text-4xl font-bold text-textGrey'>Welcome To ChatSphere Where Conversations Unfold</h1>
        <p className='mt-5 text-xl text-textDark'>ChatSphere is a dynamic and immersive messaging platform designed to transform the way we connect.</p>
        <Link to="/chat">
            <button className='bg-firstOrange rounded-lg text-white p-2 text-xl mt-3 text-textWhite'>Chat Now</button>
        </Link>
    </div>
  )
}

export default Main;
