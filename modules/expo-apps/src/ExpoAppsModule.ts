import { NativeModule, requireNativeModule } from 'expo';

import { ExpoAppsModuleEvents } from './ExpoApps.types';

declare class ExpoAppsModule extends NativeModule<ExpoAppsModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoAppsModule>('ExpoApps');
