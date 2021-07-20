import { userService } from '../../services/userService'

export function loadUsers() {
  return async dispatch => {
    try {
      const users = await userService.getUsers()
      dispatch({ type: 'SET_USERS', users })
    } catch (err) {
      console.log('UserActions: err in loadUsers', err)
    }
  }
}

export function loadLoggedInUser() {
  return async dispatch => {
    try {
      const user = await userService.getLoggedInUser();
      if (user) {
        dispatch({ type: 'SET_USER', user });
      }
    } catch (err) {
      console.log('User Actions: err in loaded User', err);
    }
  };
}

export function removeUser(userId) {
  return async dispatch => {
    try {
      await userService.remove(userId)
      dispatch({ type: 'REMOVE_USER', userId })
    } catch (err) {
      console.log('UserActions: err in removeUser', err)
    }
  }
}

export function login(userCreds) {
  return async dispatch => {
    try {
      const user = await userService.login(userCreds)
      if (user) {
        dispatch({ type: 'LOGIN', user });
      }
    } catch (err) {
      console.log('UserActions: err in login', err)
    }
  }
}
export function signup(userCreds) {
  return async dispatch => {
    try {
      const data = await userService.signup(userCreds)
      const {user, users } = data;
      if (data) {
        dispatch({ type: 'SIGNUP', user, users });
      }
    } catch (err) {
      console.log('UserActions: err in signup', err)
    }
  }
}
export function logout() {
  return async dispatch => {
    try {
      await userService.logout()
      dispatch({ type: 'LOGOUT' });
    } catch (err) {
      console.log('UserActions: err in logout', err)
    }
  }
}
