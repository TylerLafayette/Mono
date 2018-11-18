import React, { Component } from "react"
import { View, Text } from "react-native"
import moment from "moment"

import styles from "./styles"

export default class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date: moment(),
            interval: null
        }
    }
    componentDidMount() {
        this.setState({interval: setInterval(this.refreshTime.bind(this), 1000)})
    }
    componentWillUnmount() {
        clearInterval(this.state.interval)
    }
    refreshTime() {
        this.setState({date: moment()})
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.clockText}>{this.state.date.format("h:mm")}</Text>
            </View>
        )
    }
}