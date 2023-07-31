#import <Foundation/Foundation.h>
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <UserNotifications/UNUserNotificationCenter.h>

#import <Expo/Expo.h>

// @interface AppDelegate : EXAppDelegateWrapper <RCTBridgeDelegate>

// @end

@interface AppDelegate : EXAppDelegateWrapper <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate>
@end


// #import <Foundation/Foundation.h>
// #import <React/RCTBridgeDelegate.h>
// #import <UIKit/UIKit.h>
// #import <UserNotifications/UNUserNotificationCenter.h>
// #import <Expo/Expo.h>

// @interface AppDelegate : EXAppDelegateWrapper <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate>

// @end


// @interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate>

