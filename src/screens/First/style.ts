import { StyleSheet } from 'react-native';
import { color_black, color_white } from '../../Util/colors';
import { horizontal_padding, vertical_padding } from '../../Util/constant';
import { FontRoboto_Medium } from '../../Util/fonts';

export const styles = StyleSheet.create({
    SafeareaViewStyle: {
        flex: 1,
        backgroundColor: color_white,
        paddingVertical: vertical_padding,
        paddingHorizontal: horizontal_padding,
        flexDirection: 'column',
    }, MainView: {
        flex: 1,
        flexDirection: 'column',
        borderColor: "#c8c8c8",
        borderWidth: 0.1, 
        borderRadius: 15,
    },
    childAppView:{
        flexDirection:'column', 
            flex:1
        ,minHeight:750,
        height:'100%', 
        maxHeight:'100%'
    } , textstyleName: {
        fontSize: 12,
        lineHeight: 14,
        // backgroundColor:'pink',
        color: color_black,
        fontFamily: FontRoboto_Medium,
        justifyContent: 'center',
        textAlignVertical: 'center'
    
      },
})