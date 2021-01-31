import React, {Component} from 'react';
import {connect} from 'react-redux'
import {add} from "./redux/actions/actions";
import InitializeFromStateForm from "./components/UserEdit";

class App extends Component {
  render() {
    return (
        <div className="App">
          <InitializeFromStateForm />
        </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    counter: state.counter.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
