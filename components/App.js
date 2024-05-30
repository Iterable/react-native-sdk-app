import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { Iterable, IterableCommerceItem, IterableConfig } from '@iterable/react-native-sdk';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './Login';
import HomeTab from './HomeTab';
import { items } from './Data';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.homeTabRef = React.createRef();
        const iterableAPIKey = '1ca86ebe5f114d9f9ef94c2210c32e91';
        const config = new IterableConfig();

        config.urlHandler = (url, context) => {
            console.log(`urlHandler, url: ${url}`);
            let match = url.match(/item\/([^\/]+)/i);
            if (match && match.length > 1) {
                const id = match[1];
                const foundItem = items.find(item => item.id == id);
                if (foundItem) {
                    this.navigate(foundItem);
                } else {
                    console.log(`could not find item with id: ${id}`);
                }
                return true;
            } else {
                console.log("opening external url");
                return false;
            }
        }

        Iterable.initialize(iterableAPIKey, config);

        Iterable.getLastPushPayload().then(payload => {
            console.log("pushPayload: " + JSON.stringify(payload))
        });

        Linking.getInitialURL().then(url => {
            if (url != null) {
                Iterable.handleAppLink(url);
                console.log('url:', url);
            }
        });

        Linking.addEventListener('url', event => {
            if (event.url != null) {
                console.log('event', event.url);
                Iterable.handleAppLink(event.url);
            }
        });

    }

    render() {
        const Tab = createBottomTabNavigator();
        return (
            React.createElement(NavigationContainer, null,
                React.createElement(Tab.Navigator, {
                        screenOptions: ({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                if (route.name == 'Home') {
                                    return React.createElement(Icon, { name: "ios-home", size: size, color: color });
                                } else {
                                    return React.createElement(Icon, { name: "ios-settings", size: size, color: color });
                                }
                            },
                        }),
                    },
                    React.createElement(Tab.Screen, { name: "Home", options: { title: "Iterable" } }, props => React.createElement(HomeTab, Object.assign({ ref: this.homeTabRef }, props))),
                    React.createElement(Tab.Screen, { name: "Settings", component: Login })))
        );

    }

    navigate(item) {
        if (this.homeTabRef && this.homeTabRef.current) {
            this.homeTabRef.current.navigate(item);
        }
    }

}