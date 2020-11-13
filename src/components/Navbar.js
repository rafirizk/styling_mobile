import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class Navbar extends Component {
    state = { }

    render() {
        const {viewStyle,textStyle} = styles
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.navbarText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: "center",
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2
    }, 
    textStyle: {
        fontSize: 25
    }
})

export default Navbar
