// Reexport the native module. On web, it will be resolved to ExpoAppsModule.web.ts
// and on native platforms to ExpoAppsModule.ts
export * from './src/ExpoApps.types';
export { default } from './src/ExpoAppsModule';

