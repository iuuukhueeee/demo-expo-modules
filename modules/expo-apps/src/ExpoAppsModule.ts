import { NativeModule, requireNativeModule } from "expo";

declare class ExpoAppsModule extends NativeModule {
  // using the same name as we defined in ExpoAppModule.swift
  // The function is an async function so we return a Promise
  authorizeAsync: () => Promise<void>;

  showPicker: () => Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoAppsModule>("ExpoApps");
