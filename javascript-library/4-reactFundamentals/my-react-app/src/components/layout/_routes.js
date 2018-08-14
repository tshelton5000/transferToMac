import React from 'react';
import Dashboard from '../concepts/Dashboard';
import LoginSignup from '../concepts/LoginSignup';
import List from '../concepts/List';

export const routes = [
    {
        path: '/dashboard',
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: '/loginsignup',
        exact: true,
        main: () => <LoginSignup />
    },
    {
        path: '/List',
        exact: true,
        main: () => <List/>
    }
]