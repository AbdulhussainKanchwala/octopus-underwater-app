// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  SSOlogin: 'https://account.dev.emsbilling.com/?appId=ems-test-local',
  SSOlogout: 'https://account.dev.emsbilling.com/site/landing-page',
  EmsAdminPortalApi: 'https://api-admin-portal.dev.emsbilling.com/',
  WebUIProjectURL: 'https://localhost:7054/login',
  WebAPIProjectURL: "",
  testVariables: "${testVariables}"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
