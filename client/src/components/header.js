import React from 'react';
import { logOut, signOut } from '../actions'
import { connect } from 'react-redux';

export function Header(props) {
  function getUserName(){
    if(props.userInfo){
      return(
        <div>
          <div className="return-dash">
            <br/>

          </div>
          <div className="log-out">
            {props.userInfo.displayName}
            <br/>
            <a 
              className="logout-btn"
              href="/api/auth/logout"
            >
              log out
            </a>
            <a 
              className="return-btn"
              href="/"
            >
              return
            </a>            
          </div>
        </div>
      )
    }
  }
  
  return (
    <div className="header-container">
      <div className="header-title-container">
        <span className="header-title">hànzì</span>
      </div>
        <span id="username">{getUserName()}</span>
    </div>

  )
}
const mapStateToProps = state => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps)(Header);