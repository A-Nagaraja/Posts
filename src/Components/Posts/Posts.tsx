import { View, Text, StyleSheet, Dimensions, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useTheme, IconButton} from 'react-native-paper';
import { AppFont } from '../../Utillity/AppConstant';
import Header from '../Header/AppHeader';
import { Screens } from '../../Utillity/Screens';

import { getAllUsers, getAllPosts } from '../../service/userService';



const { width, height } = Dimensions.get('window');

const Posts = () => {
const { colors } = useTheme(); 
const navigation = useNavigation();

const [posts, setPosts] = useState<any>([]);
const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchData();
    }, [])
    

const fetchData = async () => {
    try {
      const [users, posts] = await Promise.all([getAllUsers(), getAllPosts()]);

      // Merge username into posts
      const mergedPosts = posts.map((post:any) => {
        const user = users.find((u:any) => u.id === post.userId);
        return {
          ...post,
          username: user ? user.username : 'Unknown',
        };
      });

      setPosts(mergedPosts);
    } catch (error) {
      console.error('API fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const postsRenderItem = ({ item }: any) => (
    (
         <View
        style={[
          styles.card,
          { backgroundColor: colors.surface, shadowColor: colors.shadow },
        ]}
      >
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', right: 10  }} onPress={() => navigation.navigate(Screens.USER_SCREEN, { userId: item.userId })}>
  <IconButton
    icon="account"
    iconColor={colors.primary}
    size={20}
    onPress={() => console.log('Pressed')}
    style={{ margin: 0, padding: 0 }}
  />
  <Text
    style={[
      styles.cardTitle,
      { color: colors.primary, marginLeft: -6 }, // slight nudge left to align better
    ]}
  >
    {item.username}
  </Text>
</TouchableOpacity>
        <Text style={[styles.cardText, { color: colors.onSurface }]}>
          {item.title}
        </Text>
      </View>
      )
  )


    if(loading){
        return(
            <View style={styles.loader}>
               <ActivityIndicator size="large" color = {colors.primary} />
            </View>
        )
    }
  return (
    <View style={[styles.container, { backgroundColor: colors.primaryContainer }]}>
      <Header title="Posts" />
      <FlatList
      data = {posts}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      renderItem={postsRenderItem}
      />
    </View>
  )
}

export default Posts


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

})