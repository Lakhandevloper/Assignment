import React, { Component } from 'react';
 import { StyleSheet
, Text
, View
, TextInput
, TouchableOpacity
, Image,
SafeAreaView,
ScrollView,
Dimensions,
} from 'react-native';
import InputeFiled from '../../Component/InputeFiled';
import Button from '../../Component/Button';
import LocalStorage from '../../Component/Storage/LocalStorage';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
    WidthSize:screen?.width,
      HieghtSize:screen?.height,
      Email:'',
      password:''
    }
  }
  LoginFun(){
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let LocalArray = [...LocalStorage.data]
    console.log('dataaa ',LocalArray)
    if(reg.test(this.state.Email) == false){
      alert('Please Enter Valid Email')
    }
    else if (this.state.password ==''){
      alert('Please Enter Password')
    }
    else if(LocalArray.length == 0){
      alert('This Account is Not Valid')
    }
    else{
      
      
     LocalArray.filter((value)=>{
      console.log('valuesssss ',value)
      if(value?.email == this.state.Email && value?.password == this.state.password){
        LocalStorage.Email = this.state.Email; 
      LocalStorage.Password = this.state.password
        this.props.navigation.navigate('Home')
      }
      else{
        alert('your Email or password is wrong')
      }
     })
    }
  }
render() {
return(
<SafeAreaView style={Style.Container}>
  <Text style={{fontSize:20,fontWeight:'bold'}}>Login</Text>
  <InputeFiled
    title='Email...'
    secureText={false}
    marginTop={30}
    width={'90%'}
    height={50}
    editable={true}
    onChange={(values)=>this.setState({Email:values})}
  />
   <InputeFiled
    title='Password...'
    secureText={true}
    marginTop={30}
    width={'90%'}
    height={50}
    editable={true}
    onChange={(values)=>this.setState({password:values})}
  />
  <Button
    title={'Login'}
    marginTop={40}
    onClick={()=>this.LoginFun()}
  />
  <Button
    title={'Sinup'}
    marginTop={40}
    onClick={()=>this.props.navigation.navigate('Signup')}
  />
 </SafeAreaView>
 )
 }
}

const Style = StyleSheet.create({
  Container:{ width:'100%',
  backgroundColor:'white',
  alignItems:'center',
  justifyContent:'center',
  flex:1
}
})