import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, { useState } from 'react';

const Keypad = () => {
  const [number, setNumber] = useState([]);
  console.log("number:", number[0]);
  
  const [message, setMessage] = useState("");
  //   const [shownumber, setShowNumber] = useState('');

  const handlePress = num => {
    
    setNumber([...number, num]);
    
    // if (number >= 1 && number <= 9) {
    //   setNumber([...number, num]);
    //   setMessage('');
    // } else {
    //   setMessage('กรุณากดตัวเลข 1-9 เท่านั้น');
    // }
  };



  const handleRemove = () => {
    setNumber(number.slice(0, -1));
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* 1-3 num */}
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={styles.text}>Number:{number}</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <TouchableOpacity
            style={styles.numberbuttom}
            onPress={() => handlePress(1)}
          >
            <Text style={styles.textbox}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.numberbuttom}
            onPress={() => handlePress(2)}
          >
            <Text style={styles.textbox}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.numberbuttom}
            onPress={() => handlePress(3)}
          >
            <Text style={styles.textbox}>3</Text>
          </TouchableOpacity>
        </View>

        {/* 4-6 */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <TouchableOpacity
            style={styles.numberbuttom}
            onPress={() => handlePress(4)}
          >
            <Text style={styles.textbox}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.numberbuttom}
            onPress={() => handlePress(5)}
          >
            <Text style={styles.textbox}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.numberbuttom}
            onPress={() => handlePress(6)}
          >
            <Text style={styles.textbox}>6</Text>
          </TouchableOpacity>
        </View>

        {/* 7-9 */}

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <TouchableOpacity
            style={styles.numberbuttom}
            onPress={() => handlePress(7)}
          >
            <Text style={styles.textbox}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.numberbuttom}
            onPress={() => handlePress(8)}
          >
            <Text style={styles.textbox}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.numberbuttom}
            onPress={() => handlePress(9)}
          >
            <Text style={styles.textbox}>9</Text>
          </TouchableOpacity>
        </View>

        {/* delete button */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          <TouchableOpacity style={styles.deletebuttom} onPress={handleRemove}>
            <Text style={styles.textdelete}>delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberbuttom}
            onPress={() => handlePress(0)}
          >
            <Text style={styles.textbox}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberbuttom}
            onPress={() => handlePress('#')}
          >
            <Text style={styles.textbox}>#</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Keypad;

const styles = StyleSheet.create({
  numberbuttom: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderColor: '#FF895C',
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  deletebuttom: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  textbox: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF895C',
  },
  textdelete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
