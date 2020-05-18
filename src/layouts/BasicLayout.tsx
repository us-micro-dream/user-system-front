import React, { PureComponent } from "react";
import "./index.less";

class BasicLayout extends PureComponent {

  public render = () => {
    const {
      children,
    } = this.props;
    return (

      <div className="layout" >
        <img className="layout-logo" src={require("@/assets/logo.png")} alt="logo" />
        {/* <audio className='component-award-container-audio' src={require('@/assets/award.mp3')} /> */}
        {children}
      </div>
    );

  }
}

export default BasicLayout;
