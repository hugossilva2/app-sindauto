import { Input as NativeBaseInput, IInputProps } from "native-base";
import { Envelope, Key } from 'phosphor-react-native';
export function Input({...rest}: IInputProps){
  return(
    <NativeBaseInput 
    bg="yellow.200"
    h={16}
    size="md"
    borderWidth={0}
    fontSize="md"
    color="black"
    placeholderTextColor="red.500"
    rounded='sm'
    _focus={{
      borderWidth: 1,
      borderColor: "red.800",
      bg:"red.300"
    
    }}
    {...rest}

    />

   
  );
}