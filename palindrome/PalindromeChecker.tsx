/*
Project Name: Palindrome Checker
Framework: React
Language: TypeScript
Author: @usmanhdsidiq
*/

import React, { useState } from "react";
import { View, TextInput, Text, Image, Button, Alert, } from "react-native";
import Toast from 'react-native-root-toast';

const PalindromeChecker = () => {
    const [text, setText] = useState('');
    const [isPalindrome, setIsPalindrome] = useState(false);

    const checkPalindrome = () => {
        const cleanedText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        const reverseText = cleanedText.split('').reverse().join('');
        setIsPalindrome(cleanedText === reverseText);

        if (cleanedText === reverseText) {
            Alert.alert('It is a palindrome');
            Toast.show('It is a palindrome', {duration: Toast.durations.LONG});
        } else {
            Alert.alert('It is not a palindrome');
            Toast.show('It is not a palindrome', {duration: Toast.durations.LONG});
        }
    };

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
            <Text style={{fontSize: 24, fontWeight: "bold", marginBottom: "15px",}}>Palindrome Checker</Text>

            <Image style={{width: 240,height: 240, marginTop: "5px", marginBottom: "5px",}} source={{uri: "https://upload.wikimedia.org/wikipedia/id/2/2f/Jerry_Mouse.png",}} />

            <TextInput style={{borderWidth: 1, borderColor: "black", width: 200, height: 50, padding: 10, borderRadius: 10, color: "black",}} placeholder="Type here" onChangeText={setText} value={text} />

            <Button title="Check" onPress={checkPalindrome} />
        </View>
    );
};

export default PalindromeChecker;