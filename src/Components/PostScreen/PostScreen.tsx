import React, { use, useEffect, useState} from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import { IconButton, useTheme} from 'react-native-paper';
import Header from '../Header/AppHeader';
import { AppFont } from '../../Utillity/AppConstant';
import UserInfoRow from '../UserScreen/UserInfoRow';
import { getAllComments } from '../../service/userService';
import { MaterialDesignIcons} from '@react-native-vector-icons/material-design-icons';
import CommentInfo from './CommentInfo';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

type RouteParams = {
  Post: {
    userId: number;
    postId: number;
    title: string;
    username: string;
  };
};

const PostScreen = () => {

const { colors } = useTheme(); 
const route = useRoute<RouteProp<RouteParams, 'Post'>>();
 const { postId,title, userId, username } = route.params;

 const [comments, setComments] = useState<any>([]);
 const [loading, setLoading] = useState(true);



 useEffect(() => {
    fetchComments();
  }, [postId]);

 const fetchComments = async () =>{
  try {
// setLoading(true);
    const allComments = await getAllComments();
    const postComments = allComments.filter((comment:any) => comment.postId === postId);
    setComments(postComments);
    
  } catch (error) {
    console.error('Error fetching comments:', error);
  }finally {
    setLoading(false);
  }
 }

 const commentRenderItem = ({ item }: any) => (
   <View
              style={[
                styles.card,
                { backgroundColor: colors.surface, shadowColor: colors.shadow },
              ]}
            >
    
    <CommentInfo icon="format-align-left" title="Subject" text={item.name}/>
<CommentInfo icon="comment-account-outline" title="Comment" text={item.body}/>
<CommentInfo icon="email-outline" title="Email" text={item.email}/>

          
    </View>
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
      <Header title="Post View" />
     <View style={[
                styles.postContainer,
                { backgroundColor: colors.surface, shadowColor: colors.shadow },
              ]}>
              <View style={{  alignItems: 'center',  }}>
  <IconButton
    icon="account-box"
    iconColor={colors.primary}
    size={70}
    style={{ bottom: 20 }}
  />
  <Text
    style={[
      styles.cardTitle,
      { color: colors.primary, }, // slight nudge left to align better
    ]}
  >
    {username}
  </Text>
</View>
<View style={{ 
    height: 100,
    backgroundColor: colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderRadius: 10,
    borderColor: colors.
primary,
    borderWidth: 1,

    // ✅ iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    // ✅ Android shadow
    elevation: 5, }}>
        <Text style={[styles.cardText, { color: colors.onSurface }]}>
          {title}
        </Text>
        </View>
        
     </View> 

<FlatList 
data={comments}
keyExtractor={(item) => item.id.toString()}
contentContainerStyle={{ padding: 16 }}
renderItem={commentRenderItem}
/>
    

       
           
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
  },
   postContainer: {
      width: width,
      minHeight: height / 6,
      alignSelf: 'center',
      paddingVertical: 16,
      paddingHorizontal: 20,
  
      // cross-platform shadow
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.25,
      shadowRadius: 6,
      elevation: 5,
    },
      cardTitle: {
        fontSize: 25,
        fontFamily: AppFont.bold,
        bottom: 40,
      },
      cardText: {
        fontSize: 20,
        fontFamily: AppFont.bold,
        opacity: 0.8,
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
    loader:{
       flex: 1, justifyContent: 'center', alignItems: 'center'
    }
  
})