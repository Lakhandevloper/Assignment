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
Alert
} from 'react-native';
import InputeFiled from '../Component/InputeFiled';
import LocalStorage from '../Component/Storage/LocalStorage';
import Button from '../Component/Button';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
export default class ToDoCreate extends Component {
  constructor(props){
    super(props)
    this.state={
    WidthSize:screen?.width,
      HieghtSize:screen?.height,
      Email:'',
      Name:'',
      Salary:''
    }
  }
  OnClickFun(){
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(this.state.Name ==''){
        alert('Please Enter Name')
    }
    else if(reg.test(this.state.Email) === false){
        alert('Email is not Valid')
    }
    else if(this.state.Salary ==''){
        alert('Please Enter Salary')
    }
    else{
     let LocalArray = [...LocalStorage.data]
     let randNum = (1000 + Math.random() * 9000).toFixed(0);
     LocalArray.filter((value)=>{
      if(value.email == LocalStorage.Email && value.password == LocalStorage.Password){
        value.data.push({
          name:this.state.Name,
          email:this.state.Email,
          salary:this.state.Salary,
          id:randNum
        })
      }
     })
    //  LocalArray.push(
    //       {
    //         name:this.state.Name,
    //       email:this.state.Email,
    //       salary:this.state.Salary
    //     }
    //   )
     LocalStorage.data = LocalArray
     console.log('verri ',LocalStorage.data)
        this.props.navigation.goBack()
    }
  }
render() {
return(
<SafeAreaView style={Style.Container}>
    
    <View style={{width:'90%'}}>
        <Text style={{fontSize:17,fontWeight:'700'}}>Please Enter Name</Text>
    </View>
  <InputeFiled
    title='Name...'
    marginTop={8}
    width={'90%'}
    height={50}
    onChange={(values)=>this.setState({Name:values})}
  />
  <View style={{width:'90%',marginTop:20}}>
        <Text style={{fontSize:17,fontWeight:'700'}}>Please Enter Email</Text>
    </View>
   <InputeFiled
    title='Email...'
    marginTop={8}
    width={'90%'}
    height={50}
    onChange={(values)=>this.setState({Email:values})}
  />
  <View style={{width:'90%',marginTop:20}}>
        <Text style={{fontSize:17,fontWeight:'700'}}>Please Enter Salary</Text>
    </View>
  <InputeFiled
    title='Price...'
    marginTop={8}
    width={'90%'}
    height={50}
    onChange={(values)=>this.setState({Salary:values})}
  />
  <Button
    title={'Submit'}
    marginTop={40}
    onClick={()=>this.OnClickFun()}
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