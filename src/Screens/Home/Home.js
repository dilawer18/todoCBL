import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import colors from '../../styles/colors'
import { height, moderateScale, moderateVerticalScale, textScale } from '../../styles/responsiveSize'
import styles from './styles'
import imagePath from '../../constants/imagePath'
import ButtonComp from '../../Components/ButtonComp'
import { CircularProgressbar } from 'react-circular-progressbar';
import strings from '../../constants/lang'
import { getLang, storeLang } from '../../utils/utils';
import RNRestart from 'react-native-restart';
// import 'react-circular-progressbar/dist/styles.css';
const Home = () => {
  const [slectedTab, setSlectedTab] = useState({});
  // const [langChanged, setLangChanged] = useState(false);
  // const [openModal, setOpenModal] = useState(false);
  const [alltask, setAlltask] = useState([
    { id: 1, title: 'lorem ipsum', time: '3:00 pm - 4:00 pm' },
    { id: 2, title: 'lorem ipsum', time: '4:00 pm - 5:00 pm' },
    { id: 3, title: 'lorem ipsum', time: '3:00 pm - 4:00 pm' },
    { id: 4, title: 'lorem ipsum', time: '3:00 pm - 4:00 pm' },
  ])
  const percentage = 66;

  const onTabPress = (item) => {
    setSlectedTab(item)

  }
  const toggleBar = () => {
    return (
      <View style={styles.toggleBarStyle} >
        {[{ id: 1, title: 'Daily' }, { id: 2, title: 'Monthly' }, { id: 3, title: 'Weekly' }].map(i => {
          return (
            <TouchableOpacity onPress={() => onTabPress(i)} key={i?.id} style={{ marginRight: 10, backgroundColor: slectedTab?.id == i?.id ? colors.lightBlue : colors.bglightGrey, paddingVertical: moderateVerticalScale(8), paddingHorizontal: moderateScale(14), justifyContent: 'center', alignItems: 'center', borderRadius: moderateScale(8) }} >
              <Text style={{ color: slectedTab?.id == i?.id ? colors.primaryColor : colors.black, }} >{i?.title}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  // const changeLang = async (value) => {
  //   setOpenModal(false);
  //   setLangChanged(true)
  //   storeLang(value);
  //   let curr_lang = await getLang();
  //   strings.setLanguage(curr_lang)
  //   setLangChanged(false)
  // }

  const rendertasks = ({ item }) => {
    return (
      <View style={styles.renderTaskStyle} >
        <View>
          <Text style={{ color: colors.primaryColor }} >{item?.title}</Text>
        </View>
        <View style={styles.itemViewStyle}>
          <View style={styles.itemTimeStyle} >
            <Text>{item?.time}</Text>
          </View>
          <Image style={styles.imageStyle} source={imagePath.icForward} />
        </View>
      </View>
    )
  }

  // const openModalFnc = () => {
  //   setOpenModal(!openModal)
  // }

  // if(langChanged){
  //   null
  // }else {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  return (
    <WrapperContainer statusBarColor={colors.bglightGrey} bgColor={colors.bglightGrey} WrapperPadding={24} >
      <View >
        {/* <Text>{strings.HELLO} {strings.LANGUAGE}</Text> */}
        <Text style={styles.heading} >Hello Dilawer!</Text>
        <Text style={styles.headingDescription} >Let's Start with Today's Tasks.</Text>
      </View>

      <View style={styles.progressBarWrapper}>
        <View style={{ width: '60%', padding: moderateScale(14), justifyContent: 'space-around' }} >
          <Text>Daily Tasks</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={imagePath.icRoundTick} />
            <Text><Text style={{ color: colors.green }}> 5/10 </Text> Tasks Completed</Text>
          </View>
          <View >
            <ButtonComp btnTextStyle={{ fontSize: textScale(12) }} btnWrapperStyle={{ height: moderateVerticalScale(35) }} btnText='View tasks' />
          </View>
        </View>
        <View style={{ width: '45%', justifyContent:'center',alignItems:'center'}} >
          {/* <Text>Criclne in Progree</Text> */}
          <Image source={imagePath.icSpinn}/>
        </View>
      </View>

      <View style={{ width: '80%', marginTop: moderateVerticalScale(18) }} >
        {toggleBar()}
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: moderateScale(10), marginVertical: moderateVerticalScale(10) }} >
        <Text>
          Remainders
        </Text>
        <TouchableOpacity  >
          <Text style={{ color: colors.primaryColor }}>See All</Text>
        </TouchableOpacity>
      </View>

      <View>
          <FlatList
          data={alltask}
          renderItem={rendertasks}
          extraData={item => `${item?.id}`}
          ItemSeparatorComponent={() => <View style={{height:moderateScale(10)}}/>}
          />
        </View>
        {/* <View style={{ flex: 1 }}> */}
      {/* <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'red',padding:40}}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View> */}

      {/* <TouchableOpacity style={{ backgroundColor: 'pink', marginVertical: 10, padding: 10 }} onPress={openModalFnc}>
        <Text>Change language to English</Text>
      </TouchableOpacity>
      <Modal visible={openModal} transparent>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.9)', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ padding: 20, backgroundColor: '#fff' }}>
            <TouchableOpacity style={{ backgroundColor: 'red', position: 'absolute', top: -20, right: -10, padding: 10 }} onPress={openModalFnc}>
              <Text>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'pink', marginVertical: 10, padding: 10 }} onPress={() => changeLang('en')}>
              <Text>Change language to English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'pink', marginVertical: 10, padding: 10 }} onPress={() => changeLang('ar')}>
              <Text>Change language to Arabic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'pink', marginVertical: 10, padding: 10 }} onPress={() => changeLang('hin')}>
              <Text>Change language to Hindi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {langChanged && <ActivityIndicator />} */}
    </WrapperContainer>
  )
  // }

}

export default Home
