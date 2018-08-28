import React, { Component } from 'react';
import PublicHeader from '@/components/header/header'; 
import { is, fromJS } from 'immutable';
import './helpcenter.css';

export default class HelpCenter extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
  componentDidMount(){
  }
  render(){
    return (
      <main className="home-container">
        <PublicHeader title="帮助中心" record />
        <p>123</p>
      </main>
    )
  }
}