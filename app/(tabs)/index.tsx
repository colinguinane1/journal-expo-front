import { View, Text, Pressable} from 'react-native';

import {useState} from "react";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  return (
<View className='flex items-center justify-center h-screen w-screen'>
  <View className='flex gap-4'>
    <Text className='font-extrabold text-4xl'>Basic Counter</Text>
    <Text className={`text-xl`}>Current Count: {count}</Text>

    <Pressable className={'bg-blue-500 active:scale-[0.98] transition-all flex items-center shadow-blue-500 shadow justify-center p-2 rounded-full '} onPress={() => setCount(count + 1)}><Text className={`text-white font-extrabold`}>Add +</Text></Pressable>
    <Pressable className={'bg-blue-500 active:scale-[0.98] transition-all flex items-center shadow-blue-500 shadow justify-center p-2 rounded-full '} onPress={() => setCount(count - 1)}><Text className={`text-white font-extrabold`}>Minus -</Text></Pressable>
 </View>
</View>
  );
}
