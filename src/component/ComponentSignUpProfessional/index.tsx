import React, { useState, useEffect, useRef } from 'react';
import { Image, TextInput } from 'react-native';
import { AppView } from '../AppView';
import { TextView } from '../TextView';
import { AppExtraEditText } from '../AppExtraEditText';
import { AppExtraEditTextPassword } from '../AppExtraEditTextPassword';
import { AppTochableOpacity } from '../AppTochableOpacity';
import { StyleSheet } from 'react-native';
import { styles } from './style';
import { Dropdown } from 'react-native-element-dropdown';
import { roleValue } from '../../Screens/Registration/Constant';
import { message } from '../../Util/String';
import { iconpassword, iconpasswordInactivemask, iconpasswordactivemask, image_register, img_person, img_professional } from '../../Util/ImageAssets';
import { login_field_text_hint_color } from '../../Util/Colors';
import { AppCheckbox } from '../AppCheckbox';
import { AppImageView } from '../AppImageView';

export const ComponentSignUpProfessional = () => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [terms, setterms] = useState(false);

  const [firstname, setfirstname] = useState('');
  const [secondname, setsecondname] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [confpassword, setconfpassword] = useState('');

  const firstnameref = useRef(null);
  const lastnameref = useRef(null);
  const emailaddress = useRef(null);

  const passwordref = useRef(null);
  const passwordconf = useRef(null);

  return (
    <AppView style={styles.MainView}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'white' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={roleValue}
        search={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={
          !isFocus ? message?.signUpProfessional.SelectProfession : '...'
        }
        // searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item?.value || '');
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Image
            resizeMethod="resize"
            resizeMode="contain"
            style={styles.leftImageStyle}
            source={img_professional}></Image>
        )}
      />

      <AppExtraEditText
        onChangeText={text => {
          setfirstname(text);
        }}
        value={firstname}
        leftimagestyle={styles.emailLeftIconStyle}
        onSubmitEditing={() => {
          lastnameref?.current?.focus();
        }}
        placeholderTextColor={login_field_text_hint_color}
        placeholder={message?.signUpProfessional?.firstname}
        leftImageUri={img_person}
        IsLeftIcon={true}
        maxLength={35}
        keyboardType="email-address"
        ParentViewStyle={styles.ediTextParentView}
        ref={firstnameref}
        style={styles.editextStyle}></AppExtraEditText>

      <AppExtraEditText
        onChangeText={text => {
          setsecondname(text);
        }}
        ref={lastnameref}
        value={secondname}
        leftimagestyle={styles.emailLeftIconStyle}
        onSubmitEditing={() => {
          emailaddress?.current?.focus();
        }}
        placeholderTextColor={login_field_text_hint_color}
        placeholder={message?.signUpProfessional?.secondname}
        leftImageUri={img_person}
        IsLeftIcon={true}
        maxLength={35}
        keyboardType="name-phone-pad"
        ParentViewStyle={styles.ediTextParentView}
        style={styles.editextStyle}></AppExtraEditText>

      {/* Email component here */}

      {/* emailaddress */}

      <AppExtraEditText
        onChangeText={text => {
          setEmail(text);
        }}
        ref={lastnameref}
        value={Email}
        leftimagestyle={styles.emailLeftIconStyle}
        onSubmitEditing={() => {
          passwordref?.current?.focus();
        }}
        placeholderTextColor={login_field_text_hint_color}
        placeholder={message?.signUpProfessional?.emailaddress}
        leftImageUri={img_person}
        IsLeftIcon={true}
        maxLength={40}
        keyboardType="name-phone-pad"
        ParentViewStyle={styles.ediTextParentView}
        style={styles.editextStyle}></AppExtraEditText>



      <AppExtraEditTextPassword
        secureTextEntry={true}
        IsRightImageActivecolor={login_field_text_hint_color}
        IsRightImageInActivecolor={login_field_text_hint_color}
        IsLeftIcon
        RightImageActivePath={iconpasswordactivemask}
        RightImageInActivePath={iconpasswordInactivemask}
        leftImageUri={iconpassword}

        leftimagestyle={styles.passwordLeftIconStyle}
        rightIconMask={true}



        onChangeText={text => {
          setpassword(text);
        }}
        ref={passwordref}
        value={password}
        // leftimagestyle={styles.emailLeftIconStyle}
        onSubmitEditing={() => {
          passwordconf?.current?.focus();
        }}
        placeholderTextColor={login_field_text_hint_color}
        placeholder={message?.signUpProfessional?.password}

        rightimagestyle={styles.rightimagestyle}
        maxLength={20}
        keyboardType="name-phone-pad"
        ParentViewStyle={styles.ediTextParentView}
        style={styles.editextStyle}></AppExtraEditTextPassword>



      <AppExtraEditTextPassword
        secureTextEntry={true}
        IsRightImageActivecolor={login_field_text_hint_color}
        IsRightImageInActivecolor={login_field_text_hint_color}
        IsLeftIcon
        RightImageActivePath={iconpasswordactivemask}
        RightImageInActivePath={iconpasswordInactivemask}
        // leftImageUri={iconpassword}
        leftImageUri={iconpassword}
        leftimagestyle={styles.passwordLeftIconStyle}
        rightIconMask={true}
        rightimagestyle={styles.rightimagestyle}
        onChangeText={text => {
          setconfpassword(text);
        }}
        ref={passwordconf}
        value={confpassword}
        
        onSubmitEditing={() => {
          emailaddress?.current?.focus();
        }}
        placeholderTextColor={login_field_text_hint_color}
        placeholder={message?.signUpProfessional?.confpassword}


        maxLength={20}
        keyboardType="name-phone-pad"
        ParentViewStyle={styles.ediTextParentView}
        style={styles.editextStyle}></AppExtraEditTextPassword>



      <AppView style={styles.CheckBoxView}>
     
        <AppCheckbox
          selecetdstyle={styles.activeImageStyle}
          unselectedstyle={styles.activeImageStyle}
          checked={terms}
          onChange={(status) => {
            setterms(status)
          }}
          textstyle={styles.CheckboxTextStyle}
          label={message?.login?.login_remember}
        />


      </AppView>


      <AppTochableOpacity onPress={() => {
                   
                  }}>

                    <AppImageView resizeMethod='auto'
                      resizeMode='contain'
                      style={styles.loginbuttonstyle} source={image_register}>

                    </AppImageView>
                  </AppTochableOpacity>


    </AppView>
  );
};
