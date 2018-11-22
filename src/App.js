import React, { Component } from 'react'
import Cute from './components/Cute/Cute'
import { connect } from 'react-redux'
import { getText, getCute } from './redux/actions'
import { bindActionCreators } from 'redux';
// import store from './redux/store'
// const doFilter = query => user => query === user.name
function doFilter(query) {
   return function (user) {
      return query === user.name
   }
}
class App extends Component {
   state = {
      textList: 'list',
      query: ""
   }
   componentWillMount() {

   }
   handleChange = (ev) => {
      this.setState({ query: ev.target.value })
   }
   render() {
      const { cuteUrl, text, getCute } = this.props;
      // 数据
      let blogs = [
         {
            title: 'React v16.3.0: New lifecycles and context API',
            url: 'https://reactjs.org/blog/2018/03/29/react-v-16-3.html',
            by: 'Brian Vaughn'
         },
         {
            title: 'React v16.3.0: New lifecycles and context API',
            url: 'https://reactjs.org/blog/2018/03/29/react-v-16-3.html',
            by: 'Brian Vaughn'
         },
      ];
      let types = ['推荐', '热门', '最新'];
      return (
         <div>
            <Cute cuteurl={cuteUrl} changeImgBT={() => getCute()}></Cute>
            {/* <p onClick={() => getCute(this.state.textList)}>取值</p> */}
            {/* <p onClick={() => getText(this.state.textList)}>{text}</p> */}
            <ul>
               {types.map((item, index) => (
                  <li key={index}>
                     {item}
                     <div>{
                        blogs.map((item, index) => (
                           <div key={index}>
                              <p>{item.title}</p>
                              <p>{item.url}</p>
                           </div>
                        ))}
                     </div>
                  </li>
               ))}
            </ul>
            <input
               type="text"
               onChange={this.handleChange}
            />
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