import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {
  height,
  moderateScale,
  moderateVerticalScale,
  textScale,
} from '../../styles/responsiveSize';

export default styles = StyleSheet.create({
  heading: {
    fontSize: textScale(14),
    fontWeight: 'bold',
    color: colors.black,
  },
  headingDescription: {
    fontSize: textScale(14),
    fontWeight: 'normal',
    color: colors.textLightGrey,
    marginTop: moderateVerticalScale(10),
  },
  progressBarWrapper: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.white,
    height: height / 6,
    marginTop: moderateVerticalScale(20),
    borderRadius: moderateScale(8),
    
  },
  toggleBarStyle: {
    flexDirection: 'row',
    height: moderateVerticalScale(48),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },
  renderTaskStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: moderateScale(55),
    backgroundColor: colors.white,
    paddingLeft: moderateScale(25),
    justifyContent: 'space-between',
  },
  imageStyle: {
    transform: [{rotate: '180deg'}],
  },
  itemViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: moderateScale(10),
  },
  itemTimeStyle: {
    backgroundColor: colors.lightOrange,
    paddingVertical: moderateVerticalScale(5),
    marginRight: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(5),
  },
});
