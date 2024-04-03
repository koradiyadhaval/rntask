import { StyleSheet } from 'react-native';
import { color_white } from '../../Util/colors';
import { horizontal_padding, vertical_padding } from '../../Util/constant';

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
    }
})