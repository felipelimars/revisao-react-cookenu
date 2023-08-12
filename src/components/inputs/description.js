import {
    FormControl,
    FormErrorMessage,
    Textarea,
    FormLabel
  } from '@chakra-ui/react';

  export const DesciptionTextArea = ({isValid, value, onChange}) => {
    return(

    <FormControl isInvalid={!isValid}>
            <FormLabel>Descrição</FormLabel>
            <Textarea
              name='description'
              value={value}
              onChange={onChange}
              placeholder="Descrição da receita" />
            {!isValid ? (
              <FormErrorMessage as="p">
                Descrição da receita.
              </FormErrorMessage>
            ) : undefined}
          </FormControl>   
)
}