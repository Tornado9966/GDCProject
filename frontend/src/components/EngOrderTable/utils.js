import {getTables} from '../../services/http-client/tables';

export function getTablesList(restId) {
    return getTables(restId);
}