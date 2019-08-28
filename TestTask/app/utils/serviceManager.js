import GitHub from 'github-api';
import { userData } from './global';
import Navigation from './navigation';
import { screenNames, auth } from './constant';
import { Storage } from '../storage/storage';

export function login(username, password, callback) {
  const gh = new GitHub({
    username,
    password,
  });
  const me = gh.getUser();
  me.listNotifications((err) => {
    callback(err, me);
  });
}

export function logout() {
  userData.authToken = '';
  userData.userName = '';
  Storage.deleteItem(auth.AUTH_TOKEN);
  Storage.deleteItem(auth.USER_NAME);
  Navigation.sharedInstance().resetRouteName(
    screenNames.LOGIN_SCREEN,
  );
}
