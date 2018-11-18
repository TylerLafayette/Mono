import React, { Component } from "react"
import { View, Text } from "react-native"

import styles from "./styles"

import ColorModule from "../ColorModule"
import WaveAnim from "../WaveAnim"

export default class Bedtime extends Component {
    render() {
        return (
            <View>
                <ColorModule height={160}>
                    <View style={styles.innerFlex}>
                        <View style={styles.absolute}>
                            <WaveAnim style={styles.absolute}></WaveAnim>
                        </View>
                        <Text style={styles.timeTarget}>10:30</Text>
                        <Text style={styles.subtitle}>bedtime</Text>
                    </View>
                </ColorModule>
            </View>
        )
    }
}