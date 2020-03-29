import React, { Component } from 'react'
import { Text, Dimensions, Image, View,StyleSheet, TextInput, ToastAndroid } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
const {width,height} = Dimensions.get('window');
export default class Login extends Component{
  username = '';
  password = '';

  onUsernameChanged = (newUsername) =>{
    console.log("username",newUsername);
    this.username = newUsername;
  }
  
  onPasswordChanged = (newPassword) =>{
    console.log(newPassword);
    this.password = newPassword;
  }

  login = () =>{
    if(this.username == 'admin'&& this.password == '123'){
      ToastAndroid.show("Login Success!",ToastAndroid.SHORT);
    } else {
      //iOS Alert only use
      ToastAndroid.show("Login Failed!",ToastAndroid.SHORT);
    }
  };



  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.inputBox}>
          <Image
            style = {styles.img}
            source = {require('./assets/images/user.png')}
          />
          <TextInput
            onChangeText = {this.onUsernameChanged}
            maxLength = {20}
            style = {styles.input}
            placeholderTextColor = {'#fff'}
            placeholder = {'username'}
          />
        </View>
        <View style = {styles.inputBox}>
          <Image
            style = {styles.img}
            source = {require('./assets/images/password.png')}
          />
          <TextInput
            onChangeText = {this.onPasswordChanged}
            maxLength = {20}
            style = {styles.input}
            placeholderTextColor = {'#fff'}
            placeholder = {'password'}
            secureTextEntry = {true}
          />
        </View>
        <TouchableOpacity 
          onPress = {this.login}
          style = {styles.button}>
          <Text style = {styles.btnText}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.btnText}>
            Register
          </Text>
        </TouchableOpacity>
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF'
  },
  inputBox:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:width*0.8,
    height:width*0.14,
    borderRadius:8,
    backgroundColor:'#66f',
    marginBottom:8,
  },
  img:{
    width:width*0.07,
    height:width*0.07,
  },
  input:{
    width:width*0.65,
    height:width*0.4,
    color:'#fff',
  },
  button:{
    width:width*0.8,
    height:width*0.14,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    backgroundColor:'#66f',
    marginBottom:8,
  },
  btnText:{
    color:'#fff',
    fontWeight:'bold',
  }

});