import React, { Component } from 'react'
import Cute from './components/Cute/Cute'
import { connect } from 'react-redux'
import { getText, getCute } from './redux/actions'
import { bindActionCreators } from 'redux';
// import store from './redux/store'

class App extends Component {
   state = {
      textList: 'list'
   }
   componentWillMount() {

   }
   render() {
      const { cuteUrl, text, getCute } = this.props;
      return (
         <div>
            <Cute cuteurl={cuteUrl} changeImgBT={() => getCute()}></Cute>
            {/* <p onClick={() => getCute(this.state.textList)}>取值</p> */}
            {/* <p onClick={() => getText(this.state.textList)}>{text}</p> */}
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      cuteUrl: state.getDogReducer.url,
      text: state.getDogReducer.text
   }
}

const mapDispatchToProps = dispatch => ({
   getCute: () => dispatch(getCute())
})
// const mapDispatchToProps = dispatch => {
//    return {
//       handleChange:(text)=>{
//          dispatch(getText(text))
//       }
//    }
// }
// const mapDispatchToProps = {
//    handleChange: getText
// }
// function mapDispatchToProps(dispatch) {
//    return bindActionCreators({ getCute }, dispatch)
// }

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App)