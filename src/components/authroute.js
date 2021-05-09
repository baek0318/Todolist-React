import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

const AuthRoute = (auth, component, render, ...rest) => {

  return (
    <Route
      {...rest}
      render={(props) => 
        auth ? (
          render ? (
            render(props)
          ) : (
            <component {...props}/>
          )
        ) : (
          <Redirect 
            to={{pathname: "/login", state: {from: props.location}}}
          />
        )
      }
    />
  );
}

export default AuthRoute;