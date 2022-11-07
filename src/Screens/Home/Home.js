import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import colors from '../../styles/colors'
import { height, moderateScale, moderateVerticalScale, textScale } from '../../styles/responsiveSize'
import styles from './styles'
import imagePath from '../../constants/imagePath'
import ButtonComp from '../../Components/ButtonComp'
import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
const Home = () => {
  const [slectedTab, setSlectedTab] = useState({})
  const [alltask, setAlltask] = useState([
    {id:1, title:'lorem ipsum', time:'3:00 pm - 4:00 pm'},
    {id:2, title:'lorem ipsum', time:'3:00 pm - 4:00 pm'},
    {id:3, title:'lorem ipsum', time:'3:00 pm - 4:00 pm'},
    {id:4, title:'lorem ipsum', time:'3:00 pm - 4:00 pm'},
  ])
  const percentage = 66;

  const onTabPress = (item) => {
    setSlectedTab(item)

  }
  const toggleBar = ()=> {
    return(
      <View style={styles.toggleBarStyle} >
        {[{id:1,title:'Daily'},{id:2,title:'Monthly'},{id:3,title:'Weekly'}].map(i =>{
          return(
            <TouchableOpacity onPress={()=>onTabPress(i)} key={i?.id} style={{marginRight:10,backgroundColor: slectedTab?.id == i?.id ?colors.lightBlue : colors.bglightGrey,  paddingVertical:moderateVerticalScale(8), paddingHorizontal:moderateScale(14),justifyContent:'center',alignItems:'center' , borderRadius:moderateScale(8)}} >
              <Text style={{color: slectedTab?.id == i?.id ?colors.primaryColor : colors.black, }} >{i?.title}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  } 
  const rendertasks = ({item }) => {
    return (
      <View style={{flexDirection:'row', alignItems:'center', width:'100%', height:moderateScale(55), backgroundColor:colors.white, paddingLeft:moderateScale(25), justifyContent:'space-between'}} >
        <View>
          <Text style={{color:colors.primaryColor}} >{item?.title}</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',paddingRight:moderateScale(10) }}>
          <View style={{backgroundColor:colors.lightOrange,  paddingVertical:moderateVerticalScale(5),marginRight:moderateScale(10), paddingHorizontal:moderateScale(10), borderRadius:moderateScale(6)}} >
          <Text style={{}} >{item?.time}</Text>
          </View>
          <Image style={{transform: [{ rotate: '180deg'}]}} source={imagePath.icForward} />
        </View>
      </View>
    )
  } 
  return (
    <WrapperContainer statusBarColor={colors.bglightGrey} bgColor={colors.bglightGrey} WrapperPadding={24} >
      <View >
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
        <View style={{ width: '40%', }} >
          <Text>Criclne in Progree</Text>
        </View>
      </View>

      <View style={{width:'80%', marginTop:moderateVerticalScale(18)}} >
          {toggleBar()}
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:moderateScale(10), marginVertical:moderateVerticalScale(10)}} >
        <Text>
          Remainders
        </Text>
        <TouchableOpacity  >
          <Text style={{color:colors.primaryColor}}>See All</Text>
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

    </WrapperContainer>
  )
}

export default Home