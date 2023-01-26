import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { launcherApi } from '../api/launcher-api';

export const store = configureStore({
  reducer: {
    [launcherApi.reducerPath]: launcherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([launcherApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
