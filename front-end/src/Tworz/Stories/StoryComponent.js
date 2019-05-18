import React from 'react'

const Story = ({ story }) => (
  <div className='stories__item'>
    <h3 className='item__title'>{story.title}</h3>
    <p className='item__body'>{story.body}</p>
    <p className='item__username'>{story.username}</p>
  </div>
)

export default Story