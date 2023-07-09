import React from 'react';
import {CustomerNavigation} from './CustomerNavigation';
import {CompanyNavigation} from './CompanyNavigation';

export function AppNavigation(props) {
  const {userType} = props;

  return (
    <>
      {userType === 'company' ? <CompanyNavigation /> : <CustomerNavigation />}
    </>
  );
}
