import { ScrollView , View , Text , TextInput , TouchableOpacity , Alert } from "react-native";
import { BackButton } from "../components/BackButton";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Checkbox } from "../components/Checkbox";
import { useState } from "react";
import { api } from "../lib/axios";

const availableWeekdays = [ "Sunday" , "Monday" , " Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ];

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
        }finally{

        }
    }

    return(
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom : 100}}
            >
            <BackButton/>

            <Text className="mt-6 text-white font-extrabold text-3xl">
                Create Habbit
            </Text>

            <Text className="mt-6 text-white font-semibold text-base">
                What is Your commitment?
            </Text>

            <TextInput
          onChangeText={setTitle}
          value={title}
          placeholder='Exercises , Sleep Well... '
          cursorColor={colors.violet[600]}
          selectionColor={colors.violet[500]}
          placeholderTextColor={colors.zinc[400]}
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-600"
        />


        <Text className="mt-6 mb-3 text-white font-semibold text-base">
          What is the recurrence?
        </Text>

        {
          availableWeekdays.map((availableWeek, index) => (
            <Checkbox
              key={`${availableWeek}-${index}`}
              title={availableWeek}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekday(index)}
            />
          ))
        }
        <TouchableOpacity
          onPress={handleCreateNewHabit}
          activeOpacity={.7}
          className="w-full h-14 mt-6 flex-row items-center justify-center bg-green-600 rounded-md"
        >
          <Feather
            name="check"
            color={colors.white}
            size={20}
          />

          <Text className="font-semibold text-base text-white ml-2">
            Confirm
          </Text>
        </TouchableOpacity>
      </ScrollView>
            
        </View>
    )
}