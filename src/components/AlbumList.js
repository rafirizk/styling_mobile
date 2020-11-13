import React, {useEffect,useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import Axios from 'axios'
import AlbumDetails from './AlbumDetail'

const AlbumList = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => {
            setAlbums(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const renderAlbums = () => {
        return albums.map((val, index) => {
            return (
                <AlbumDetails key={index} album={val}></AlbumDetails>
            )
        })
    }

    return (
        <ScrollView>
            <View>
                {renderAlbums()}
            </View>
        </ScrollView>
    )
}

export default AlbumList