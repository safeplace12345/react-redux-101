const initialState = {
    loading : false,
    data: [],
    error : ''
}
const fetch_users = "fetch_users"
const fetch_users_success = "fetch_users_success"
const fetch_users_failure = "fetch_users_failure"

const _fetchUsers = () => ({type : fetch_users})
const _fetchUsersSuccess = (users) => ({type :fetch_users_success, payload : users})
const _fetchUsersFailure = (error) => ({type :_fetchUsersFailure , payload : error})

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case fetch_users:
            return {
                ...state,
                loading: true
            }
            case fetch_users_success:
                return {
                    ...state,
                    loading :false,
                    data: action.payload
                }
                case fetch_users_failure:
                    return {
                        ...state,
                        loading : false,
                        error : action.payload
                    }
                default :
                return state
    }

} 

export const fetchDataActionType = ( ) => {
    return function(dispatch){
        dispatch(_fetchUsers())
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((json) => dispatch(_fetchUsersSuccess(json)))
          .catch(error => dispatch(_fetchUsersFailure(error)))
    }
} 
export default userReducer
