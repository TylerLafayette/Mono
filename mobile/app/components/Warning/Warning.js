import React, { Component } from "react"
import { View, Text } from "react-native"

import styles from "./styles"

import ColorModule from "../ColorModule"

export default class Warning extends Component {
    render() {
        return (
            <View>
                <ColorModule
                    height={50}
                    colors={["#FFCF54", "#FF8C55"]}
                    >
                    <View style={styles.wrapper}>
                        <Text style={styles.text}>{ this.props.children }</Text>
                    </View>
                </ColorModule>
            </View>
        )
    }
}