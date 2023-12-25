import {Component} from 'react'
import './index.css'
import '../singleApp'

class BrowsingHistory extends Component {
    state={searchInput:""}

    onChangeSearchInput=(event)=>{
        this.setState({searchInput:event.target.value})
    }
    
    delete=id=>{
        const{appDetails}= this.state
        const updatedTodoList=appDetails.filter(eachTodo=>eachTodo.id!==id)
        this.setState({appDetails:updatedTodoList})
    }
  render() {
      const{searchInput}=this.state
      const {appDetails}= this.props
      const searchResults= appDetails.filter(each=>
        each.title.includes(searchInput))
    return (
      <div className="the-entire-box">
        <div className="upper-section">
          <h1>
            HIST
            <span>
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                className="o-setting"
                alt="app logo"
              />
            </span>
            RY
          </h1>
          <div className="upper-second">
            <div className="upper-search-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-icon-setting"
                alt="search"
              />
            </div>
            <div className="top-search-input">
              <input type="search" placeholder="Search history" onChange={this.onChangeSearchInput}/>
            </div>
          </div>
        </div>

        <div className="lower-portion">
          <ul>
              {searchResults.map(eachUser=>(
                 <singleApp singleAppDetails={eachUser}
                 key={eachUser.id}
                 delete={this.delete}
              ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default BrowsingHistory