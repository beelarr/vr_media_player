import React, { Component } from 'react';
import {
    Text,
    View,
    asset,
    Pano
} from 'react-vr';
import DashboardLayout from './layouts/DashboardLayout';

export default class Dashboard extends Component {
    render() {
        return (
            <View>
                <Pano source={asset('fort-night.jpg')} />
                <DashboardLayout
                    previews={this.props.previews}
                    text={this.props.text}
                    captureSelection={this.props.captureSelection}
                    changeScenes={this.props.changeScenes}
                    scene={this.props.scene}
                    environments={this.props.environments}

                />
            </View>
        )
    }
}
