// import { NavigationContainer } from "@react-navigation/native"
 import { NavigationContainer } from '@react-navigation/native';

import { View } from 'react-native';
import { AppRoute } from "./app.routes";

export function Routes(){
    return(
        <View className="flex-1 bg-background">
            <NavigationContainer>
                <AppRoute/>
            </NavigationContainer>
        </View>
    )
}