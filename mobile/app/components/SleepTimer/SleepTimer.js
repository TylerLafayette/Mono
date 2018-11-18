import React, { Component } from "react"
import { View, Text, TouchableHighlight } from "react-native"
import ColorModule from "../ColorModule"
import { connect } from "react-redux"

import {
    withRouter
  } from 'react-router-native'
import styles from "./styles"
import { startSleep } from "../../actions/trackActions"

@connect((store) => {
	return {
		track: store.track
	}
})
class SleepTimer extends Component {
    onPress() {
        // okay so at this point its 4:17am help me but lets make a sleep mode
        this.props.dispatch(startSleep())
        this.props.history.push('/sleep')
    }
    render() {
        return (
            <View>
                <TouchableHighlight
                    onPress={this.onPress.bind(this)}>
                    <ColorModule 
                        height={100}
                        colors={["#0DFF92", "#0D7EFF"]}>
                        <View style={styles.wrapper}>
                            <Text style={styles.innerText}>START SLEEP</Text>
                        </View>
                    </ColorModule>
                </TouchableHighlight>
            </View>
        )
    }
}

export default withRouter(SleepTimer)