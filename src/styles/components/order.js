import { moderateScale } from '../../utils/Responsive'

const mainScrollView = {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '90%',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto'
}

const mainOrderViewContainer = {
    display: 'flex',
    width: '100%',
    padding: moderateScale(20),
    backgroundColor: '#fff',
    marginTop: moderateScale(10),
    borderRadius: moderateScale(10)
}

const orderContainer = {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    margin: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: moderateScale(0),
      height: moderateScale(2),
    },
    shadowOpacity: moderateScale(0.25),
    shadowRadius: moderateScale(3.84),
    elevation: moderateScale(5),
    position: 'relative'
}

const orderInfo = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%'
}

const textInfo = {
    fontSize: moderateScale(20)
}

const orderTitle = {
    fontSize: moderateScale(25)
}

const orderRef = {
    fontSize: moderateScale(20)
}

const orderStatus = {
    fontSize: moderateScale(20)
}

const buttonIncDec = {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'baseline',
    width: '100%',
    marginTop: moderateScale(20)
}

const svgButtonIncDec = {
    fill: '#fff',
    stroke: '#f09f09',
    strokeWidth: moderateScale(0.4),
    background: 'none',
}

const svgTrashContainer = {
    position: 'absolute',
    top: moderateScale(0),
    right: moderateScale(0),
    margin: moderateScale(5)
}

const svgTrashButton = {
    fill: 'red',
    stroke: 'red',
    strokeWidth: moderateScale(1),
    background: 'none',
}

const meansPayment = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: moderateScale(20)
}

const meansPaymentSectionContainer = {
    backgroundColor: '#fff',
    width: '100%',
    padding: moderateScale(20),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(1),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#efefef'
}

const icon = {
    marginRight: moderateScale(15)
}

const textIconContainer = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}

export default { 
    mainScrollView,
    mainOrderViewContainer,
    orderContainer,
    orderTitle,
    orderInfo,
    textInfo,
    buttonIncDec,
    svgButtonIncDec, 
    svgTrashButton,
    svgTrashContainer,
    orderRef,
    orderStatus,
    meansPayment,
    icon,
    textIconContainer,
    meansPaymentSectionContainer
}