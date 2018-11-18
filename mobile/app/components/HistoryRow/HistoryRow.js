import React, { Component } from "react"
import { View, Text } from "react-native"
import moment from "moment"

import styles from "./styles"

export default class HistoryRow extends Component {
    render() {
        let start = moment(this.props.data.from)
        let end = moment(this.props.data.to)
        let startTc = start.format("h:mm")
        let endTc = end.format("h:mm")

        return (
            <View style={styles.rowWrapper}>
                <Text>{startTc}</Text>
                <Text>{end.from(start, true)}</Text>
                <Text>{endTc}</Text>
            </View>
        )
    }
}