import React, { Component } from "react"
import { View } from "react-native"

import AnimationStack from "../components/AnimationStack"
import Bedtime from "../components/Bedtime"
import Warning from "../components/Warning"

export default class Home extends Component {
    render() {
        return (
            <View>
                <AnimationStack>
                    <Bedtime />
                    <Warning>
                        Five minutes until bedtime.
                    </Warning>
                </AnimationStack>
            </View>
        )
    }
}