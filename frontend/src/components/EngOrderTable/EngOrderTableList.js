import React, {useState, useEffect} from 'react';
import {
    Header
} from 'semantic-ui-react';
import { chooseTable } from 'constants/text-constants';
import {map as _map, filter as _filter} from 'lodash';

import useOrder from 'context/useOrder';
import {getTablesList} from './utils';
import {EngTable} from './EngTable';

export const EngOrderTableList = () => {
  const {state: {restaurants: {_id: restaurantsId}}} = useOrder();
  const [tablesData, setTablesData] = useState({});

  useEffect(() => {
    getTablesList(restaurantsId).then(res => setTablesData(res.data));
  }, [restaurantsId]);

  const getTables = (type, tablesData) => _filter(tablesData, table => table.position === type);

  const renderTables = tables => _map(tables, table =>
    <EngTable
      key={table.id}
      {...table}
    />
  );

  const topTables = getTables('top', tablesData);
  const leftTables = getTables('left', tablesData);
  const rightTables = getTables('right', tablesData);
  return (
      <div className="bookTablePage__tables">
          <Header as='h2'>{chooseTable}</Header>
            <div className="tables__topPosition">
              {renderTables(topTables)}
            </div>
            <div className="tables__leftPosition">
              {renderTables(leftTables)}
            </div>
            <div className="tables__rightPosition">
              {renderTables(rightTables)}
            </div>
      </div>
  );
};

export default EngOrderTableList;


