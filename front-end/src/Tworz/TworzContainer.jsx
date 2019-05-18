import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Loading from './LoadingComponent'
import Error from './ErrorComponent'
import TworzComponent from './TworzComponent'

import { fetchStory } from '../duck/actions/dbActions'

class TworzContainer extends Component {
  static propTypes = {
    fetchStory: PropTypes.func.isRequired,
    story: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };
  constructor(props) {
    super(props);

    this.state = {
      text: 'Dokończ zaczętą historie, to od ciebie zależy jak potoczą się dalsze losy bohaterów.',
      loading: true
    }

  }
  changeText = (e) => {
      this.setState({
      [e.target.getAttribute('name')]: [e.target.innerHTML]
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
    const { text } = this.state;
    console.log(story);
    return(
      <div>
        {isLoading && <Loading/>} 
        {!isLoading && !error &&
          <TworzComponent 
            text={text}
            stories={story}
            changeText={this.changeText}
            addText={this.addText}
          />
        }
        {error && <Error>{console.log(this.props)}</Error>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  story: state.db.story,
  isLoading: state.db.isLoading,
  error: state.db.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchStory
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)( TworzContainer )
