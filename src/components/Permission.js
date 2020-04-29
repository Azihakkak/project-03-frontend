import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Permission extends Component {
  render() {
    const loggedInStatus = this.props.loggedInStatus;
    return(
      <div>
        {loggedInStatus
          ? <div>
            {this.props.children}
          </div>
          : <div>
              <Redirect to="/" />
          </div>
        }
      </div>

    );
  }
}
