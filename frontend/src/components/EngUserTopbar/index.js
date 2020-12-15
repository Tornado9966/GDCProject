import {connect} from 'react-redux';

import { EngUserTopbar } from './EngUserTopbar';

function mapState({auth: {loggedIn}}) {
  return {
    loggedIn
  };
}
  
export default connect(mapState)(EngUserTopbar);
