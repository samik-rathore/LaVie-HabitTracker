import styled from 'styled-components';
import {View,Text,Image} from 'react-native';
import Constants from 'expo-constants'; 

const StatusBarHeight = Constants.statusBarHeight;

export const Colors={
    blue:"#d8e2dc",
    skin:"#ffe5d9",
    lpink:"#ffcad4",
    pink:"#f4acb7",
    grey:"#9d8189",
};

const {blue,skin,lpink,pink,grey} = Colors;

export const OuterContainer = styled.View`
    flex:1;
    padding:25px;
    background-color:blue;
`;

export const InnerContainer = styled.View`
    flex:1;
    
`;

export const Logo=styled.image`
    width:100px;
    height:50px;

`;

export const PageTitle = styled.text`
    text-align:center;
`