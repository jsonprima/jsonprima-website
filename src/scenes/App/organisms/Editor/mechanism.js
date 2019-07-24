import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Presentation from './presentation'
import { operations } from './duck'

const mapStateToProps = state => ({
  code: state.editor.code,
  pendingValidation: state.editor.validate.pending,
  response: state.editor.validate.response,
})

const mapDispatchToProps = dispatch => bindActionCreators(operations, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Presentation)
