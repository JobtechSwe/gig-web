import { connect } from 'react-redux'
import MenuToggler from '../../components/Header/MenuToggler'
import { showMenu } from '../../actions/menu'

const mapStateToProps = (state, props) => ({
  menuBarOpen: state.menu.open,
})

const mapDispatchToProps = (dispatch) => ({
  onMenuTogglerClick: () => {
    dispatch(showMenu())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuToggler)
