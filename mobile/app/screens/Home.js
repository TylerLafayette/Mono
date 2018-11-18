import React, { Component } from "react"
import { View } from "react-native"
import { connect } from "react-redux"
import moment from "moment"

import AnimationStack from "../components/AnimationStack"
import Bedtime from "../components/Bedtime"
import Warning from "../components/Warning"

@connect((store) => {
	return {
		bedtime: store.bedtime
	}
})
export default class Home extends Component {
    render() {
        let date = moment(this.props.bedtime.targetBedtime).fromNow(true)
        return (
            <View>
                <AnimationStack>
                    <Bedtime />
                    <Warning>
                        {date} until bedtime.
                    </Warning>
                </AnimationStack>
            </View>
        )
    }
}