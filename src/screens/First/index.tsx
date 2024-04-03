import React from 'react';
import { View } from 'react-native';
import {AppSafeAreaView} from '../../component/AppSafeAreaView';
import { AppView } from '../../component/AppView';
import { styles } from './style';

export const First=()=>{

    // const style=styles./

    return (
        <AppSafeAreaView style={styles.SafeareaViewStyle}>
            <AppView>

            </AppView>
        </AppSafeAreaView>
    )
}