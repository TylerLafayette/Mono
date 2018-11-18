import React, { Component } from "react"
import { View, FlatList, ScrollView } from "react-native"
import { connect } from "react-redux"

import ColorModule from "../ColorModule"
import HistoryRow from "../HistoryRow"
import { fetchHistory } from "../../actions/historyActions"
import AnimationStack from "../AnimationStack";

@connect((store) => {
	return {
		history: store.history
	}
})
export default class History extends Component {
    constructor() {
        super()
        this.interval = false
    }
    componentDidMount() {
        this.interval = setInterval(this.fetch.bind(this), 2000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    fetch() {
        this.props.dispatch(fetchHistory())
    }
    render() {
        return (
            <View>
                <ColorModule
                    height={500}
                    colors={["#FFFFFF", "#FFFFFF"]}
                    >
                    <ScrollView>
                        <AnimationStack>
                            {this.props.history.items.reverse().map((item, i) => (
                                <HistoryRow key={i} data={item} />
                            ))}
                        </AnimationStack>
                    </ScrollView>
                </ColorModule>
            </View>
        )
    }
}