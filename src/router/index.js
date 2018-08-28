import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect,Router } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';

import Container from "@/Container/Container";
import home from "@/pages/home/home";
import record from "@/pages/record/record";
import helpcenter from "@/pages/helpcenter/helpcenter";
import production from "@/pages/production/production";
import balance from "@/pages/balance/balance";

// const record = import("@/pages/record/record"));
// const helpcenter =  import("@/pages/helpcenter/helpcenter"));
// const production =  import("@/pages/production/production"));
// const balance =  import("@/pages/balance/balance"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活

class RouteConfig extends Component{
  
  render(){
    return(
        <HashRouter>
          <Container>
              <Route path="/" exact component={home} />
              <Route path="/record"  component={record} />
              <Route path="/helpcenter" component={helpcenter} />
              <Route path="/production" component={production} />
              <Route path="/balance" component={balance} />
          </Container>
       </HashRouter>
    )
  }
}
export default RouteConfig;