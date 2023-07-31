'use strict';
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'; 
import Detail from './Detail';
import { ListItem, Card } from 'react-native-elements';
import { items } from './Data';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './Homescreen';
import { Link } from '@react-navigation/native';

export default class HomeTab extends Component {
    constructor(props) {
        super(props);
        this.homeScreenRef = React.createRef();
    }

     navigate(item) {
        this.homeScreenRef.current.navigate(item);
    }

  render() {
        const HomeStack = createStackNavigator();
        return (React.createElement(HomeStack.Navigator, null,
            React.createElement(HomeStack.Screen, { name: "Homepage", options: { headerTitle: "Clothing & Accessories" } }, props => React.createElement(Homescreen, Object.assign({}, props, { ref: this.homeScreenRef }))),
            React.createElement(HomeStack.Screen, { name: "Detail", options: { headerTitle: "Details" }, component: Detail })));
    
    }
}



