import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Container.css';
import { withRouter } from 'react-router'
class Container  extends Component{
  constructor(props) {
        super(props);
        this.state={
            tpl:''
        }
    }
    componentWillMount() {
        document.body.style.margin = "0px";
        // 这是防止页面被拖拽
        document.body.addEventListener('touchmove', (ev) => {
            ev.preventDefault();
        });
    }
    routerWillLeave(){
        console.log(this.props.location.pathname)
    }
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="example"
                component="div"
                transitionAppear={this.routerWillLeave()}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                <div key={new Date()}
                     style={{position:"absolute", width: "100%"}}>
                    {
                        this.props.children
                    }
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}
export default withRouter(Container) ;