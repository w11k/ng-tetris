import {Action} from '@ngrx/store';

export enum SettingActionTypes {
  UpdateForm = 'UpdateForm'
}

export interface SettingsState {
  forceReload: boolean;
  speed: number;
}

export class UpdateSettingsAction implements Action {
  readonly type = SettingActionTypes.UpdateForm;
  constructor(public payload: Partial<SettingsState>) {}
}

export type SettingsActions = UpdateSettingsAction;

export const InitialSettingsState: SettingsState = {
  forceReload: false,
  speed: 4,
};

export function settingsReducer(
  state: SettingsState = InitialSettingsState,
  action: SettingsActions
): SettingsState {
  switch (action.type) {
    case SettingActionTypes.UpdateForm:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
