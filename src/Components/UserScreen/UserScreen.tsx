import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme} from 'react-native-paper';
import { MaterialDesignIcons} from '@react-native-vector-icons/material-design-icons';
import { getAllUsers } from '../../service/userService';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import Header from '../Header/AppHeader';
import { Screens } from '../../Utillity/Screens';
import { AppFont } from '../../Utillity/AppConstant';
import UserInfoRow from './UserInfoRow';


const { width, height } = Dimensions.get('window');

type RouteParams = {
  User: {
    userId: number;
  };
};
const UserScreen = () => {
  const { colors } = useTheme(); 
  // const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParams, 'User'>>();
  const navigation = useNavigation();
  const { userId } = route.params;

   const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetchUserData();
  }, [userId]);

  const fetchUserData = async () => {
    try {
      const users = await getAllUsers();
      const selectedUser = users.find((u: any) => u.id === userId);
      setUser(selectedUser);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

   if(loading){
          return(
              <View style={styles.loader}>
                 <ActivityIndicator size="large" color = {colors.primary} />
              </View>
          )
      }

        if (!user) {
    return (
      <View style={styles.container}>
        <Header title="User Details" />
        <View style={styles.error}>
          <Text style={{ color: colors.error }}>User not found.</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.primaryContainer }]}>
      <Header title="User Details" />
      <View
              style={[
                styles.card,
                { backgroundColor: colors.surface, shadowColor: colors.shadow },
              ]}
            >
             
              
       
      <UserInfoRow icon="account" label="Username" value={user.username}/>
      <UserInfoRow icon="account-box" label="Name" value={user.name}/>
      <UserInfoRow icon="email" label="Email" value={user.email}/> 
      <UserInfoRow icon="web" label="Website" value={user.website}/>
      <UserInfoRow icon="office-building-marker" label="Company" value={user.company?.name}/>

       
           
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
    loader:{ flex: 1, justifyContent: 'center', alignItems: 'center' },
    error: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});