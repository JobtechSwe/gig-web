import { connect } from 'react-redux'
import SideBarMenu from '../../components/Menu/SideBarMenu'
import { hideMenu } from '../../actions/menu'

const mapStateToProps = ({ menu }) => ({
  show: menu.show
})

const mapDispatchToProps = (dispatch) => ({
  onCloseClick: () => {
    dispatch(hideMenu())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMenu)
