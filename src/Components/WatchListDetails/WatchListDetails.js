import React, {Component} from 'react';
import {connect} from 'react-redux';

class WatchListDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
        <h2>{this.props.enTitle}</h2>
      </section>
    )
  }
}

export default connect(null)(WatchListDetails)