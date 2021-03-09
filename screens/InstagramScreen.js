import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

class InstagramScreen extends React.Component{
    render()
    {
        return(
            <View>
                <Text style={styles.text}>Instagram</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    text:{
        color: "red",
        textAlign: "center",
        alignItems: "center",
        fontSize: "5rem",
    }
 })

export default InstagramScreen;
