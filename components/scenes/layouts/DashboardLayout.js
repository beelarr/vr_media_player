import React, { Component } from 'react';

import { View, Animated } from 'react-vr';

import { Easing } from 'react-native';

import MenuButtons from './elements/MenuButons';
import TileButtons from './elements/TileButtons';
import ProgressCircles from './elements/ProgressCircles';
import Button from './elements/Button';

export default class DashboardLayout extends Component {

    state = {
      color1: "#A482DF",
      color2: "#DBDAF1",
      showButton: false,
      slideLeft: new Animated.Value(-5),
      fadeIn: new Animated.Value(0),
      text: this.props.text,
      borderWidths: [0, 0, 0, 0, 0, 0]

    };

    updateScene = () => {
        this.setState({
            color1: "#DBDAF1",
            color2: "#A482DF",
            text: 'Watch Video'
        })
    }

    updateStage = input => {
        if(this.state.showButton === false) {
            this.setState({showButton: true});
        }
        switch (input) {
            case 1:
                this.setState({borderWidths: [0.05, 0, 0, 0, 0, 0]});
                break;
            case 2:
                this.setState({borderWidths: [0, 0.05, 0, 0, 0, 0]});
                break;
            case 3:
                this.setState({borderWidths: [0, 0, 0.05, 0, 0, 0]});
                break;
            case 4:
                this.setState({borderWidths: [0, 0, 0, 0.05, 0, 0]});
                break;
            case 5:
                this.setState({borderWidths: [0, 0, 0, 0, 0.05, 0]});
                break;
            case 6:
                this.setState({borderWidths: [0, 0, 0, 0, 0, 0.05]});
                break;
        }
    }


    componentDidMount() {
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
            <View>
                <Animated.View
                    style={{
                        width: 5,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        layoutOrigin: [0.5, 0.5],
                        transform: [
                            {translateX: this.state.slideLeft},
                            {translateZ: -5}
                        ],
                        marginTop: -0.3,
                        opacity: this.state.fadeIn
                    }}>
                    <MenuButtons />
                    <TileButtons
                        updateStage={this.updateStage.bind(this)}
                        borderWidths={this.state.borderWidths}
                    />
                    <ProgressCircles color1={this.state.color1} color2={this.state.color2} />
                </Animated.View>
                <View
                    style={{
                        width: 5,
                        height: 0.5,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        layoutOrigin: [0.5, 0.5],
                        transform: [
                        {translate: [0, 1, -5]}
                        ],

                    }}>
                    <Button
                        updateScene={this.updateScene}
                        showButton={this.state.showButton}
                        text={this.state.text} />
                </View>
            </View>
        )
    }
}