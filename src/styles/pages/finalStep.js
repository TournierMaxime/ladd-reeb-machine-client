import { moderateScale } from '../../utils/Responsive'

const finalStepViewContainer = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: moderateScale(20),
    position: 'absolute',
    width: '100%'
}

const finalStepCardContainer = {
    width: '90%',
    height: 'auto',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: moderateScale(5),
    padding: moderateScale(20),
}

const finalStepTextInstructions = {
    fontSize: moderateScale(20),
    textAlign: 'center',
    margin: moderateScale(20)
}

const finalStepOrder = {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
}

const finalStepOrderContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#b3b3b3',
    width: '80%'
}

const finalStepDetailsContainer = {
    alignItems: 'flex-start',
    marginVertical: moderateScale(20)
}

const title = {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
}

const subTitle = {
    fontSize: moderateScale(20)
}

export default {
    finalStepViewContainer,
    finalStepCardContainer,
    finalStepTextInstructions,
    finalStepOrder,
    finalStepOrderContainer,
    finalStepDetailsContainer,
    title,
    subTitle
}