import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../routes/homeStack";
import About from "../screens/about";
import Settings from "../screens/settings";
import { FontAwesome } from "@expo/vector-icons";

export default function Navigator() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        labeled={false}
        activeColor="white"
        inactiveColor="red"
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,

          headerShown: true,
          tabBarStyle: {
            backgroundColor: "rgba(34,36,40,1)",
            borderTopWidth: 0,
            activeTintColor: "white",
            tabBarInactiveTintColor: "red",
          },
        })}
      >
        <Tab.Screen
          name="About"
          component={About}
          options={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "rgba(34, 36, 40, 1)",
            },
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <FontAwesome
                  name="info-circle"
                  size={20}
                  color={focused ? "white" : "gray"}
                ></FontAwesome>
              );
            },
          }}
        />

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <FontAwesome
                  name="book"
                  size={20}
                  color={focused ? "white" : "gray"}
                ></FontAwesome>
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "rgba(34, 36, 40, 1)",
            },
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome
                  name="gear"
                  size={20}
                  color={focused ? "white" : "gray"}
                ></FontAwesome>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
