import { ScrollView , View , Text , TextInput , TouchableOpacity , Alert } from "react-native";
import { BackButton } from "../components/BackButton";
import { Feather } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import { Checkbox } from "../components/Checkbox";
import { useState } from "react";
import { api } from "../lib/axios";

const availableWeeekdays = [ "Sunday" , "Monday" , " Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ];

export function NewHabit(){
    const [ weekDays , setWeekDays ] = useState<number[]>([]);
    const [ title , setTitle ] = useState(' ');

    const handleToggleWeekday = (weekDayIndex : number)=>{
        if(weekDays.includes(weekDayIndex)){
            setWeekDays(prevState=>prevState.filter(weekDay => weekDay!==weekDayIndex))
        }else{
            setWeekDays(prevState => [...prevState , weekDayIndex]);
        }
    }


    const handleCreateNewHabit = async() => {
        try{
            if(!title.trim()|| weekDays.length === 0) return Alert.alert(" New Habit" , "Enter Habit and frequency");
            
            await api.post('/habits', { title , weekDays })
            setTitle('');
            setWeekDays([]);
        
        }catch(error){
            console.log(error);
            Alert.alert("error" , "Couldn't create a new habit");
        }
    }

    return(
        <View>
            Hello
        </View>
    )
}