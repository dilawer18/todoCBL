import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import WrapperContainer from '../../Components/WrapperContainer'
import colors from '../../styles/colors'
import TextInputComp from '../../Components/TextInputComp'
import imagePath from '../../constants/imagePath'
import HeaderComp from '../../Components/HeaderComp'

const AddTask = () => {
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
      <View>
        <TextInputComp
          placeholder='title' />
        <View>
        <TextInputComp
        Styles={styles.noteStyle}
          placeholder='Notes'
        />
        </View>
    
      </View>
      
  

    </WrapperContainer>
  )
}

export default AddTask