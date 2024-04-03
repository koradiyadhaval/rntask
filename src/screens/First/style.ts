import {StyleSheet} from 'react-native';
import { color_white } from '../../Util/Colors';
import { horizontal_padding, vertical_padding } from '../../Util/constant';

export const styles=StyleSheet.create({
    SafeareaViewStyle:{
        flex:1,
        backgroundColor:color_white,
        paddingVertical:vertical_padding,
        paddingHorizontal:horizontal_padding,
        flexDirection:'column',
    }   
})