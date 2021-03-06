import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile182771Navigator from '../features/UserProfile182771/navigator';
import Tutorial182770Navigator from '../features/Tutorial182770/navigator';
import NotificationList182742Navigator from '../features/NotificationList182742/navigator';
import Settings182741Navigator from '../features/Settings182741/navigator';
import Settings182733Navigator from '../features/Settings182733/navigator';
import UserProfile182731Navigator from '../features/UserProfile182731/navigator';
import UserProfile182700Navigator from '../features/UserProfile182700/navigator';
import Tutorial182699Navigator from '../features/Tutorial182699/navigator';
import NotificationList182671Navigator from '../features/NotificationList182671/navigator';
import Settings182670Navigator from '../features/Settings182670/navigator';
import Settings182662Navigator from '../features/Settings182662/navigator';
import UserProfile182660Navigator from '../features/UserProfile182660/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile182771: { screen: UserProfile182771Navigator },
Tutorial182770: { screen: Tutorial182770Navigator },
NotificationList182742: { screen: NotificationList182742Navigator },
Settings182741: { screen: Settings182741Navigator },
Settings182733: { screen: Settings182733Navigator },
UserProfile182731: { screen: UserProfile182731Navigator },
UserProfile182700: { screen: UserProfile182700Navigator },
Tutorial182699: { screen: Tutorial182699Navigator },
NotificationList182671: { screen: NotificationList182671Navigator },
Settings182670: { screen: Settings182670Navigator },
Settings182662: { screen: Settings182662Navigator },
UserProfile182660: { screen: UserProfile182660Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
