import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';

const Loader = () => {
  const { colors } = useTheme(); 
  return (
    <View style={styles.loader}>
                  <ActivityIndicator size="large" color = {colors.primary} />
               </View>
  )
}

export default Loader

const styles =StyleSheet.create({
    loader:{ flex: 1, justifyContent: 'center', alignItems: 'center' }
})