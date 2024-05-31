import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export interface IHome {
  goToUser: () => void;
}

const Home: React.FC<IHome> = ({ goToUser }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <TouchableOpacity style={styles.topRightButton} onPress={goToUser}>
        <Text style={styles.buttonText}>User Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  topRightButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Home;
