import React, { Component } from 'react'
import Cute from './components/Cute/Cute'
import { connect } from 'react-redux'
import { CUTEIMG } from './redux/actions/actions_type'

class App extends Component {
   state = {

   }
   componentWillMount() {

   }

   render() {
      const { cuteUrl, changeImg } = this.props;
      return (
         <div>
            <Cute cuteurl={cuteUrl} changeImg={changeImg}></Cute>
         </div>
      )
   }
}


const mapStateToProps = state => {
   return {
      cuteUrl: state.getDogReducer.url
   }
}
const mapDispatchToProps = dispatch => {
   return {
      changeImg: () => {
         dispatch(CUTEIMG)
      }
   }
}
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App)