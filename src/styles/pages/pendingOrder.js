import { moderateScale } from '../../utils/Responsive'

const pendingOrderViewContainer = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(20),
}

const pendingOrderCardContainer = {
    width: '90%',
    height: 'auto',
    borderRadius: moderateScale(5),
    padding: moderateScale(20),
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
}

const pendingOrderTextInstructions = {
    fontSize: moderateScale(20),
    textAlign: 'center',
    margin: moderateScale(20)
}

const pendingOrder = {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: '#FFF'
}

const pendingOrderContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%'
}

const title = {
    fontSize: moderateScale(20),
    fontWeight: 'bold'
}

const subTitle = {
    fontSize: moderateScale(20)
}

const progressBarViewContainer = {
    marginTop: moderateScale(20),
    alignItems: 'center'
}

export default {
    pendingOrderViewContainer,
    pendingOrderCardContainer,
    pendingOrderTextInstructions,
    pendingOrder,
    pendingOrderContainer,
    title,
    subTitle,
    progressBarViewContainer
}