import React, { Component } from 'react';
import {
    Text,
    View,
    Animated
} from 'react-vr';

import { Easing } from 'react-native';

export default class Title extends Component {
    state = {
        slideLeft: new Animated.Value(-3),
        fadeIn: new Animated.Value(0)
    };

    componentDidMount(){
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    this.state.slideLeft,
                    {
                        toValue: 0,
                        duration: 2000,
                        easing: Easing.ease
                    }
                ),
                Animated.timing(
                    this.state.fadeIn,
                    {
                        toValue: 1,
                        duration: 3500,
                        easing: Easing.ease
                    }
                )
            ])

        ]).start();
    }

    render() {
        return (
            <View
                style={{
                    margin: 0.1,
                    height: 1
                }}>
                <Animated.Text
                    style={{
                        fontSize: .25,
                        textAlign: 'center',
                        color: 'white',
                        opacity: this.state.fadeIn,
                        transform: [
                            {translateX: this.state.slideLeft}
                        ]
                    }}>
                    VR Media Player
                </Animated.Text>
            </View>
        )
    }
}
