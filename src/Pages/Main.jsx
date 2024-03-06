import React from 'react'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='p-10 pt-40'>
        <h1 className='text-4xl font-bold'>Welcome To ChatSphere Where Conversations Unfold</h1>
        <p className='mt-5 text-xl'>ChatSphere is a dynamic and immersive messaging platform designed to transform the way we connect.</p>
        <Link to="/join">
            <button className='bg-lime-500 rounded-lg text-white p-2 text-xl mt-3'>Chat Now</button>
        </Link>
    </div>
  )
}

export default Main;
