import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { React$Node } from '../../TypesAndInterfaces/AppTypes';
import { color_gray, color_light_gray } from '../../Util/colors';

interface CompProps {
  // children: any
  children?: React$Node | React$Node[];
  contentInsetAdjustmentBehavior?: string;
  style?: any;
  ref?: any;
  key?: string;
}

export const AppCardView = (props: CompProps) => {
  return (
    <View
      key={props?.key}
      ref={props?.ref}
      style={props?.style ?[styles.CardTemplate,props.style] : styles.CardTemplate}
    >
      {props.children}
    </View>
  )
}

AppCardView.defaultProps = {
  style: null
}

const styles = StyleSheet.create({
  CardTemplate: 
  {
    // margin: 15,
    padding:1,
    // marginBottom: 17.5,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    // shadowRadius: 2,
    elevation: 2,
    borderRadius: 10,
    // backgroundColor:color_light_gray,   
  //  flex:1,
  }
})
