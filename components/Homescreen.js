import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon, ListItem } from '@rneui/themed';
import { items } from './Data';
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

export default class Homescreen extends Component {
    constructor(props) {
        super(props);
    }
    navigate = (item) => {
        this.props.navigation.navigate('Detail', { item: item });
    }

    render() {
        return (
            React.createElement(ScrollView, { contentContainerStyle: styles.container }, null, items.map((item, i) => (
                <Card key={i} wrapperStyle={ styles.item }>
                          <View
                            style={{
                              alignItems: "center"
                            }}
                            onPress={()=> this.hello()}
                          >
                            <Image
                              style={{ width: "100%", height: 100 }}
                              resizeMode="contain"
                              source={{
                                uri:
                                  item.img
                              }}
                               onTouch={() => this.navigate(item)}
                            />
                            <Text onPress={() => this.navigate(item)}>{item.name}</Text>
                            <Text onPress={() => this.navigate(item)}>${item.price}</Text>
                          </View>
                        </Card>
            )))

        )

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexGrow: 1
    },
    item: {
        width: window.width / 3,
    }
});