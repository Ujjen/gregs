import { View, Text } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from './../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor:Colors.PRIMARY
    }}
    >
        <Tabs.Screen name='home'
        options={{
            title:'Home',
            headerShown:false,
            tabBarIcon:({color})=><AntDesign name="home" size={24} color={color} />
        }}/>

        <Tabs.Screen name='favorite'
        options={{
            title:'Favorite',
            headerShown:false,
            tabBarIcon:({color})=><MaterialIcons name="favorite-border" size={24} color={color} />
        }}
        />
        <Tabs.Screen name='inbox'
        options={{
            title:'Inbox',
            headerShown:false,
            tabBarIcon:({color})=><AntDesign name="inbox" size={24} color={color} />
        }}
        />
        <Tabs.Screen name='profile'
        options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon:({color})=><AntDesign name="profile" size={24} color={color} />
        }}
        />
    </Tabs>
  )
}