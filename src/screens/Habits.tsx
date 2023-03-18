import { useRoute } from "@react-navigation/native";
import clsx from "clsx";
import dayjs from "dayjs";
import { useEffect , useState } from 'react';
import { ScrollView , View , Text , Alert } from 'react-native';
// import { BackButton }


interface DayInfoProps { 
    completedHabits : string[],
    possibleHabits : {
        id : string , 
        title : string,
    }[];
}

interface HabitParams { 
    date : string,
}



export function Habit(){
    const [ isLoading , setIsLoading ] = useState(true);
    const [ dayInfo , setDayInfo ] = useState<DayInfoProps | null>(null)
    const [ completedHabits , setCompletedHabits ] = useState<string[]>([]);
    const route = useRoute();
    const { date } = route.params as HabitParams;


    const parsedDate = dayjs(date);
    const isDateInPast = dayjs(parsedDate).endOf('day').isBefore(new Date());
    const dayOfWeek  = parsedDate.format('dddd');
    const dayAndMount = parsedDate.format("DD/MM")

    const habitProgress = dayInfo?.completedHabits.length || completedHabits.length > 0
    ? generateProgressPercentage(dayInfo!.possibleHabits.length , completedHabits.length)
    : 0;
    //create a generateProgressPercentage utils 

    const fetchHabits = async() => {
        try{
            setIsLoading(true)
            const response = await api.get('/day' , {params : {date}});


            setDayInfo(response.data);
            setCompletedHabits(response.data.completedHabits);
        }catch(error){
            console.log(error);
            Alert.alert('Oops' , 'Habits not uploaded' );
        }finally{
            setIsLoading(true);
        }
    }


    const handleToggleHabit = async(habitId : string) => {
        try{
            await api.patch(`/habits/${habitId}/toggle`)

            if(completedHabits.includes(habitId))
            {
                setCompletedHabits(prevState=>prevState.filter(id=>id!==habitId))
            }else{
                setCompletedHabits(prevState=>[...prevState, habitId])
            }
        }catch(error){
            console.log(error);
            Alert.alert("oops " , "not possible to update the habit status");
        }
    }

    useEffect(()=>{
        fetchHabits()
    },[]);

}