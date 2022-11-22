import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';


import useProdutores from './src/hooks/useProdutores';
import Routes from './src/Routes/Routes';

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Routes />
    </SafeAreaView>
  )
}