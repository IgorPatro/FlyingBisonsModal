export type Preferences = Record<string, CheckboxSchema>

export interface CheckboxSchema {
  isChecked: boolean
  children?: Preferences
}

export const employeesTree: Preferences = {
  attention: {
    isChecked: false,
  },
  satisfation: {
    isChecked: false,
  },
  passion: {
    isChecked: false,
    children: {
      sport: {
        isChecked: false,
      },
      books: {
        isChecked: true,
      },
      dancing: {
        isChecked: true,
      },
    },
  },
  location: {
    isChecked: false,
  },
}

export const companyTree: Preferences = {
  negotiation: {
    isChecked: false,
    children: {
      speaker: {
        isChecked: false,
      },
      player: {
        isChecked: true,
      },
    },
  },
  sympathy: {
    isChecked: false,
  },
  expression: {
    isChecked: false,
  },
}

export const performanceTree: Preferences = {
  foundation: {
    isChecked: false,
  },
  midnight: {
    isChecked: false,
  },
}

export const workspacesTree: Preferences = {
  apple: {
    isChecked: false,
  },
}

export interface State {
  employees: Preferences
  company: Preferences
  performance: Preferences
  workspaces: Preferences
}

export const initialState: State = {
  employees: employeesTree,
  company: companyTree,
  performance: performanceTree,
  workspaces: workspacesTree,
}

type PreferenceList = {
  name: string
  preference: keyof State
}

export const preferencesRenderer: PreferenceList[] = [
  {
    name: "Employees",
    preference: "employees",
  },
  {
    name: "Company",
    preference: "company",
  },
  {
    name: "Performance",
    preference: "performance",
  },
  {
    name: "Workspaces",
    preference: "workspaces",
  },
]
