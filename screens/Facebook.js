import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class FacebookScreen extends React.Component{
    render()
    {
        return(
            <View>
                <Text style={styles.text}>Facebook</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   text:{
       color: "blue",
       textAlign: "center",
       alignItems: "center",
       fontSize: "5rem",
   }
})

export default FacebookScreen;