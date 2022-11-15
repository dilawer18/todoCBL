import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { styles } from './styles';
import axios from 'axios';

import WrapperContainer from '../../Components/WrapperContainer';
import {
  moderateScale,
  moderateVerticalScale,
} from '../../styles/responsiveSize';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../styles/colors';
import HeaderComp from '../../Components/HeaderComp';

let limit = 30
let loadMore = true
const Clock = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0)
  const [showLoader, setShowoader] = useState(false)
  useEffect(() => {
    myData();
  }, []);

  const myData = async () => {
    try {
      const prevData = data
      let query = `?skip=${skip}&limit=${limit}`
      const res = await axios.get('https://dummyjson.com/products' + query);
      console.log('data', res);

      if (res.data.products) {
        loadMore = false
      }
      setData([...prevData, ...res.data.products])
      setSkip(skip + 30)
      setShowoader(false)
    } catch (error) {
      console.log('error raoised');

    }
  };
  const onEndReached = () => {
    if (loadMore) {
      setShowoader(true)

      myData()
    }
  }

  const renderItem = useCallback(({ item }) => {
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
  }, [data])
  const keyExtractor = useCallback(( item ) => `${item.id}`)

  const ListFooterComponent = useCallback(() => {
    return (
      <ActivityIndicator
        size='large' />
    )
  }, [data])

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp
        text='Products' />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        ListFooterComponent={showLoader && ListFooterComponent}


      />
    </SafeAreaView>
  );
};

export default Clock;
