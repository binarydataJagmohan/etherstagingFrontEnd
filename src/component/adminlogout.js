import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import * as userActions from '../actions/userActions';
import { ADMIN_LOGIN_PAGE_PATH } from '../constants';
import { endUserSession } from '../userSession';

class AdminLogout extends Component {

    componentDidMount() {
        this.props.actions.userLogoutSuccess();
    }

    render() {
        endUserSession();
        return (<Redirect to={ADMIN_LOGIN_PAGE_PATH} />)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(userActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogout);