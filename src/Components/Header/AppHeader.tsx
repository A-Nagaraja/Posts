import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useTheme,IconButton, Icon } from 'react-native-paper';
import { AppFont } from '../../utils/AppConstant';


interface HeaderProps {
  title: string;
  iconName?: string;
  rightIcon?: boolean;
  onRightIconPress?: () => void;
}

const AppHeader: React.FC<HeaderProps> = ({ title, rightIcon, onRightIconPress,iconName }) => {
  const { colors } = useTheme();

  return (
    <View>
      <View style={[styles.headerMain, { backgroundColor: colors.primary }]}>
        <Text style={[styles.headerTitle, { color: colors.onPrimary }]}>
          {title}
        </Text>
        {rightIcon && (<View style={{ position: 'absolute', right: 20 }}>
<IconButton  
    icon={iconName || "magnify"}
    iconColor={colors.onPrimary}
    size={25}
    onPress={onRightIconPress}
    style={{ margin: 0, padding: 0 }} />
        </View>)}
      </View>
    </View>
  );
};

export default React.memo(AppHeader);

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
