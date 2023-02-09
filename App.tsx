import { NativeBaseProvider, StatusBar } from 'native-base';
import { Signin } from "./src/screens/Signin";

import { THEME } from './src/Styles/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>

      <StatusBar
      barStyle='light-content'
      backgroundColor="transparent"
      translucent
      />

      <Signin />

    </NativeBaseProvider>
  );
}


