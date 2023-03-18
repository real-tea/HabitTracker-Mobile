// import { NavigationContainer } from "@react-navigation/native"
 import { NavigationContainer } from '@react-navigation/native';

import { View } from 'react-native';
import { AppRoute } from "./app.routes";

export function Routes(){
    return(
        <View>
            <NavigationContainer>
                <AppRoute/>
            </NavigationContainer>
        </View>
    )
}