import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { AppFont } from '../../Utillity/AppConstant';

interface HeaderProps {
  title: string;
}

const AppHeader: React.FC<HeaderProps> = ({ title }) => {
  const { colors } = useTheme();

  return (
    <View>
      <View style={[styles.headerMain, { backgroundColor: colors.primary }]}>
        <Text style={[styles.headerTitle, { color: colors.onPrimary }]}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerMain: {
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerTitle: { fontSize: 25, fontFamily: AppFont.bold },
});
