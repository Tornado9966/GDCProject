import React from 'react';

import {EngOrderTableForm} from './EngOrderTableForm';
import {EngOrderTableList} from './EngOrderTableList';

import './styles.scss';

export function EngOrderTable() {
      return (
        <div className="bookTablePage">
            <EngOrderTableForm />
            <EngOrderTableList />
        </div>
      );
}