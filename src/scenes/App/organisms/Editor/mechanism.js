import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Presentation from './presentation'
import { operations } from './duck'

const mapStateToProps = state => ({
  code: state.editor,
})

const mapDispatchToProps = dispatch => bindActionCreators(operations, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Presentation)
