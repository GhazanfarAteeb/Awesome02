import { SafeAreaView, ScrollView, Text } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards';
import EvelvatedCards from './components/EvelvatedCards';
import FancyCards from './components/FancyCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView overScrollMode='never' showsVerticalScrollIndicator={false}>
        <FlatCards />
        <EvelvatedCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;