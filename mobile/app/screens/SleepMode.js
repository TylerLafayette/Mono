import React, { Component } from "react"
import { View, Text, StatusBar, TouchableHighlight } from "react-native"
import Clock from "../components/Clock"
import { withRouter } from "react-router-native"
import { stopSleep } from "../actions/trackActions"
import { connect } from "react-redux"

@connect((store) => {
	return {
		track: store.track
	}
})
class SleepMode extends Component {
    componentDidMount() {

    }
    onPress() {
        this.props.dispatch(stopSleep(this.props.track.startTime))
        this.props.history.push("/")
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#000000"
            }}>
                <StatusBar
                    backgroundColor="black"></StatusBar>
                <Clock />
                
                <TouchableHighlight
                    onPress={this.onPress.bind(this)}
                    >
                    <Text style={{
                        textAlign: "center",
                        color: "rgba(255,255,255,0.2)"
                    }}>Tap to return</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default withRouter(SleepMode)