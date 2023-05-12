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
import Button from '../../Component/Button';
import InputeFiled from '../../Component/InputeFiled';
import { FlatList } from 'react-native-gesture-handler';
import LocalStorage from '../../Component/Storage/LocalStorage';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
export default class Home extends Component {
  
  constructor(props){
    
    super(props)
    
    this.state={
      data:[],
      textEdit:'',
      salary:'',
      Email:'',
      name:''
    }
    this.focusListener
    
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      let LocalArray = [...LocalStorage.data]
      LocalArray.filter((value)=>{
        console.log('valuesssss ',value)
        if(value?.email == LocalStorage.Email && value?.password == LocalStorage.Password){
          this.setState({data:[...value.data]})
        }
        else{
          console.log('checkkkk ',value)
        }
       })
        
      // your logic will go here
    });
  }
  componentWillUnmount() {
    // Remove the event listener
    // this.focusListener.remove();
  }
  EditBtClick(item){
    // let filteredArray = this.state.data.filter(item => item?.id == itemm?.id)
    this.setState({textEdit:item?.id})
    // console.log('filter arrya', filteredArray)
 
  }
  DeleteBtClick(itemm){
    let filteredArray = this.state.data.filter(item => item?.id != itemm?.id)
     this.setState({data: filteredArray});
     let LocalArray = [...LocalStorage.data]
      LocalArray.filter((value)=>{
        console.log('valuesssss ',value)
        if(value?.email == LocalStorage.Email && value?.password == LocalStorage.Password){
          value.data =filteredArray
        }
        else{
          console.log('checkkkk ',value)
        }
       })
  }
  SaveFun(itemm){
    // let filteredArray = this.state.data.filter(item => item?.id == itemm?.id)
     
     let LocalArray = [...LocalStorage.data]
     
      LocalArray.filter((value)=>{
        // console.log('valuesssss ',value)
        if(value?.email == LocalStorage.Email && value?.password == LocalStorage.Password){
          value.data.filter(item => {
            if(item?.id == itemm?.id){
              item.email =  this.state.Email.length == 0?item?.email:this.state.Email,
              item.name = this.state.name.length == 0?item?.name:this.state.name,
              item.salary = this.state.salary.length == 0?item?.salary:this.state.salary
            }
          })
          this.setState({data:value.data})
          LocalStorage.data = LocalArray
          //this.setState({data: filteredArray});
        }
        else{
          console.log('checkkkk ',value)
        }
       })
       this.setState({editable:''})
    console.log('Save fun')
  }
render() {
  
return(
<SafeAreaView style={Style.Container}>
 <FlatList style={{width:'100%',marginTop:10}}
   data={this.state.data}
   renderItem={({item})=>
   <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between'}}>
    <InputeFiled
     title={item?.name}
     width={'30%'}
    //  height={35}
    //  editable={true}
     marginLeft={5}
     editable={this.state.textEdit == item?.id?true:false}
     onChange={(values)=>this.setState({name:values})}
    />
    <InputeFiled
     title={item?.email}
     width={'30%'}
    //  height={35}randNum
    editable={this.state.textEdit == item?.id?true:false}
     marginLeft={8}
     onChange={(values)=>this.setState({Email:values})}
    />
    <InputeFiled
     title={item?.salary}
     width={'20%'}
     height={35}
     editable={this.state.textEdit == item?.id?true:false}
     marginLeft={8}
     onChange={(values)=>this.setState({salary:values})}
    />
    <View style={{marginLeft:15}}>
    <TouchableOpacity onPress={()=>{if(this.state.textEdit == item?.id){
      
      this.SaveFun(item)
    }
    else{this.EditBtClick(item)}
    }}>
        <Text style={{fontSize:17,fontWeight:'bold'}}>{this.state.textEdit == item?.id?'save':'edit'}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>this.DeleteBtClick(item)}>
        <Text style={{fontSize:17,fontWeight:'bold'}}>Delete</Text>
    </TouchableOpacity>
    </View>
   </View>
}
 />
 <TouchableOpacity style={{marginBottom:20}} onPress={()=>this.props.navigation.navigate('ToDoCreate')}>
    <Text style={{fontSize:17,fontWeight:'bold'}}>Create</Text>
 </TouchableOpacity>
 </SafeAreaView>
 )
 }
}

const Style = StyleSheet.create({
  Container:{ width:'100%',
  backgroundColor:'white',
  alignItems:'center',
  justifyContent:'center',
  flex:1,
  alignSelf:'center'
}
})