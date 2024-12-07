import { Pressable, Text, View } from "react-native";
import { Link, useRootNavigationState } from "expo-router";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-expo";
export default function Index() {

  // const { user } = useUser();

  // const rootNavigationState=useRootNavigationState()

  // useEffect(()=>{
  //   CheckNavLoaded();
  // }, [])

  // const CheckNavLoaded=()=>{
  //   if(!rootNavigationState.key)
  //     return null;
    
  // }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={'/login'}>
      
        <Text> Go To Login Screen </Text>
      
      </Link>
    </View>
  );
}
