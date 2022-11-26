export type Preferences = Record<string, ListItem>

export interface ListItem {
  isChecked: boolean
  children?: Preferences
}

export interface State {
  employees: Preferences
  company: Preferences
  performance: Preferences
  workspaces: Preferences
}

interface ToggleChildAction {
  type: "TOGGLE_CHILD"
  payload: {
    preferenceName: keyof State
    childName: string
  }
}

interface ToggleSubChildAction {
  type: "TOGGLE_SUB_CHILD"
  payload: {
    preferenceName: keyof State
    childName: string
    subChildName: string
  }
}

export type Action = ToggleChildAction | ToggleSubChildAction
