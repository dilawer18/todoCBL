import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import axios from 'axios';
import WrapperContainer from '../../Components/WrapperContainer';
import {
  moderateScale,
  moderateVerticalScale,
} from '../../styles/responsiveSize';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../styles/colors';
import HeaderComp from '../../Components/HeaderComp';

const Clock = () => {
  const [data, setData] = useState([]);
  const [offset , setoffset]=useState(0)
  useEffect(() => {
    myData();
  }, []);

  const myData = async () => {
    try {
      const prevData=data
      const res = await axios.get(`https://dummyjson.com/products?skip=${offset}&limit=20`);
      console.log('data', res);
      const data1=res?.data?.products
      setData([...prevData ,...data1]);
      setoffset(offset+20)
    } catch (error) {
      console.log('error raoised');
      
    }
  };
  
  const renderItem = ({item, index}) => {
    return (
      <View style={{
        backgroundColor: 'white',
        padding: 8,
        marginBottom: 20,
        marginHorizontal: 14,
        borderRadius: 14,
        borderColor: colors.primaryColor,
        flexDirection: 'row'
    }}>
    
        <Image style={{ height: 140, width: 100 }} source={{ uri: item?.thumbnail }} />
        <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '' }}>{item?.title}</Text>
            <Text style={{ fontSize: 13, color: 'grey' }}>{item?.description}</Text>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '500', fontSize: 18, color: 'green' }}>${item?.price}</Text>
                        <Text> ({item?.discountPercentage}%off)</Text>
                    </View>
                    <Text>Rating: {item?.rating}</Text>
                </View>
            </View>
        </View>
    </View>
    
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp
      text='Products'/>
      <FlatList 
      data={data} 
      renderItem={renderItem} 
      onEndReached={
        ()=>{myData()}
      }   
      />
    </SafeAreaView>
  );
};

export default Clock;
