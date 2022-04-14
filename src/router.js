import React from "react";
import {StyleSheet} from 'react-native';
import { createBottomTabNavigator, tabBarOptions} from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import Buscar from './pages/Buscar';
import Usuario from './pages/Usuario';
import CalcularMedia from "./pages/CalcularMedia";
import ValidarNumero from "./pages/ValidarNumero";

const Tab = createBottomTabNavigator();

export default function Router(){
    return(
        <Tab.Navigator
            style={styles.taboption}
        >
            <Tab.Screen
            name = "Média"
            component={CalcularMedia}
            options={{
                tabBarIcon:({size, color})=>(
                    <AntDesign name="calculator" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen
            name = "Validar"
            component={ValidarNumero}
            options={{
                tabBarIcon:({size, color})=>(
                    <AntDesign name="checksquare" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen
            name = "Buscar"
            component={Buscar}
            options={{
                tabBarIcon:({size, color})=>(
                    <AntDesign name="search1" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen
            name = "Usuário"
            component={Usuario}
            options={{
                tabBarIcon:({size, color})=>(
                    <AntDesign name="user" size={24} color="black" />
                )
            }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    taboption:{
        backgroundColor: 'black'
    }
  });