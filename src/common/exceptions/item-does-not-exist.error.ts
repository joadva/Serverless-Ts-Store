import { DictionaryErrors } from '../helpers/errorConstants';
import { CustomError } from "./custom-error";

export class ItemDoesNotExistException extends CustomError {
    static getError(): ItemDoesNotExistException {
        return new ItemDoesNotExistException(DictionaryErrors.ITEM_DOES_NOT_EXIST_EXCEPTION.message, DictionaryErrors.ITEM_DOES_NOT_EXIST_EXCEPTION.codeString, DictionaryErrors.ITEM_DOES_NOT_EXIST_EXCEPTION.code,DictionaryErrors.ITEM_DOES_NOT_EXIST_EXCEPTION.httpStatusCode);
    }
}