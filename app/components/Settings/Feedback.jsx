import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const FeedbackBox = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (feedback.trim()) {
      Alert.alert("Feedback Submitted", "Thank you for your feedback!", [{ text: "OK" }]);
      setFeedback('');
    } else {
      Alert.alert("Empty Feedback", "Please enter your feedback before submitting.");
    }
  };

  return (
    <View style={styles.wrapper}>
    <View style={styles.container}>
      <Text style={styles.title}>We Value Your Feedback</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your feedback here..."
        placeholderTextColor="#888"
        multiline
        value={feedback}
        onChangeText={setFeedback}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity={0.6}>
        
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default FeedbackBox;

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'#FADFA1',
    justifyContent:'center',
    alignItems:'center',
    
  },
  container: {
    padding: 10,
    backgroundColor: '#FDFAD9',
    width:'100%',
    height:'500',
    
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3B3030',
    textAlign: 'center',
    marginBottom:15,
  
  },
  input: {
    height: 250,
    padding: 15,
    fontSize: 18,
    borderColor: '#33372C',
    borderWidth: 3,
    borderRadius: 15,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#C7253E',
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
