
import React from 'react';
import { View } from 'react-native';
import DiaryListScreen from './src/screens/DiaryListScreen';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F8FAFC' }}>
      <DiaryListScreen />
    </View>
  );
}
