import React from 'react'

const Message = ({ content, author, createdAt, pseudoname }) => {
    const messageDisplay = pseudoname === author ? "self-end bg-firstWhite" : "self-start bg-firstBlue"
    const date = new Date(createdAt)
  return (
    <div className={`flex flex-col w-11/12 rounded-md p-3 justify-between my-2 ${messageDisplay} w-fit`}>
        <small className='font-bold'>{author}</small>
        <div className='flex'>
            <p className='max-w-3xl w-fit mr-4'>{content}</p>
            <small className='self-end'>{date.getHours() + ":" + date.getMinutes()}</small>
        </div>
    </div>
  )
}
export default Message;