import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Linking
} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

class AlbumDetail extends Component {
    state = { }
    render() {
        const {
            title,
            artist,
            url,
            thumbnail_image,
            image
        } = this.props.album
        return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image 
                            style={styles.thumbnailStyle}
                            source={{uri:thumbnail_image}}
                        />
                    </View>
                    <View style={styles.headerTextStyle}>
                        <Text style={styles.headerContentStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image 
                        style={styles.imageStyle}
                        source={{uri:image}}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={() => Linking.openURL(url)}>
                        Buy Online
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: "center",
        marginHorizontal: 10
    },
    imageStyle: {
        height: 300,
        flex: 1
    }
})

export default AlbumDetail