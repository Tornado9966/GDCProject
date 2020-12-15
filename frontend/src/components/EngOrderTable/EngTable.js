import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import useOrder from 'context/useOrder';

export const EngTable = props => {
  const {state: {tables: {id: selectedTable}}, setTableStep: choseTable } = useOrder();
  const {id, position, name, className} = props;
  const activeClass = classnames('table', {
    active: selectedTable === id
  });

  return (
    <button
      type="button"
      className={classnames(activeClass, className)}
      position={position}
      name={name}
      onClick={()=>choseTable('id', id)}
    >
      <span>{name}</span>
    </button>
  );
};

EngTable.propTypes = {
  id: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default EngTable;