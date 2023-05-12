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

export default class Button extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <TouchableOpacity style={[Style.ButtonStyle,{marginTop:this.props.marginTop}]} onPress={()=>this.props.onClick()} >
                <Text style={{fontSize:16,fontWeight:'700'}}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const Style = StyleSheet.create({
    ButtonStyle:{
        width:'50%',
        height:50,
        borderWidth:1,
        borderRadius:10,
        marginTop:20,
        alignSelf:'center',
        padding:5,
        alignItems:'center',
        justifyContent:'center'
    }
})