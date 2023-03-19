import { Touchable, TouchableOpacity } from 'react-native'
import colors from 'tailwindcss/colors'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';


export function BackButton  ()  {

    const { goBack } = useNavigation();

  return (
    <TouchableOpacity>
        <Feather
        name = "arrow-left"
        size={32}
        color = { colors.zinc[400] }/>
    </TouchableOpacity>
  )
}
