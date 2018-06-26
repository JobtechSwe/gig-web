import { connect } from 'react-redux'
import MenuToggler from '../../components/Header/MenuToggler'
import { showMenu } from '../../actions/menu'

const mapDispatchToProps = (dispatch) => ({
  onMenuTogglerClick: () => {
    dispatch(showMenu())
  }
})

export default connect(null, mapDispatchToProps)(MenuToggler)
