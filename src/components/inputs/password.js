import {
    FormControl,
    FormErrorMessage,
    Input,
    Button,
    InputRightElement,
    InputGroup,
  } from '@chakra-ui/react';

  import {
  BsEye,
  BsEyeSlash
}
  from 'react-icons/bs'

  import { useState } from 'react'

export const PasswordInput = ({ isValid, value, onChange }) => {

    const [showPassword, setShowPassword] = useState(false)
    const onClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <FormControl isInvalid={!isValid}>
            <InputGroup size='md'>
                <Input
                    name='password'
                    value={value}
                    onChange={onChange}
                    pr='4.5rem'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Senha'
                />
                <InputRightElement width='4.5rem'>
                    <Button 
                    h='1.75rem'
                    size='sm' onClick={onClickShowPassword}>
                        {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </Button>
                </InputRightElement>
            </InputGroup>
            {!isValid ? (
                <FormErrorMessage as="p">
                    A senha deve conter ao mínimo 6 caracteres.
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}

