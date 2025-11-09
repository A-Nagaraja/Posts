// DetailRow.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Assuming MaterialDesignIcons is correctly imported/aliased in your actual project
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

// Define a default theme for colors. You should get this from your context/theme.
const defaultColors = {
  primary: '#007AFF', // A nice blue for primary text
  text: '#333333',   // Dark color for general text
  icon: '#555555',   // Medium color for icons
  background: '#FFFFFF',
};

const DetailRow = ({ iconName, label, value, colors = defaultColors }) => (
  <View style={styles.rowContainer}>
    {/* Icon Container for alignment and padding */}
    <View style={styles.iconContainer}>
      <MaterialDesignIcons
        name={iconName}
        color={colors.icon}
        size={22} // Slightly smaller for a better fit
      />
    </View>

    {/* Text Content */}
    <Text style={[styles.label, { color: colors.text }]}>
      {label}:
      <Text style={[styles.value, { color: colors.primary }]}> {value}</Text>
    </Text>
  </View>
);

export default DetailRow;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8, // Space between rows
    paddingHorizontal: 15, // Padding for the whole row
  },
  iconContainer: {
    width: 35, // Fixed width for consistent alignment
    alignItems: 'flex-start',
    marginRight: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '500', // Medium weight for the label
  },
  value: {
    fontSize: 14,
    fontWeight: '600', // Semi-bold for the value to stand out
  },
});