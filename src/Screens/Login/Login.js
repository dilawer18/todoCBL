import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import TextInputComp from '../../Components/TextInputComp'
import HeaderComp from '../../Components/HeaderComp'
import ButtonComp from '../../Components/ButtonComp'
import navigationStrings from '../../constants/navigationStrings'
import WrapperContainer from '../../Components/WrapperContainer'
import { moderateScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'

const Login = ({ navigation }) => {
    return (
        <WrapperContainer WrapperPadding={moderateScale(24)} bgColor={colors.bglightGrey} statusBarColor={colors.bglightGrey}  >
            <HeaderComp
                text='Todoist'
            />

            <View style={styles.container}>

                <View style={styles.inputStyle}>
                    <View style={{ marginVertical: moderateScale(10) }} >
                        <TextInputComp
                        Styles={{marginBottom:moderateScale(10)}}
                            title='Login'
                            placeholder='E-mail Address'

                        />
                    </View>
                    <TextInputComp
                        placeholder='Password'
                    />
                    <View style={{ alignSelf: "flex-end" }}>
                        <TouchableOpacity>
                            <Text style={styles.txtStyle}>Forget Password</Text>
                        </TouchableOpacity>
                    </View>
                    <ButtonComp
                        btnText='Login'
                        onPress={() => alert('inprocess')}
                    />
                </View>

                <View style={styles.endFlexStyle}>
                    <Text >Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SIGNUP)} >
                        <Text style={styles.endTextStyle}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </WrapperContainer>
    )
}

export default Login

