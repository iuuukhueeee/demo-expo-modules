import { NativeModule, requireNativeModule } from "expo";

import { ExpoAppsModuleEvents } from "./ExpoApps.types";

declare class ExpoAppsModule extends NativeModule<ExpoAppsModuleEvents> {}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoAppsModule>("ExpoApps");
