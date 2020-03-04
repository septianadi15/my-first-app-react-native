import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

const PresentationalComponent = (props) => {
    return (
        <View>
            <Text style={styles.teks} onPress={props.updateState}>
                {props.myState}
            </Text>
        </View>
    );
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
    }
});

export default PresentationalComponent;