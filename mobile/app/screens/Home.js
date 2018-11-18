import React, { Component } from "react"
import { View } from "react-native"
import { connect } from "react-redux"
import moment from "moment"

import AnimationStack from "../components/AnimationStack"
import Bedtime from "../components/Bedtime"
import Warning from "../components/Warning"
import SleepTimer from "../components/SleepTimer"

@connect((store) => {
	return {
		bedtime: store.bedtime
	}
})
export default class Home extends Component {
    render() {
        let thing = this.props.bedtime.targetBedtime
        let d = new Date()
        let date = moment(thing).toDate()
        d.setHours(date.getHours())
        d.setMinutes(date.getMinutes())
        let string = moment(date).fromNow(true)
        return (
            <View>
                <AnimationStack>
                    <Bedtime />
                    <Warning>
                        {string} until bedtime.
                    </Warning>
                    <SleepTimer></SleepTimer>
                </AnimationStack>
            </View>
        )
    }
}