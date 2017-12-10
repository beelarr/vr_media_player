import React, { Component } from 'react';
import {
    Text,
    View,
    VrButton,
    asset,
    Pano,

} from 'react-vr';

import TitleLayout from './layouts/TitleLayout';

export default class TitleScene extends Component {
    render() {
        return (
            <View>
                <Pano source={asset('title-background.jpg')} />
                <TitleLayout
                    text={this.props.text}
                    showButton={this.props.showButton}
                    changeScenes={this.props.changeScenes}
                    scene={this.props.scene}
                />
            </View>
        )
    }
}
