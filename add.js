import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

const add = ({ icon, first, second, col }) => {
    return (
        <View>
            <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>

            <View style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 25
            }}>
              <LinearGradient 
                start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
                colors={['#1E232F', '#191B24', 'transparent']}
                style={{
                    borderRadius: 12,
                    width: 45,
                    height: 45,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Ionicons name={icon} size={24} color={col} />
              </LinearGradient>
            </View>
            
            <View style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginLeft: 20,
              marginBottom: 25,
              marginRight: 20
            }}>
              <Text style={{
                color: "#FFF"
              }}>{first}</Text>
              <Text style={{
                color: "gray"
              }}>{second}</Text>
            </View>

          </View>
        </View>
    )
}

export default add

const styles = StyleSheet.create({})
