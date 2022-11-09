import { View, Text, Image, TouchableOpacity,Button } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import WrapperContainer from '../../Components/WrapperContainer'
import colors from '../../styles/colors'
import TextInputComp from '../../Components/TextInputComp'
import imagePath from '../../constants/imagePath'
import HeaderComp from '../../Components/HeaderComp'
import { moderateScale, moderateVerticalScale } from '../../styles/responsiveSize'
import ButtonComp from '../../Components/ButtonComp'
import navigationStrings from '../../constants/navigationStrings'
import Modal from "react-native-modal";

const AddTask = ({navigation,route}) => {
  const[title , settitle]=useState('')
  const[notes , setnotes]=useState('')

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible)
 
  };
  const toggleModal1 = () => {
    setModalVisible(!isModalVisible)
    navigation.navigate(navigationStrings.HOME,[{title:title,notes:notes}])
  };

  return (
    <WrapperContainer statusBarColor={colors.bglightGrey} bgColor={colors.bglightGrey} WrapperPadding={24}>

      <View style={{ flexDirection: 'row' }}>
        <HeaderComp
          textStyles={styles.headerTextStyle}
          headerStyle={styles.headerStyle}
          image={imagePath.icBackward}
          text='New Reminder'
        />
      </View>
     <View style={styles.textInputStyle}>
        <TextInputComp
        value={title}
          placeholder='Title' 
          onchangeText={(value)=>settitle(value)}
          />
          <View style={styles.lineStyle}/>
           <TextInputComp 
            value={notes}
          placeholder='Notes'
          onchangeText={(value)=>setnotes(value)}
        />
        </View>
        <View style={styles.detailViewStyle}>
          <Text>Details</Text>
          <Image style={{transform:[{rotate:'180deg'}]}} source={imagePath.icForward}/>
        </View>
        
        <View style={{flexDirection:"row", justifyContent:'space-between',marginTop:moderateVerticalScale(15),}}>
          <TouchableOpacity style={{flexDirection:'row',height:moderateVerticalScale(40),backgroundColor:'#fff',alignItems:'center',borderRadius:8,width:'40%',justifyContent:'center'}}>
            <Image source={imagePath.icCalender}/>
            <Text>    Due Date</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row',height:moderateVerticalScale(40),backgroundColor:colors.white,alignItems:'center',borderRadius:8,width:'40%',justifyContent:'center'}}>
          <Image source={imagePath.icAlarm}/>
            <Text>  Due Date</Text>
          </TouchableOpacity>
         
        </View>
        <View style={{justifyContent:'flex-end',flex:1}}>
        <ButtonComp
        btnText='Add'
        onPress={toggleModal}
        />
        </View>
        <Modal isVisible={isModalVisible} >
            
                <View style={{
                    flex:1,
                    justifyContent:"center",
                    alignSelf:"center",
                    
                    }}>
                <TouchableOpacity onPress={toggleModal1}
                
                style={{
                    padding:moderateScale(30),
                    backgroundColor:colors.primaryColor,
                    justifyContent:"center",
                    alignItems:"center",
                    borderRadius:8,
                 
                }}
                >
                    <Image source={imagePath.icTick}/>
                    <Text style={{
                        textAlign:"center",
                        color:colors.white,
                        fontWeight:"bold",
                        marginTop:moderateVerticalScale(8)}}>
                        Your reminder has {"\n"}  been added
                    </Text>

                </TouchableOpacity>
                </View>

                
            </Modal>
    
     
      
  

    </WrapperContainer>
  )
}

export default AddTask