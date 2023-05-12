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
export default class Signup extends Component {
  constructor(props){
    super(props)
    this.state={
    WidthSize:screen?.width,
      HieghtSize:screen?.height,
      Email:'',
      password:'',
      confirm_password:''
    }
  }
  SignupFun(){
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(reg.test(this.state.Email) === false){
        alert('Enter valid Email')
    }
    else if(this.state.password ==''){
      alert('Enter your password')
   }
    else if(this.state.confirm_password ==''){
      alert('Enter Confirm password')
   }
  else if(this.state.password != this.state.confirm_password){
    alert('Password or Confirm password is wrong')
  }
   else{
    console.log('password or confirm password ',this.state.password,this.state.confirm_password)
    let LocalArray = [...LocalStorage.data]
    LocalArray.push({
        email:this.state.Email,
        password:this.state.password,
        data:[]
    })
   LocalStorage.data = LocalArray
    this.props.navigation.navigate('Login')
   }
    
  }
render() {
return(
<SafeAreaView style={Style.Container}>
    <Text style={{fontSize:20,fontWeight:'bold'}}>Signup</Text>
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
   <InputeFiled
    title='confirm Password...'
    secureText={true}
    marginTop={30}
    width={'90%'}
    height={50}
    editable={true}
    onChange={(values)=>this.setState({confirm_password:values})}
  />
  <Button
    title={'Submit'}
    marginTop={40}
    onClick={()=>this.SignupFun()}
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