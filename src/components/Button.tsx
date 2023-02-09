import { Button as ButtonNativeBase, IButtonProps, Heading  } from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export function Button( {title, ...rest }: Props) {
  return (
    <ButtonNativeBase 
    bg='red.500'
    h={16}
    fontSize='sm'    
    rounded='sm'
    _pressed={{bg:'red.400'}}


    
    {...rest}>
      <Heading  color='yellow.500' fontSize='2xl' >
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}