import { View, LinkButton, Text } from "react-native"
import React from 'react';


function Profile(){
  return (
    <View>
      <Text>I am a profile</Text>
    </View>
  )
}
export default function Navbar(){
  return (
    <View>
      <Profile/>
      <Login/>
      <Messanger/>
      <Main/>
      <Info/>
      <Contact/>
    </View>
  )
}
