import {StyleSheet} from 'react-native';
import * as Colors from '../../constants/Colors';
import {hp, wp} from '../util/LayoutUtils';

export const CommonStyles = StyleSheet.create({
  signUp: {
    flex: 1,
  },
  asteric: {
    color: 'red',
  },
  placeholder: {
    marginBottom: hp(5),
    fontSize: hp(18),
    fontWeight: '500',
  },
  formtext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formcontainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#F2F2F2',
    alignSelf: 'center',
    paddingHorizontal: wp(10),
    borderRadius: 5,
    marginTop: hp(7),
    paddingVertical: hp(15),
    justifyContent: 'space-between',
  },
  headerText: {
    padding: hp(5),
    fontWeight: '600',
    fontSize: hp(26),
    marginLeft: hp(13),
    lineHeight: hp(30),
  },
  bodyText: {
    padding: hp(3),
    margin: hp(3),
    marginLeft: hp(15),
    fontSize: hp(16),
    fontWeight: '500',
    marginBottom: hp(15),
  },
  phoneContainer: {
    marginTop: hp(20),
    marginBottom: hp(10),
  },
  genderstyle: {
    marginLeft: hp(20),
    fontSize: hp(18),
    marginTop: hp(10),
    fontWeight: '500',
  },
  pickstyles: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'black',
    alignSelf: 'center',
    paddingHorizontal: wp(10),
    borderRadius: 5,
    marginTop: hp(7),
    paddingVertical: hp(15),
    justifyContent: 'space-between',
  },
  textInput: {
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 15,
    fontSize: hp(16),
    fontWeight: '400',
  },
  errorText: {
    fontSize: hp(14),
    color: 'red',
    marginTop: 5,
  },
  backIcon: {
    marginLeft: hp(15),
    marginBottom: hp(20),
  },
  label: {
    fontSize: hp(16),
    color: '#000000',
    fontWeight: '500',
  },
  cancel: {
    fontSize: hp(14),
    fontWeight: '500',
  },
  account: {
    fontSize: hp(14),
    fontWeight: '500',
  },
  // user: {
  //   marginVertical: hp(10),
  // },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  container: {
    marginTop: hp(20),
    flex: hp(1),
  },
  wrapperContainer: {
    flex: hp(1),
    backgroundColor: 'white',
  },
  Container: {
    paddingHorizontal: hp(10),
  },
  signup: {
    marginLeft: hp(4),
    fontSize: hp(16),
    color: Colors.lightgray,
    fontWeight: 'bold',
  },
  forgotpassword: {
    fontSize: hp(16),
    alignSelf: 'flex-end',
    marginTop: hp(13),
    color: Colors.gray,
    fontWeight: 'bold',
  },
  // account: {
  //   fontSize: hp(16),
  //   color: Colors.gray,
  // },
  accountcontainer: {
    flexDirection: 'row',
    marginTop: hp(25),
    alignSelf: 'center',
  },
  alternative: {
    marginTop: hp(15),
    marginBottom: hp(20),
    textAlign: 'center',
    fontSize: hp(16),
    color: Colors.gray,
    fontWeight: '400',
  },
  textStyle: {
    color: Colors.white,
    fontSize: hp(16),
    fontWeight: '500',
  },
  continue: {
    backgroundColor: '#121212',
    marginTop: hp(40),
  },
  signupwithgoogle: {
    backgroundColor: '#121212',
    marginTop: hp(20),
  },
  button: {
    marginTop: hp(48),
  },

  password: {
    height: hp(49),
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderColor: '#121212',
    borderWidth: 1,
    marginVertical: hp(20),
  },
  emailContainer: {
    marginTop: hp(10),
    paddingHorizontal: hp(20),
  },

  header: {
    fontSize: hp(24),
    paddingHorizontal: hp(15),
    marginBottom: hp(20),
    fontWeight: '500',
  },
  enterMail: {
    fontSize: hp(16),
    paddingHorizontal: hp(15),
    marginBottom: hp(10),
    fontWeight: '500',
  },
  // header: {
  //   fontSize: hp(20),
  //   letterSpacing: hp(0),
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   color: Colors.purple,
  // },

  // list styles
  errorButton: {
    backgroundColor: Colors.linear,
    width: wp(70.5),
    marginLeft: hp(15),
    alignSelf: 'center',
    height: hp(31),
  },
  listbutton: {
    backgroundColor: Colors.linear,
    width: wp(100.5),
  },
  edgescontainer: {
    flex: 1,
  },

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  author: {
    fontWeight: '500',
    fontSize: hp(12),
    marginBottom: hp(10),
  },
  title: {
    fontWeight: '500',
    fontSize: hp(12),
    marginBottom: hp(10),
  },
  flatlistContainer: {
    paddingTop: hp(10),
  },

  listheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp(10),
    alignItems: 'center',
    marginTop: hp(20),
  },
  news: {
    fontWeight: '500',
    fontSize: hp(14),
  },
  listcontainer: {
    marginTop: hp(50),
    paddingHorizontal: wp(10),
    flex: 1,
  },
  indicator: {
    marginTop: hp(20),
  },

  // details style
  detailbutton: {
    backgroundColor: Colors.linear,
  },
  detailloading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailauthor: {
    fontWeight: '500',
    fontSize: hp(12),
    marginBottom: hp(10),
  },
  summary: {
    fontWeight: '500',
    fontSize: hp(12),
    marginBottom: hp(10),
  },
  deatilheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp(18),
    alignItems: 'center',
    marginTop: hp(15),
  },
  details: {
    fontWeight: '500',
    fontSize: hp(14),
  },
  detailcontainer: {
    marginTop: hp(50),
    paddingHorizontal: wp(10),
    flex: 1,
  },
  detailindicator: {
    marginTop: hp(20),
  },
});
