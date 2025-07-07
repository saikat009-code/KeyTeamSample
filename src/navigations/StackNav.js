import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AvatarScreen from '../screens/AvatarScreen';

export default function StackNav() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AvatarScreen" component={AvatarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
