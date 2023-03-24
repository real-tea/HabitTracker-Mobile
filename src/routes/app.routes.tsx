import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { Habit } from "../screens/Habits";
import { Home } from "../screens/Home";

const { Navigator , Screen } = createNativeStackNavigator();

export function AppRoute(){
    return(
        <Navigator screenOptions={{ headerShown : false }}>
            <Screen name="Home" component={Home}/>
            <Screen name="Habit" component={Habit}/>
            {/* <Screen name="NewHabit" component={NewHabit}/> */}
        </Navigator>
    )
}