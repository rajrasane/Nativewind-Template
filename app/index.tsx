import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#0f172a" barStyle="light-content" />
      <View className="flex-1 items-center justify-center bg-[#0f172a]">
        <Text className="text-7xl font-medium text-teal-400 tracking-widest drop-shadow-lg mb-4">Hello</Text>
        <Text className="text-4xl font-thin text-gray-300 mt-2 mb-6">NativeWind ~</Text>
        <TouchableOpacity className="bg-gradient-to-r from-teal-500 to-green-300 px-8 py-4 rounded-full active:scale-95 transition-transform">
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;