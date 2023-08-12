import {
    FormControl,
    FormErrorMessage,
    Input,
  } from '@chakra-ui/react';

  export const EmailInput = ({isValid, value, onChange}) => {
    return(

    <FormControl isInvalid={!isValid}>
            <Input
              name='email'
              value={value}
              onChange={onChange}
              placeholder="Email" />
            {!isValid ? (
              <FormErrorMessage as="p">
                Email inválido.
              </FormErrorMessage>
            ) : undefined}
          </FormControl>   
)
}