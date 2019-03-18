import React, { Component } from 'react';
import { View } from 'react-native';

import Events from './Events';
import styles from './styles';

class EventsContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Events'
  };

  render() {
    return <Events />;
  }
}

export default EventsContainer;
