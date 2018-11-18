import React, { Component } from "react"
import { View, Text, StatusBar } from "react-native"

import { NativeRouter as Router, Switch, Route, AndroidBackButton } from "react-router-native"
import Home from "./screens/Home"

export default class Index extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: "#FFFFFF",
                flex: 1
            }}>
                <StatusBar
                    backgroundColor="#FFFFFF"
                    barStyle="dark-content" />
                <Router>
                    <AndroidBackButton>
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </AndroidBackButton>
                </Router>
            </View>
        )
    }
}