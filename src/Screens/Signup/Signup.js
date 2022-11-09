import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import HeaderComp from '../../Components/HeaderComp'
import TextInputComp from '../../Components/TextInputComp'
import ButtonComp from '../../Components/ButtonComp'
import SocialComp from '../../Components/SocialComp'
import { moderateScale, moderateVerticalScale } from '../../styles/responsiveSize'
import imagePath from '../../constants/imagePath'
import navigationStrings from '../../constants/navigationStrings'
import WrapperContainer from '../../Components/WrapperContainer'
import colors from '../../styles/colors'

const Signup = ({ navigation }) => {
    return (
        <WrapperContainer WrapperPadding={moderateScale(24)} bgColor={colors.bglightGrey} statusBarColor={colors.bglightGrey}  >
            <HeaderComp
                text='Todoist'
            />
            <View style={{ marginTop: moderateVerticalScale(20) }} >
                <TextInputComp
                    title='Sign Up'
                    placeholder='Name'
                    Styles={{ marginBottom: moderateVerticalScale(10) }}
                />
                <TextInputComp
                    placeholder='Phone Number'
                    Styles={{ marginBottom: moderateVerticalScale(10) }}
                />
                <TextInputComp
                  Styles={{ marginBottom: moderateVerticalScale(10) }}
                    placeholder='E-mail Address'
                />
                <TextInputComp
                    placeholder='Password'
                    Styles={{ marginBottom: moderateVerticalScale(10) }}
                    // img={imagePath}
                />
                <View style={{ alignSelf: "flex-end" }}>
                    <TouchableOpacity>
                        <Text style={styles.txtStyle}>Forget Password</Text>
                    </TouchableOpacity>
                </View>
                <ButtonComp
                    btnText='Sign Up'
                    onPress={() => { navigation.navigate(navigationStrings.LOGIN) }}
                />
                <View>

                    <Text style={styles.orTextStyle}>OR</Text>
                    <Text style={styles.fontSize}>Signup with </Text>
                </View>
                <View style={styles.socialStyle}>
                    <SocialComp
                        icon={imagePath.icMail}
                    />
                    <SocialComp
                        icon={imagePath.icApple}
                    />
                    <SocialComp
                        icon={imagePath.icFb}
                    />
                </View>
                <View style={styles.endFlexStyle}>
                    <Text >Already have an account?</Text>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate(navigationStrings.LOGIN) }}
                    >
                        <Text style={styles.endTextStyle}>Log In</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </WrapperContainer>
    )
}

export default Signup

