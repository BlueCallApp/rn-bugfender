import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Bugfender from '@bugfender/rn-bugfender';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    Bugfender.init ("YOUR_BUGFENDER_APP_KEY_HERE");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to RN Bugfender Example!
        </Text>
        <Text style={styles.instructions}>
          This application sends directly logs to the server if you push the screen
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Button
            onPress={this._onPressButton}
            title="Send logs"
          />
      </View>
    );
  }

  _onPressButton() {
    Bugfender.d("REACT", "Im being called from React!");

    Bugfender.d ("Bugfender", "Log without break lines in the middle of the message");
    Bugfender.d ("Bugfender", "Log with break lines \n\n in the middle of the message");
		Bugfender.d (null, "Log with tag as null");
		Bugfender.d ("Bugfender", "Normal log");
		Bugfender.d ("Bugfender", null);
		Bugfender.d (null, null);

		Bugfender.e ("Bugfender", "Log with break lines \n\n in the middle of the message");
		Bugfender.e (null, "Log with tag as null");
		Bugfender.e ("Bugfender", "Normal log");
		Bugfender.e ("Bugfender", null);
		Bugfender.e (null, null);

		Bugfender.w ("Bugfender", "Log with break lines \n\n in the middle of the message");
		Bugfender.w (null, "Log with tag as null");
		Bugfender.w ("Bugfender", "Normal log");
		Bugfender.w ("Bugfender", null);
		Bugfender.w (null, null);

		Bugfender.log (1001, "method", "file", "Debug", "tag", "Sending low level log.");
		Bugfender.log (1001, "method", "file", "Error", "tag", "Sending low level log.");
		Bugfender.log (1001, "method", "file", "Warning", "tag", "Sending low level log.");

		Bugfender.setDeviceString ("device.key.string", "fake.string.value");
		Bugfender.setDeviceBoolean ("device.key.boolean", true);
		Bugfender.setDeviceFloat ("device.key.float", 101);
		Bugfender.setDeviceInteger ("device.key.integer", 102);

		Bugfender.sendIssue ("Issue One", "Issue Message One");
		Bugfender.sendIssue ("Issue Two", "Issue Message Two");

		Bugfender.sendUserFeedback ("User feedback", "User feedback message");

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('App', () => AppComponent);
