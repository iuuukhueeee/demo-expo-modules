// Reexport the native module. On web, it will be resolved to ExpoAppsModule.web.ts
// and on native platforms to ExpoAppsModule.ts
export { default } from './src/ExpoAppsModule';
export { default as ExpoAppsView } from './src/ExpoAppsView';
export * from  './src/ExpoApps.types';
