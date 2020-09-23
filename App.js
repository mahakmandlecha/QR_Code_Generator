//This is an example code to generate QR code//
import React, { Component } from 'react';
//import react in our code.
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
// import all basic components
import QRCode from 'react-native-qrcode-svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue:'',
      valueForQRCode: '',
      // Default value for the QR Code
    };
  }
  
  getTextInputValue = () => {
    // Function to get the value from input
    // and Setting the value to the QRCode
    global.num = Math.floor(Math.random()*(9999-999) +999)
    this.setState({ valueForQRCode: num.toString() });
    alert('Your otp is: '+ num  +'\nplease keep this with you and give to the driver')
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <QRCode
          //QR code value
          value={this.state.valueForQRCode ? this.state.valueForQRCode : 'NA'}
          //size of QR Code
          size={250}
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="white"
          //Logo of in the center of QR Code (Optional)
        />
  
        <TouchableOpacity
          onPress={this.getTextInputValue}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> Generate QR Code </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: 40,
  },
  TextInputStyle: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    backgroundColor: '#F44336',
    marginBottom: 20,
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});