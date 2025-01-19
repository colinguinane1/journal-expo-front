import {View, Text, Pressable, TextInput} from 'react-native';

import {useState} from "react";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  return (
<View className='flex items-center justify-center h-screen w-screen'>
  <View className='flex gap-8 w-screen p-4'>
    <Text className='font-extrabold text-4xl'>Welcome Back</Text>
    <Text className=''>Enter your email and password.</Text>

    <TextInput className={'border p-2 rounded-full border-gray-300 px-4'} placeholder={`Email `}></TextInput>
    <TextInput className={'border p-2 rounded-full border-gray-300 px-4'} placeholder={`Password `}></TextInput>

    <Pressable className={'bg-blue-500 active:scale-[0.98] transition-all flex items-center shadow-blue-500 shadow justify-center p-2 rounded-full '} onPress={() => setCount(count + 1)}><Text className={`text-white font-extrabold`}>Login</Text></Pressable>

 </View>
</View>
  );
}
