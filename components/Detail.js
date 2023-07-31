'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';
import { Button } from 'react-native-elements';
import { Iterable, IterableCommerceItem } from '@iterable/react-native-sdk';


export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.buyTapped = () => {
            console.log('bought item');
            const item = this.props.route.params.item;
            console.log('item:', item);
            let purchasedItem = new IterableCommerceItem(item.id, item.name, item.price, 1);
            Iterable.trackPurchase(item.price, [purchasedItem], null);
            this.props.navigation.goBack();
        };
    }
    render() {
        const item = this.props.route.params.item;
        return (
            React.createElement(View, { style: styles.container },
                React.createElement(Image, { resizeMode: 'contain', style: styles.image, src: item.img }),
                React.createElement(Text, { style: styles.text },
                    item.name),
                React.createElement(Text, { style: styles.text },
                    '$' + item.price),
                React.createElement(Button, { buttonStyle: styles.button, titleStyle: styles.buttonText, title: 'Buy Now', onPress: this.buyTapped })));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 300,
    },
    text: {
        paddingTop: 10,
        fontSize: 15,
    },
    button: {
        marginTop: 20,
        backgroundColor: 'black'
    },
    buttonText: {
        fontSize: 20,
    }
});