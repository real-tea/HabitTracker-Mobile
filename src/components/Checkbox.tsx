import { Text , TouchableOpacity , TouchableOpacityProps , View} from 'react-native'
import { Feather } from '@expo/vector-icons';
import  colors from 'tailwindcss/colors';
import Animated , { RollInRight , ZoomIn , ZoomOut } from 'react-native-reanimated';


interface CheckboxProps extends TouchableOpacity { 
    checked ?: boolean , 
    title : string
}


export function Checkbox  ({ checked = false , title , ...rest  }: CheckboxProps) {
  return (
    <TouchableOpacity
        activeOpacity ={0.7}
        className='flex-row mb-2 items-center'
        {...rest}
        >
            {
                checked ? 

            }

    </TouchableOpacity>
  )
}
