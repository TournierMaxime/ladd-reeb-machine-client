import { moderateScale } from '../../utils/Responsive'

const container = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: moderateScale(10),
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    shadowColor: '#000',
    shadowOffset: {
      width: moderateScale(0),
      height: moderateScale(2),
    },
    shadowOpacity: moderateScale(0.25),
    shadowRadius: moderateScale(3.84),
    elevation: moderateScale(5),
    position: 'absolute'
}

const cardContainer = {
    height: 'auto',
    padding: moderateScale(20),
    borderRadius: moderateScale(5)
}

const title = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: moderateScale(24),
    color: 'white'
}

const authMethodContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const authMethodCardContainer = {
    backgroundColor: '#fff',
    alignItems: 'center',
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
    position: 'relative',
    width: '70%'
}

export default { 
    container,
    cardContainer,
    title,
    authMethodContainer,
    authMethodCardContainer
 }