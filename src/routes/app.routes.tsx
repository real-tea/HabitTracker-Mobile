import { createNativeStackNavigator } from "@react-navigation/native-stack"; 


const { Navigator , Screen } = createNativeStackNavigator();

export function appRoute(){
    return(
        <Navigator>
            <Screen name = "Home"/>
            <Screen name = "Habit"/>
            <Screen name = "NewHabit"/>
        </Navigator>
    )
}