import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importing screens
import PayBillsScreen from './screens/OtherScreens/Paybills';
import SendCoincreen from './screens/OtherScreens/SendCoin';
import TabLayoutContainer from './TabLayoutContainer';
import LoginScreen from './screens/OtherScreens/LoginScreen';
import SignUpScreen from './screens/OtherScreens/SignUpScreen';
import OnBoardingScreen from './screens/OtherScreens/OnboardingScreen';

const Stack = createNativeStackNavigator();

export default function MainContainer(){
     return(
          <NavigationContainer>
               <Stack.Navigator initialRouteName="Onboarding">
                    <Stack.Screen name="TabLayoutContainer" component={TabLayoutContainer} options={{headerShown: false}}/>
                    <Stack.Screen name="SendCoin" component={SendCoincreen} options={{headerShown: false}}/>
                    <Stack.Screen name="PayBills" component={PayBillsScreen}/>
                    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Signup" component={SignUpScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Onboarding" component={OnBoardingScreen} options={{headerShown: false}}/>
               </Stack.Navigator>
          </NavigationContainer>
     );
};