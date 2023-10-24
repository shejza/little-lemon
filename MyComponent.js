import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState([]);

useEffect(() => {
    fetch('https://api.example.com/endpoint')
.then((response) => response.json())
.then((data) => {
setData(data);
      });
  }, []);

  return (
    <FlatList
      data={data}
renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      )}
keyExtractor={(item) => item.id}
    />
  );
};

export default MyComponent;