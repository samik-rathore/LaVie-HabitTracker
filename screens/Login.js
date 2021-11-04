import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { InnerContainer } from '../components/styles';
const Login = () => {
    return(
        <OuterContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <Logo source={require('./../assets/logo.png')}/>
                <PageTitle/>
                <Formik >

                </Formik>  
            </InnerContainer>
        </OuterContainer>
    );
}

export default Login;