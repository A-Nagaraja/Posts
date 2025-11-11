import { View, Text, StyleSheet, Dimensions, LayoutAnimation, UIManager, FlatList, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useTheme, IconButton, Button} from 'react-native-paper';
import { AppFont } from '../../utils/AppConstant';
import Header from '../../components/Header/AppHeader';
import { Screens } from '../../utils/Screens';
import Loader from '../../components/Common/Loader';

import { getAllUsers } from '../../services/userService';
import { getAllPosts } from '../../services/postsService';



const { width, height } = Dimensions.get('window');

const Posts = () => {
const { colors } = useTheme(); 
const navigation = useNavigation();

const [posts, setPosts] = useState<any>([]);
const [loading, setLoading] = useState(true);

const [openSearch, setOpenSearch] = useState<boolean>(false);
const [searchText, setSearchText] = useState('');
const [filteredPosts, setFilteredPosts] = useState<any>([]);


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
      setFilteredPosts(mergedPosts);
      console.log('Merged Posts:', mergedPosts);
    } catch (error) {
      console.error('API fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const postsRenderItem = ({ item }: any) => (
    (
         <TouchableOpacity
        onPress={() => navigation.navigate(Screens.POST_SCREEN, { 
          userId: item.userId,
          postId: item.id,
          title: item.title, 
          username: item.username
        })}
        style={[
          styles.card,
          { backgroundColor: colors.surface, shadowColor: colors.shadow },
        ]}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', right: 10 }} >
  <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate(Screens.USER_SCREEN, { userId: item.userId })}>
  <IconButton
    icon="account"
    iconColor={colors.primary}
    size={20}
     onPress={() => navigation.navigate(Screens.USER_SCREEN, {userId: item.userId})}
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
</View>

        <Text style={[styles.cardText, { color: colors.onSurface }]}>
          {item.title}
        </Text>
        
      </TouchableOpacity>
      )
  )

  const handleIconPress = React.useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenSearch(prev => !prev);
    if (openSearch) {
      setSearchText('');
      setFilteredPosts(posts);
    }
}, [posts, openSearch]);

const handleSearchChange = (text: string) => {
  setSearchText(text);

  if (text.trim().length === 0) {

    setFilteredPosts(posts);
  } else {
    const filtered = posts.filter((item: any) =>
      item.title.toLowerCase().includes(text.toLowerCase()) ||
      item.username?.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPosts(filtered);
  }
};



    if(loading){
        return(
          <Loader />
        )
    }
  return (
    <View style={[styles.container, { backgroundColor: colors.primaryContainer }]}>
      <Header title="Posts" rightIcon={true} iconName={openSearch ? "magnify-close" : "magnify"} onRightIconPress={handleIconPress}/>
      
      {openSearch &&(
<View style={{width: width-30, height: 50, marginTop: 10, alignSelf:'center', borderRadius: 20, flexDirection:'row', alignItems:'center', paddingHorizontal:10, borderWidth:1, borderColor: colors.primary, marginBottom:10, }}>
    <TextInput placeholder='Search Posts' style={{flex:1, fontSize:16}} autoFocus={true} value={searchText} onChangeText={handleSearchChange}/>
      </View>
      )}
      
      <FlatList
      data = {filteredPosts}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 0, paddingBottom: 20 }}
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