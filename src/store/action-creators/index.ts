import * as UserActionCreatos from './user'
import * as TodoActionCreatos from './todo'

export default {
    ...TodoActionCreatos,
    ...UserActionCreatos
}