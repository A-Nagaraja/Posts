import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useTheme} from 'react-native-paper';
import FontAwesome,{ MaterialDesignIcons} from '@react-native-vector-icons/material-design-icons';

import Header from '../Header/AppHeader';
import { Screens } from '../../Utillity/Screens';
import { AppFont } from '../../Utillity/AppConstant';


const { width, height } = Dimensions.get('window');

const UserScreen = () => {
  const { colors } = useTheme(); 
  // const navigation = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor: colors.primaryContainer }]}>
      <Header title="users View" />
      <View
              style={[
                styles.card,
                { backgroundColor: colors.surface, shadowColor: colors.shadow },
              ]}
            >
             
              <View style={{ flexDirection: 'row', alignItems: 'center',  }} >
        <MaterialDesignIcons
          name="account" color={colors.primary} size={25}
          style={{ margin: 0, padding: 0 }}
        />
        <Text
          style={[
            styles.cardTitle,
            { color: colors.primary }, // slight nudge left to align better
          ]}
        >
          Username : JohnDoe
        </Text>
        
        
      </View>
       <View style={{ flexDirection: 'row', alignItems: 'center',   }} >
        <MaterialDesignIcons
          name="account" color={colors.primary} size={25}
          style={{ margin: 0, padding: 0 }}
        />
        <Text
          style={[
            styles.cardTitle,
            { color: colors.primary }, // slight nudge left to align better
          ]}
        >
          Username : JohnDoe
        </Text>
        
        
      </View>

       <View style={{ flexDirection: 'row', alignItems: 'center',   }} >
        <MaterialDesignIcons
          name="account" color={colors.primary} size={25}
          style={{ margin: 0, padding: 0 }}
        />
        <Text
          style={[
            styles.cardTitle,
            { color: colors.primary }, // slight nudge left to align better
          ]}
        >
          Username : JohnDoe
        </Text>
        
        
      </View>

       <View style={{ flexDirection: 'row', alignItems: 'center',  }} >
        <MaterialDesignIcons
          name="account" color={colors.primary} size={25}
          style={{ margin: 0, padding: 0 }}
        />
        <Text
          style={[
            styles.cardTitle,
            { color: colors.primary }, // slight nudge left to align better
          ]}
        >
          Username : JohnDoe
        </Text>
        
        
      </View>
       <View style={{ flexDirection: 'row', alignItems: 'center',   }} >
        <MaterialDesignIcons
          name="account" color={colors.primary} size={25}
          style={{ margin: 0, padding: 0 }}
        />
        <Text
          style={[
            styles.cardTitle,
            { color: colors.primary }, // slight nudge left to align better
          ]}
        >
          Username : JohnDoe
        </Text>
        
        
      </View>
           
            </View>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
 container: {
    flex: 1,
  },
  card: {
      width: width - 30,
      minHeight: height / 7,
      marginTop: 15,
      alignSelf: 'center',
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
  
      // cross-platform shadow
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.25,
      shadowRadius: 6,
      elevation: 5,
    },
    cardTitle: {
      fontSize: 20,
      fontFamily: AppFont.bold,
    },
    cardText: {
      fontSize: 15,
      fontFamily: AppFont.regular,
      opacity: 0.8,
    },
    userName: { fontSize: 20, fontWeight: '700', marginBottom: 10 },
    loader:{ flex: 1, justifyContent: 'center', alignItems: 'center' }
});