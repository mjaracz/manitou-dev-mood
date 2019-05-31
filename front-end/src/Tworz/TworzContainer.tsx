import React, {Component, EventHandler, FormEvent, SyntheticEvent} from 'react'
import { connect } from "react-redux"
import {bindActionCreators, Dispatch} from 'redux'

import CircularProgress from '@material-ui/core/CircularProgress'
import Error from './ErrorComponent'
import TworzComponent from './TworzComponent'

import { getStories } from '../redux/actions/storiesActions'

import {Event} from "./types";


interface Props {

}

class TworzContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      html: ""
    }

  }
  changeText = (e: Event) => {
      this.setState({
      html: [e.target.value]
    })
  };
  componentDidMount() {
    const { fetchStory, story } = this.props;
    fetchStory();

    console.log(story)
  }
  addText = () => {

  };

  render() {
    const { isLoading, error, story } = this.props;
    const { html } = this.state;
    console.log(isLoading);
    return(
      <main className="main">
        {isLoading &&
          <CircularProgress
            className="main__progress"
            size={80}
            color="#844f01"
          />
        }
        {!isLoading && !error &&
          <TworzComponent 
            html={html}
            stories={story}
            changeText={this.changeText}
          />
        }
        {error && <Error>{console.log(this.props)}</Error>}
      </main>
    )
  }
}

const mapStateToProps = state => ({
  story: state.stories.story,
  isLoading: state.stories.isLoading,
  error: state.stories.error
});

const mapDispatchToProps = (dispatch: Dispatch<Object>) =>
  bindActionCreators({
    getStories
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)( TworzContainer )
