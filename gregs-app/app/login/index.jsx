import { View, Text, Image, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import Colors from './../../constants/Colors'
import * as WebBrowser from 'expo-web-browser'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
        // Warm up the android browser to improve UX
        void WebBrowser.warmUpAsync()
        return () => {
            void WebBrowser.coolDownAsync()
        }
    }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen(){
    useWarmUpBrowser()
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google'})
    
    const onPress = useCallback(async () => {
        try {
            const { createdSessionId, signIn, singUp, setActive } = await startOAuthFlow({
                redirectUrl: Linking.createURL('/home',{ scheme: 'myapp' })
            })

            if (createdSessionId) {

            } else {

            }

        }
        catch (err) {
                console.error('OAuth error', err)
        }
    })

    return (
        <View>
        <Image source={require('./../../assets/images/shashi.jpg')}
            style={{
                width:'100%',
                height:500
            }}
        />
            <View style={{
                padding:20,
                display:'flex',
                alignItems:'center'
            }}>
                <Text style={{
                    fontFamily:'parkinsans-bold',
                    fontSize:30,
                    textAlign:'center'
                }}> Welcome to Gregs. </Text>
                <Text style={{
                    fontFamily:'parkinsans',
                    fontSize:18,
                    textAlign:'center',
                    color:Colors.GRAY
                }}>Warning: dalle gang not allowed.</Text>

                <Pressable
                onPress={onPress}
                style={{
                    padding:14,
                    marginTop:100,
                    backgroundColor:Colors.PRIMARY,
                    width:'100%',
                    borderRadius:14
                }}>
                    <Text style={{
                        fontFamily:'parkinsans-medium',
                        fontSize:20,
                        textAlign:'center'
                    }}>Get Lit</Text>
                </Pressable>
            
            </View>
        </View>
    )
}