/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import PresentationalComponent from './PresentationalComponent';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <View style = {styles.dasar}>
//       <Text style = {styles.teks}>Hello Inixindo Surabaya</Text>
//     </View>
//   );
// };

export default class App extends Component {
  // state adalah sebuah variable
  state = {
    myState: 'Ini adalah nilai awal state',
  }

  // nilai yg di klik akan berubah
  updateState = () => this.setState({
    myState: 'Ini adalah nilai akhir state',
  })

  render() {
    let pic = {
      uri: 'https://i.dlpng.com/static/png/6776672_preview.png',
    }
    return(
      <View>
        <PresentationalComponent myState={this.state.myState} 
          updateState={this.updateState}
        />
        <Image source={pic} style={styles.gambar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dasar:{
    flex: 1,
    backgroundColor: '#888999',
    alignItems: 'center',
    justifyContent: 'center'
  },
  teks:{
    color: '#000000',
    fontSize: 30,
  },
  gambar:{
    width: 200,
    height: 200
  }
});

// export default App;