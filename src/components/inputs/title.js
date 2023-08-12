import {
    FormControl,
    FormErrorMessage,
    Input,
    FormLabel
  } from '@chakra-ui/react';

  export const TitleInput = ({isValid, value, onChange}) => {
    return(

    <FormControl isInvalid={!isValid}>
            <FormLabel>Título</FormLabel>
            <Input
              name='title'
              value={value}
              onChange={onChange}
              placeholder="Adicione um título" />
            {!isValid ? (
              <FormErrorMessage as="p">
                Titulo deve ter ao menos 4 caracteres.
              </FormErrorMessage>
            ) : undefined}
          </FormControl>   
)
}