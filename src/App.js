import React, { Component } from 'react'
import Cute from './components/Cute/Cute'
import { connect } from 'react-redux'
import { getText } from './redux/actions'
import { bindActionCreators } from 'redux';
// import store from './redux/store'

class App extends Component {
   state = {
      textList:'list'
   }
   componentWillMount() {

   }
   // changeText=()=>{
   //    const { getText} = this.props;
   //    // console.log(this.props);
   //    getText('+')
   // }

   render() {
      const { cuteUrl, text, getText } = this.props;
      return (
         <div>
            <Cute cuteurl={cuteUrl}></Cute>
            <p>取值</p>
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
   getText: id => dispatch(getText(id))
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
// function mapDispatchToProps(dispatch){
//    return bindActionCreators({getText},dispatch)
// }

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App)