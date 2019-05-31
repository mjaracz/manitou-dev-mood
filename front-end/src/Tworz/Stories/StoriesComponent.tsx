import React from 'react'

import StoryComponent from './StoryComponent'
import './Stories.css'
import {Story} from "../../redux/reducers/types";

interface Props {
  stories: Story[]
}

const Stories = ({ stories }: Props) => (
  <div className='main__stories'>
    {stories.map(story => (<StoryComponent key={story.id} story={story} />))}
  </div>
);

export default Stories;