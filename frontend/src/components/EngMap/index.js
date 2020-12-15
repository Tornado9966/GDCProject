import { GoogleApiWrapper } from 'google-maps-react';

import { myApiKey } from 'constants/text-constants';
import { EngMap } from './EngMap';

export default GoogleApiWrapper({
    apiKey: myApiKey
})(EngMap);