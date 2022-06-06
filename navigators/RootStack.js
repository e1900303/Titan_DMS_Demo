import React from "react";

// import Signup from "../screens/Signup";
import Login from "../screens/Login";
// import Welcome from "../screens/Welcome";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Signup" component={Signup} /> */}
      {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default RootStack;
