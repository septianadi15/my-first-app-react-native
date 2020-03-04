import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

class Halo extends Component {
    render(){
        return(
            <View style={{alignItems: 'center'}}>
                <Text>Halo, {this.props.nama}, apa kabar?</Text>
            </View>
        );
    }
}

export default class HaloKabar extends Component {
    render() {
        return (
            <View>
                <Halo nama = 'Septian' />
                <Halo nama = 'Adi' />
                <Halo nama = 'Prakoso' />
                <Halo nama = 'Shazad' />
            </View>
        );
    }
}