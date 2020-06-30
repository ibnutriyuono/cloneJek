import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Text> XD </Text>
        </View>
        <View
          style={{
            height: 54,
            flexDirection: 'row',
            backfaceVisibility: 'center',
          }}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./assets/icon/home-active.png')}
            />
            <Text>Home</Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./assets/icon/order.png')}
            />
            <Text>Orders</Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./assets/icon/help.png')}
            />
            <Text>Help</Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./assets/icon/inbox.png')}
            />
            <Text>Inbox</Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./assets/icon/account.png')}
            />
            <Text>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}