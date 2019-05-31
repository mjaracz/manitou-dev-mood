import * as React from 'react';
import './Tworz.css';

import Stories from './Stories/StoriesComponent'
import {Story} from "../redux/reducers/types";
import ComponentEditable from "react-contenteditable";
import {Event} from "./types";


interface Props {
  editableRef: () => string,
  changeText: (e: Event) => void,
  stories: Story[],
  html: string,
  text: string
}


const TworzComponent =  (props: Props) => {
  const {
    editableRef,
    changeText,
    stories,
    html
  } = props;

  return (
    <main className="main">
      <Stories
        stories={stories}
      />
      <ComponentEditable
        html={html}
        innerRef={editableRef}
        onChange={changeText}
        tagName='div'
      />
    </main>
  )
};

export default TworzComponent;
