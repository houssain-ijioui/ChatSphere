import React from 'react'

const Message = ({ content, author, createdAt, pseudoname }) => {
    const messageDisplay = pseudoname === author ? "self-end bg-firstWhite" : "self-start bg-firstBlue"
    const date = new Date(createdAt)
  return (
    <div className={`flex flex-row w-11/12 rounded-md p-3 justify-between my-2 ${messageDisplay} w-fit`}>
        <p className='max-w-3xl w-fit mr-4'>{content}</p>
        <div className='flex flex-col'>
            <small className=''>{author}</small>
            <small>{date.getHours() + ":" + date.getMinutes()}</small>
        </div>
    </div>
  )
}
export default Message;