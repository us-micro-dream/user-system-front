import React, { Component } from "react";
import "./index.less";

interface IndexProps {
  user: any;
  location: any
}
interface IndexState {
  currentUser: any;
}
class Loading extends Component<IndexProps, IndexState> {

  componentDidMount = () => {
    const token = this.props.location.query.oauthCode
    if(token) {
      localStorage.setItem('m-token', token)
    } else {
      // window.location.href = 'https://sc.peiyou.eaydu.com/api/wechat/motherOauth'
    }

  }
  public render() {
    return (
      <div className="loading home home-bg flex">
        <img src={require('../../assets/img/loading.gif')} alt="" className="loading-load"/>
      </div>
    );
  }
}

export default Loading;
