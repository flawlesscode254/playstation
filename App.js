import React from 'react';
import { Text, View, Image, ScrollView, StatusBar } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import Play from './assets/play.png'
import Add from './add'
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <ScrollView style={{
      backgroundColor: "#10161E"
    }}>
      <StatusBar />
      <LinearGradient 
      start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
      colors={['#2F4697', '#1E8796', 'transparent']}
      style={{
        height: 300
      }}>

        <View style={{
          marginHorizontal: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginVertical: 20
        }}>
          <Ionicons name="arrow-back" color="#FFF" size={24} />
          <View style={{
            backgroundColor: "#2C2F36",
            padding: 5,
            borderRadius: 999
          }}>
            <Ionicons name="cart-outline" color="#FFF" size={24} />
          </View>
        </View>

        <View style={{
          marginVertical: 15,
          marginHorizontal: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row"
        }}>

          <View style={{
            marginBottom: 60
          }}>

            <View style={{
              marginBottom: 10
            }}> 
              <Text style={{
                color: "#FFF",
                fontWeight: "bold",
                fontSize: 16
              }}>PLATFORM</Text>
              <Text style={{
                color: "#cddaf7"
              }}>PS4</Text>
            </View>

            <View style={{
              marginBottom: 10
            }}> 
              <Text style={{
                color: "#FFF",
                fontWeight: "bold",
                fontSize: 16
              }}>RELEASE</Text>
              <Text style={{
                color: "#cddaf7"
              }}>Fall 2020</Text>
            </View>

            <View style={{
              marginBottom: 10
            }}> 
              <Text style={{
                color: "#FFF",
                fontWeight: "bold",
                fontSize: 16
              }}>PRICE</Text>
              <Text style={{
                color: "#cddaf7"
              }}>$50</Text>
            </View>

            <View style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20
            }}>
              <View style={{
                backgroundColor: "#1B1D28",
                padding: 7,
                borderRadius: 999
              }}>
                <Ionicons name="bookmark-outline" size={24} color="#FFF" />
              </View>
            </View>
            
          </View>

          <View style={{
            marginTop: -50
          }}>
              <Image style={{
                width: 250,
                height: 250,
                resizeMode: "contain",
              }} source={Play} />
          </View>

        </View>

      </LinearGradient>

      <View style={{
        marginHorizontal: 20,
        marginVertical: 20
      }}>
        <Text style={{
          fontFamily: "sans-serif",
          fontWeight: 'bold',
          fontSize: 25,
          color: "#FFF",
          marginTop: 15,
          marginBottom: 10,
          letterSpacing: 10
        }}>Dual Sense</Text>
        <Text style={{
          color: "gray",
          marginBottom: 10
        }}>Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Quo odit voluptates illo 
          ipsa? Dolores ipsam aperiam cumque. Maiores
        </Text>
      </View>

      <View style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 30
      }}>
          
        <Add 
          icon="game-controller"
          first="Futuristic"
          second="Design"
          col="#276A83"
        />

        <Add 
          icon="mic"
          first="Built-in"
          second="Microphone"
          col="#3E5799"
        />

        <Add 
          icon="options"
          first="Hoptic"
          second="Feedback"
          col="#784792"
        />

        <Add 
          icon="battery-charging"
          first="Fast charge"
          second="USB-C port"
          col="#584A9C"
        />

      </View>

      <LinearGradient 
        start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
        colors={['#1E232F', 'black', 'transparent']} 
        style={{
          display: "flex",
          justifyContent: 'space-between',
          alignItems: "center",
          marginHorizontal: 20,
          borderRadius: 12,
          padding: 8,
          flexDirection: "row",
          paddingHorizontal: 20,
        }}>
        <Text style={{
          color: "orange"
        }}>$ <Text style={{
          fontSize: 17,
          color: "#FFF",
          fontWeight: "bold"
        }}>50</Text> </Text>
        <LinearGradient 
          start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
          colors={['#1E8796', '#2F4697', 'transparent']} 
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 9,
            backgroundColor: "#354BA2",
            paddingHorizontal: 15,
            paddingVertical: 5
          }}>
          <Text style={{
            color: "#FFFF",
            marginRight: 25
          }}>Preorder</Text>
          <Ionicons name="arrow-forward" color="#FFF" size={24} />
        </LinearGradient>
      </LinearGradient>

    </ScrollView>
  );
}