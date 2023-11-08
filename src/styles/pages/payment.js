import { moderateScale } from '../../utils/Responsive'

const paymentViewContainer = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: moderateScale(20),
}

const paymentCardContainer = {
    width: '90%',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: moderateScale(5),
    padding: moderateScale(20),
}

const paymentTextInstructions = {
    fontSize: moderateScale(20),
    textAlign: 'center',
    margin: moderateScale(20)
}

const paymentOrder = {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
}

const paymentOrderContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#b3b3b3',
    width: '80%'
}

const paymentDetailsContainer = {
    alignItems: 'flex-start',
    marginVertical: moderateScale(20)
}

const title = {
    fontSize: moderateScale(24),
    fontWeight: 'bold'
}

const subTitle = {
    fontSize: moderateScale(20)
}

export default {
    paymentViewContainer,
    paymentCardContainer,
    paymentTextInstructions,
    paymentOrder,
    paymentOrderContainer,
    paymentDetailsContainer,
    title,
    subTitle
}