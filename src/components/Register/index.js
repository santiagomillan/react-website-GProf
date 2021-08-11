import React from 'react'
import {Container,FormWrap,Icon,Form,FormButton,FormatContent,FormatLabel,FormatInput,FormH1} from './RegisterElements'


const Register = () => {
    return (
        <>
            <Container>
                < FormWrap>
                    <Icon to="/">GestoProf</Icon>
                    <FormatContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormatLabel htmlFor='for'>Name</FormatLabel>
                            <FormatInput type='name' required></FormatInput>
                            <FormatLabel htmlFor='for'>Email</FormatLabel>
                            <FormatInput type='email' required></FormatInput>
                            <FormatLabel htmlFor='for'>Password</FormatLabel>
                            <FormatInput type='password' required></FormatInput>
                            <FormatLabel htmlFor='for'>Confirmar Password</FormatLabel>
                            <FormatInput type='password' required></FormatInput>
                            <FormatLabel htmlFor='for'>Telefono</FormatLabel>
                            <FormatInput type='number' required></FormatInput>

                            <FormButton type='submit'>Continue</FormButton>
                            {/* <Text>Forgot password</Text> */}
                        </Form>
                    </FormatContent>
                </FormWrap>
            </Container>  
        </>
    )
}

export default Register