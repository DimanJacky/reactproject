import React, {Component} from 'react';
import {connect} from 'react-redux'
import {add} from "./redux/actions/actions";
import {Main} from "./components/Main/Main";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Main />
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
