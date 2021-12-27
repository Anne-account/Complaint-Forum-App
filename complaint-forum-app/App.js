import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import WriteComplaint from './screens/WriteComplaint'
import ReadComplaint from './screens/ReadCompaint'
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component {
  render(){
    return(
      <SafeAreaProvider>
      <AppContainer />
      </SafeAreaProvider>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteComplaint: WriteComplaint,
  ReadComplaint: ReadComplaint
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteComplaint"){
        return(
          <Image
          source={require("./assets/complaint.webp")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadComplaint"){
        return(
          <Image
          source={require("./assets/readC.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
  )

const AppContainer = createAppContainer(TabNavigator);
