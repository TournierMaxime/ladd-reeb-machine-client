import { moderateScale } from '../../utils/Responsive'

const containerMessage = {
  borderRadius: moderateScale(5),
  padding: moderateScale(10),
  marginBottom: moderateScale(15),
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '90%'
}

const messageText = {
  textAlign: "center",
  alignItems: "baseline",
  fontSize: moderateScale(20),
  width: '90%'
}

export default {
  containerMessage,
  messageText,
}
