import React from 'react'

import Story from './StoryComponent'
import './Stories.css'

const Stories = ({ stories }) => (
  <div className='main__stories'>
    {stories.map(story => (<Story key={story.id} story={story} />))}
  </div>
)

export default Stories