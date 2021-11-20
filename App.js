import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto"/>
      <HomeScreen></HomeScreen>  
    </Fragment>
  );
}

