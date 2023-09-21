import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function LoginScreen() {
  const navigation = useNavigation()

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image className="absolute" style={{ height: hp(90), width: wp(100)}} source={require('../assets/images/background.png')} />

      {/* lights */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image resizeMode="contain" style={{ height: hp(23), width: wp(23)}} entering={FadeInUp.delay(200).duration(1000).springify()} source={require('../assets/images/light.png')} />
        <Animated.Image resizeMode="contain" style={{ height: hp(17), width: wp(17)}} entering={FadeInUp.delay(400).duration(1000).springify()} source={require('../assets/images/light.png')} />
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around">
        {/* title */}
        <View style={{position: 'absolute', top: hp(25), alignSelf: 'center'}} className="flex items-center">
          <Animated.Text style={{ fontSize: hp(6) }} entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider">
            Login
          </Animated.Text>
        </View>

        {/* form */}
        <View style={{ top: hp(20) }} className="flex items-center mx-4 space-y-4">
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder='Email' placeholderTextColor={'gray'}/>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
              <Text style={{ fontSize: hp(3) }}className="font-bold text-white text-center">Login</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
            <Text>Don't have account? </Text>
            <TouchableOpacity onPress={() => navigation.push('SignUp')}>
              <Text className="text-sky-600">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  )
}