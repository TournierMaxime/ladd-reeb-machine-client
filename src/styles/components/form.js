import { moderateScale } from '../../utils/Responsive'

const formContainer = {
    backgroundColor: '#fff',
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    margin: moderateScale(20),
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

const formInput = {
    backgroundColor: '#f2f2f2',
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    marginBottom: moderateScale(10),
}

const formLabel = {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    marginBottom: moderateScale(10),
}

export default { formLabel, formInput, formContainer, }