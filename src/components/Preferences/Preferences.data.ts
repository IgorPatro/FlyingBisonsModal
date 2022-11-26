import { type Preferences, type State } from "./Preferences.types"

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

type PreferencesList = {
  name: string
  preference: keyof State
}

export const preferencesRenderList: PreferencesList[] = [
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
