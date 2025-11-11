import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'
import { useTheme } from 'react-native-paper';
import { AppFont } from '../../utils/AppConstant';

const { width, height } = Dimensions.get('window');

interface CommentInfoProps {
icon: string;
title: string;
text: string;
}



const CommentInfo: React.FC<CommentInfoProps> = ({icon, title, text}) => {
    const { colors } = useTheme();
  return (
    <View style={{ flexDirection: 'row', width: width/3, alignItems: 'center' , marginBottom: 10}} >
        <View style={{ flexDirection: 'row', alignItems: 'center', width: width/3 }} >
    <MaterialDesignIcons name={icon} color={colors.primary} size={25} style={{ marginTop: 0, padding: 0 }}/>
    <Text style={{ fontSize: 20,
          fontFamily: AppFont.bold,
          marginLeft: 5,
          fontWeight: '600',
          color: colors.primary,
          }} >{title}</Text>
          </View>
           <View style={{ 
    width: width/1.9,
     
        backgroundColor: colors.surface,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        borderColor: colors.
    outline,
        borderWidth: 1,
    
        // ✅ iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
    
        // ✅ Android shadow
        elevation: 5,}}>
    
    
              <Text style={[styles.cardText, { color: colors.onSurface, fontSize: 14, }]}>
              {text}
            </Text>
        </View>
               </View>
  )
}

export default CommentInfo

const styles = StyleSheet.create({

     cardText: {
        fontSize: 20,
        fontFamily: AppFont.bold,
        opacity: 0.8,
      },
})