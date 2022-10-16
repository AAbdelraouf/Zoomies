import {useEffect} from 'react';
import {Platform, Alert} from 'react-native';
import {
  request,
  check,
  PERMISSIONS,
  RESULTS,
  checkNotifications,
  requestNotifications,
  openSettings,
} from 'react-native-permissions';

const iOSPermissionList = [
  'CAMERA',
  'PHOTO_LIBRARY',
  'LOCATION_ALWAYS',
  'MICROPHONE',
  'CALENDARS',
];

const androidPermissionList = [
  'BODY_SENSORS',
  'RECORD_AUDIO',
  'ACCESS_COARSE_LOCATION',
  'ADD_VOICEMAIL',
];

export const useRequestAppPermissions = () => {
  const platformOS = Platform.OS;

  const osType = platformOS === 'ios' ? 'IOS' : 'ANDROID';

  const checkOsType =
    Platform.OS === 'ios' ? iOSPermissionList : androidPermissionList;

  useEffect(() => {
    checkNotifications().then(({status, settings}) => {
      console.log(status);

      if (status === RESULTS.GRANTED) {
        return;
      }

      if (status === RESULTS.DENIED) {
        requestNotifications(['alert', 'sound']);
      }

      // TODO: to be activated when want user to change push notification settings //
      //   if (status === RESULTS.BLOCKED) {
      //     Alert.alert(
      //       'Zoomies needs notification access',
      //       'Go to Settings and allow push notifications for Zoomies',
      //       [
      //         {
      //           text: 'Cancel',
      //           onPress: () => {},
      //           style: 'cancel',
      //         },
      //         {
      //           text: 'Go to settings',
      //           onPress: () => openSettings(),
      //         },
      //       ],
      //     );
      //   }
    });

    for (let index = 0; index < checkOsType.length; index++) {
      const permision = checkOsType[index];

      const permissionParam = PERMISSIONS[osType][permision];

      check(permissionParam).then(result => {
        if (result === RESULTS.GRANTED) {
          return;
        }

        if (result === RESULTS.DENIED) {
          request(permissionParam);
        }
      });
    }
  }, []);
};
