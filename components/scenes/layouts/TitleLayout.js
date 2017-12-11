import React, { Component } from 'react';

import {
    Text,
    View,
    VrButton
} from 'react-vr';

import Title from './elements/MainTitle';
import Button from './elements/Button';

export default class TitleLayout extends Component {
    render() {
        return (
            <View
                style={{
                    width: 2,
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [0, 0, -5]}]
                }} >
                <Title />
                <Button
                    showButton={this.props.showButton}
                    text={this.props.text}
                    changeScenes={this.props.changeScenes}
                    scene={this.props.scene}
                />
            </View>
        //insert elements
        )
    }
}
