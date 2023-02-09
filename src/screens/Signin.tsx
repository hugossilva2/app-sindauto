import { VStack, Heading, Icon, useTheme } from 'native-base';
import colors from 'native-base/lib/typescript/theme/base/colors';
import { Envelope, Key } from 'phosphor-react-native';

import Logo from '../assets/logo.svg'
import { Input } from '../components/Input';
import Logo2 from '../assets/google.svg';
import { Button } from '../components/Button';



export function Signin() {

  const { colors } = useTheme();
  return (
    <VStack flex={1} alignItems="center" bg={'red.200'} px={6} pt={24}>
      <Logo
      width={200} />
        <Heading color={"red.600"} fontSize='2xl' mt={2} mb={6}> 
         Acesse sua Conta
          </Heading>
      

      <Input 
      placeholder="email"
      mb={4}
      InputRightElement={<Icon as={<Envelope color={colors.red[500]} />} mr={4} />}
      
      />
      <Input
      mb={8}
        placeholder="senha"
        InputRightElement={<Icon as={<Key color={colors.red[500]} />} mr={4}  />}
        secureTextEntry
        

      />
      
      <Button title="Entrar" 
      w='full'
      mb={4} />
      <Logo2 />

    </VStack>
  );
}