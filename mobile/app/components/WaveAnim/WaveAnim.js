import React, { Component } from "react"
import { View, Image } from "react-native"

import styles from "./styles"

export default class WaveAnim extends Component {
    render() {
        return (
            <View style={styles.image}>
                <Image style={styles.image} source={require("./images/animation.webp")} />
            </View>
        )
    }
}