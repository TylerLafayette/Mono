import React, { Component } from "react"
import { View } from "react-native"

import AnimatedSect from "../AnimatedSect"

export default class AnimationStack extends Component {
    render() {
        return (
            <View>
                {
                    this.props.children.map((item, i) => (
                        <AnimatedSect key={i} delay={150*i}>
                            {item}
                        </AnimatedSect>
                    ))
                }
            </View>
        )
    }
}