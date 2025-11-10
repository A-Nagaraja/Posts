import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialDesignIcons} from '@react-native-vector-icons/material-design-icons';
import { useTheme } from 'react-native-paper';
import { AppFont } from '../../Utillity/AppConstant'; // optional, if you have custom fonts

interface InfoRowProps {
  icon: string;
  label: string;
  value: string | number;
  iconSize?: number;
}
const UserInfoRow: React.FC<InfoRowProps> = ({ icon, label, value, iconSize = 25 }) => {
    const { colors } = useTheme();
  return (
   <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} >
           <MaterialDesignIcons
             name={icon} color={colors.primary} size={iconSize}
             style={{ marginTop: 0, padding: 0 }}
           />
           {/* Label Section */}
           <View style={styles.labelContainer}>
            <Text style={[styles.label, { color: colors.primary }]} >{label}</Text>
            <Text style={[styles.label, { color: colors.primary }]}>:</Text>

           </View>
           
 {/* Value Section */}
      <Text
        style={[
          styles.value,
          { color: colors.
primary, marginLeft: 5,  flexShrink: 1, flexWrap: 'wrap' },
        ]}
        numberOfLines={2}
        // ellipsizeMode="middle"
      >
        {value || 'N/A'}
      </Text>
           
           
         </View>
  )
}

export default UserInfoRow

const styles = StyleSheet.create({
     cardTitle: {
      fontSize: 20,
      fontFamily: AppFont.bold,
    },
     label: {
     fontSize: 20,
      fontFamily: AppFont.bold,
      marginLeft: 5,
      fontWeight: '600',
  },
   value: {
     fontSize: 20,
      fontFamily: AppFont.bold,
      
  },
  labelContainer: {
    flexDirection: 'row',
    width: 110, // 👈 fixed width ensures perfect alignment
    justifyContent: 'space-between',
    marginRight: 6,
  },
})
