import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white', marginTop:30}}>
          {/* searchbar */}
          <View style={{ marginHorizontal: 16, flexDirection: 'row', paddingTop: 16 }}>
            <View style={{ position: 'relative', flex: 1, justifyContent: 'center' }}>
              <TextInput placeholder='What do you want to eat?' style={{ borderWidth: 1, borderColor: '#E8E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white' }} />
              <Image source={require('./assets/icon/search.png')} style={{ position: 'absolute', top: 8, left: 12 }} />
            </View>
            <View style={{ width: 35, alignItems: 'center', justifyContent: 'center', marginStart: 16 }}>
              <Image source={require('./assets/icon/promo.png')} />
            </View>
          </View>
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