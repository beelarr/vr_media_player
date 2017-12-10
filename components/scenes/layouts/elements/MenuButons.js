import React, { Component } from 'react';
import {
    Text,
    View,
    VrButton
} from 'react-vr';

export default class MenuButons extends Component {
    render() {
        return (
            <View
                style={{
                    margin:0.1,
                    width: 1,
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'center'
                }}>

                <View
                    style={{
                        margin: 0.1,
                        height: 0.3,
                        backgroundColor: "#898794"
                    }}
                >
                    <VrButton>
                        <Text
                            style={{
                                fontSize: 0.2,
                                textAlign: 'center',
                                color: 'white'
                            }}>
                            Twitch
                        </Text>
                    </VrButton>
                </View>

                <View
                    style={{
                        margin: 0.1,
                        height: 0.3,
                        backgroundColor: "#898794"
                    }}
                >
                    <VrButton>
                        <Text
                            style={{
                                fontSize: 0.2,
                                textAlign: 'center',
                                color: 'white'
                            }}>
                        </Text>
                    </VrButton>
                </View>
                <View
                    style={{
                        margin: 0.1,
                        height: 0.3,
                        backgroundColor: "#898794"
                    }}
                >
                    <VrButton>
                        <Text
                            style={{
                                fontSize: 0.2,
                                textAlign: 'center',
                                color: 'white'
                            }}>
                        </Text>
                    </VrButton>
                </View>
                <View
                    style={{
                        margin: 0.1,
                        height: 0.3,
                        backgroundColor: "#898794"
                    }}
                >
                    <VrButton>
                        <Text
                            style={{
                                fontSize: 0.2,
                                textAlign: 'center',
                                color: 'white'
                            }}>
                        </Text>
                    </VrButton>
                </View>

            </View>

        )
    }
}
