import React, { Component } from "react";
import { View } from "react-native";
import { withNavigation } from "react-navigation";
import { ALL_EVENTS_QUERY, USER_QUERY } from "../../../apollo/queries";
import { Query } from "react-apollo";
import { getLoggedInUser } from "../../../config/models";
import CarouselEvents from "../../CarouselEvents";
import CustomText from "../../CustomText";
import styles from "./styles";
import Loader from "../../Loader";
import ErrorMessage from "../../ErrorMessage";

class FavEventsTab extends Component {
  static navigationOptions = {
    title: "Your Events"
  };

  constructor(props) {
    super(props);
    this.state = { viewerId: null };
  }

  componentDidMount = async () => {
    const viewerId = await getLoggedInUser();
    this.setState({ viewerId });
  };

  render() {
    return (
      <Query
        query={USER_QUERY}
        variables={{ id: this.state.viewerId }}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorMessage>Error</ErrorMessage>;
          const user = data.allUsers && data.allUsers[0];
          if (!user) return <Loader />;

          return user.favouriteEvents && user.favouriteEvents.length > 0 ? (
            <CarouselEvents
              events={user.favouriteEvents}
              user={user}
              navigation={this.props.navigation}
            />
          ) : (
            <View style={styles.noEventsWrapper}>
              <CustomText style={styles.noEvents}>No events</CustomText>
            </View>
          );
        }}
      </Query>
    );
  }
}

export default withNavigation(FavEventsTab);
