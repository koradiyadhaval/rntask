import {StyleSheet} from 'react-native';
import {deviceBasedDynamicDimension} from '../../Util/ApplicationSpace';
import {color_white, login_field_text_hint_color} from '../../Util/Colors';
import {font_HKGrotesk_Medium, font_HKGrotesk_Regular} from '../../Util/Fonts';
export const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    minHeight: 250,
    height: 'auto',
    // backgroundColor:'red'
  },

  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: deviceBasedDynamicDimension({originalDimen: 45}),
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: deviceBasedDynamicDimension({originalDimen: 16}),
    paddingLeft: deviceBasedDynamicDimension({originalDimen: 5}),
    color: login_field_text_hint_color,
    fontFamily: font_HKGrotesk_Medium,
  },
  selectedTextStyle: {
    fontSize: deviceBasedDynamicDimension({originalDimen: 16}),
    color: login_field_text_hint_color,
    fontFamily: font_HKGrotesk_Medium,
    // color:'red'
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: login_field_text_hint_color,
  },
  inputSearchStyle: {
    height: deviceBasedDynamicDimension({originalDimen: 40}),

    fontSize: deviceBasedDynamicDimension({originalDimen: 16}),
    color: login_field_text_hint_color,
    fontFamily: font_HKGrotesk_Medium,
  },
  leftImageStyle: {
    // minHeight: '100%',

    height: deviceBasedDynamicDimension({originalDimen: 15}),
    width: deviceBasedDynamicDimension({originalDimen: 15}),
    marginHorizontal: deviceBasedDynamicDimension({originalDimen: 8}),
    alignSelf: 'center',
  },
  emailLeftIconStyle: {
    height: deviceBasedDynamicDimension({originalDimen: 15}),
    width: deviceBasedDynamicDimension({originalDimen: 15}),
    marginHorizontal: deviceBasedDynamicDimension({originalDimen: 15}),
    tintColor: '#0E92DD',
  },

  ediTextParentView: {
    height: deviceBasedDynamicDimension({originalDimen: 50}),
    maxHeight: deviceBasedDynamicDimension({originalDimen: 50}),
    marginTop: deviceBasedDynamicDimension({originalDimen: 22}),
    borderRadius: deviceBasedDynamicDimension({originalDimen: 12}),
  },
  editextStyle: {
    textAlignVertical: 'center',
    paddingVertical: 0,

    fontFamily: font_HKGrotesk_Medium,
    height: deviceBasedDynamicDimension({originalDimen: 21}),
    // lineHeight:deviceBasedDynamicDimension({originalDimen:28}),

    fontSize: deviceBasedDynamicDimension({originalDimen: 16}),
    color: login_field_text_hint_color,
    paddingRight: deviceBasedDynamicDimension({originalDimen: 5}),
  },
  passwordLeftIconStyle: {
    marginLeft: deviceBasedDynamicDimension({originalDimen: 12}),
    height: deviceBasedDynamicDimension({originalDimen: 9}),
    width: deviceBasedDynamicDimension({originalDimen: 16.5}),
  },

  rightimagestyle: {
    marginRight: deviceBasedDynamicDimension({originalDimen: 12}),
    height: deviceBasedDynamicDimension({originalDimen: 9}),
    width: deviceBasedDynamicDimension({originalDimen: 16.5}),
  },
  activeImageStyle: {
    width: deviceBasedDynamicDimension({originalDimen: 20.0}),
    height: deviceBasedDynamicDimension({originalDimen: 20.0}),
    // tintColor:"red",
    marginLeft: deviceBasedDynamicDimension({originalDimen: 10}),
    marginRight: deviceBasedDynamicDimension({originalDimen: 15}),
  },
  CheckboxTextStyle: {
    fontSize: deviceBasedDynamicDimension({originalDimen: 15}),
    color: login_field_text_hint_color,
    // backgroundColor:'red',
    justifyContent: 'center',
    textAlignVertical: 'center',

    fontFamily: font_HKGrotesk_Regular,
    height: deviceBasedDynamicDimension({originalDimen: 18}),
    lineHeight: deviceBasedDynamicDimension({originalDimen: 18}),
    textAlign: 'center',
  },

  CheckBoxView:{
    // backgroundColor:'red',
    alignContent:'center',
    justifyContent:'center',
    marginVertical:deviceBasedDynamicDimension({originalDimen:10}),
    height:deviceBasedDynamicDimension({originalDimen:35})
  },

  loginbuttonstyle:{
    alignSelf:'center',
    height:deviceBasedDynamicDimension({originalDimen:50}),
    width:deviceBasedDynamicDimension({originalDimen:300}),
    // width:'90%',
  },
});
