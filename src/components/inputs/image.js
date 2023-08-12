import {
    FormControl,
    FormErrorMessage,
    Input,
    FormLabel
  } from '@chakra-ui/react';

  export const ImageInput = ({isValid, value, onChange}) => {
    return(

    <FormControl isInvalid={!isValid}>
            <FormLabel>Imagem</FormLabel>
            <Input
              name='imageUrl'
              value={value}
              onChange={onChange}
              placeholder="Link para Imagem" />
            {!isValid ? (
              <FormErrorMessage as="p">
                Imagem com formato incorreto.
              </FormErrorMessage>
            ) : undefined}
          </FormControl>   
)
}