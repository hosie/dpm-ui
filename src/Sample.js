import React from 'react';

class Sample extends React.Component {
  render() {
    return <audio controls ref="audio">
      <source src={this.props.src} type="audio/wav"/>
        Your browser does not support the audio element.
    </audio>
  }

  componentDidUpdate() {
    this.refs.audio.load();
}
}

export default Sample
