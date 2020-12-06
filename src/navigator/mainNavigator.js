import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList182671Navigator from '../features/NotificationList182671/navigator';
import Settings182670Navigator from '../features/Settings182670/navigator';
import Settings182662Navigator from '../features/Settings182662/navigator';
import UserProfile182660Navigator from '../features/UserProfile182660/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
