import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackScreen } from "./src/screens/event-list/MainStackScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventDetailScreen } from "./src/screens/event-detail/EventDetailScreen";
import { EventDetailWebScreen } from "./src/screens/event-detail/EventDetailWebScreen";
import { UserProvider } from "./src/contexts/UserContext";

const EventsListStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <EventsListStack.Navigator screenOptions={{ headerShown: false }}>
            {/* //Pantallas con Tab */}
            <EventsListStack.Screen name="Main" component={MainStackScreen} />
            {/* //Pantallas sin Tab */}
            <EventsListStack.Screen
              name="EventDetail"
              component={EventDetailScreen}
            />
            <EventsListStack.Screen
              name="EventDetailWeb"
              component={EventDetailWebScreen}
            />
          </EventsListStack.Navigator>
        </NavigationContainer>
      </UserProvider>

      <StatusBar style="auto" />
    </>
  );
}
