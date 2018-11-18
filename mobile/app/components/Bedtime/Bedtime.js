import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"
import moment from "moment"

import { fetchInfo } from "../../actions/bedtimeActions"

import styles from "./styles"

import ColorModule from "../ColorModule"
import WaveAnim from "../WaveAnim"

@connect((store) => {
	return {
		bedtime: store.bedtime
	}
})
export default class Bedtime extends Component {
    componentDidMount() {
        this.props.dispatch(fetchInfo())
    }
    render() {
        let date = moment(this.props.bedtime.targetBedtime).format("h:mm")
        return (
            <View>
                <ColorModule height={160}>
                    <View style={styles.innerFlex}>
                        <View style={styles.absolute}>
                            <WaveAnim style={styles.absolute}></WaveAnim>
                        </View>
                        <Text style={styles.timeTarget}>{date}</Text>
                        <Text style={styles.subtitle}>bedtime</Text>
                    </View>
                </ColorModule>
            </View>
        )
    }
}