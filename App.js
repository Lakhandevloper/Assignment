import React,{Component, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Authentication/Login.js';
import Home from './pages/HomeScreen/Home.js';
import ToDoCreate from './pages/ToDoCreate.js';
import Signup from './pages/Authentication/Signup.js';
const Stack = createNativeStackNavigator()
export default class App extends Component {
  
constructor(props){
  super(props)
  this.state={}
}
render(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ToDoCreate' component={ToDoCreate}/>
        <Stack.Screen name='Signup' component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}
  
}
