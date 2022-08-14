import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostCardScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                                source={require('../assets/profile_img.png')}
                                style={styles.profileImage}
                            ></Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/post.jpeg')} style={styles.postImage}></Image>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
                            <Text style={styles.likeText}> 12k </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      cardContainer:{
        margin:RFValue(13),
        backgroundColor:'#3d3d3d',
        borderRadius:RFValue(20),
      },
      postImage:{
        resizeMode:'contain',
        width:'95%',
        alignSelf:'center',
        height:RFValue(250),
      },
      authorContainer:{
        paddingLeft:RFValue(20),
        flex: 0.07,
        flexDirection: "row",
        marginTop:30,
        marginBottom:30
      },
      profileImage:{
        width: RFValue(20),
        height: RFValue(20),
        borderRadius: RFValue(20),
        resizeMode: 'contain',
      },
      authorNameContainer:{
        flex: 0.8,
        justifyContent: "center"
      },
      authorNameText:{
        fontSize:RFValue(20),
        color:'white'
      },
      captionContainer:{
        marginLeft: RFValue(25),
        marginTop: RFValue(10),
      },
      captionText:{
        fontSize:RFValue(18),
        color:'white'
      },
      authorImageContainer:{
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
      },
      actionContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:RFValue(10)
      },
      likeButton:{
        width:RFValue(160),
        height:RFValue(40),
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#eb3948',
        borderRadius:RFValue(30)
      },
      likeText:{
        color:'white',
        fontSize:RFValue(25),
        marginLeft:RFValue(5)
      }
});