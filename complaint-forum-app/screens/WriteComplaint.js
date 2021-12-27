import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'
 
export default class WriteComplaint extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            student: '',
            query: '',
        }
    }

    submitQuery = ()=>{
      var title=this.state.title;
      var student=this.state.student;
      var query=this.state.query;
      if( title !== '' && student !== '' && query !== ''){
        db.collection("complaints").add({
            title : this.state.title,
            student: this.state.student,
            query: this.state.query

        })
        this.setState({
            title :'',
            student:'',
            query:''
        })
      }
    }

    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'#E63946'}
                     centerComponent = {{
                        text : 'Complaint Forum',
                        style : { color: 'black', fontSize: 20,fontWeight:'bold'}
                    }}
                />
                <TextInput 
                    placeholder="Title"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="Student Name"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            student: text
                        })
                    }}
                    value={this.state.student}
                    style={styles.author} />
                <TextInput 
                    placeholder="Your Complaint/Query"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            query: text
                        })
                    }}
                    value={this.state.query}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                   onPress = {this.submitQuery}
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'black',
      padding: 6,

  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
       padding: 6,
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10, 
      padding: 6,
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#1D3557',
      width: 80,
      height: 40,
      color:'black',
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold'
  }
});
