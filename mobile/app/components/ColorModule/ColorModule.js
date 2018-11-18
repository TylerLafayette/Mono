import React, { Component } from "react"
import { View, Text } from "react-native"

import styles from "./styles"

import LinearGradient from "react-native-linear-gradient"



export default class ColorModule extends Component {
    render() {
        return (
            <View style={styles.pad}>
                <LinearGradient
                    colors={this.props.colors || ["#00B1FF", "#006FDD"]}
                    start={this.props.start || {x: 0, y: 0}} end={this.props.end || {x: 1, y: 1}}
                    style={styles.gradient}
                >
                    <View style={[styles.wrapper, {
                        height: this.props.height || 200
                    }]}>
                        { this.props.children || null }
                    </View>
                </LinearGradient>
            </View>
        )
    }
}