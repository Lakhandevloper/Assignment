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

export default class InputeFiled extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <TextInput style={[Style.FiledStyle,{marginTop:this.props.marginTop,width:this.props.width,height:this.props.height,marginLeft:this.props.marginLeft}]}
           placeholder={this.props.title}
           secureTextEntry={this.props.secureText}
           editable={this.props.editable}
           onChangeText={(text)=>{this.props.onChange(text)}}
        />
        )
    }
}

const Style = StyleSheet.create({
    FiledStyle:{
        borderWidth:1,
        borderRadius:10,
        alignSelf:'center',
        padding:5
    }
})