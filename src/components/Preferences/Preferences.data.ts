export interface CheckboxSchema {
  isChecked: boolean
  children?: Record<string, CheckboxSchema>
}

export const employeesTree: Record<string, CheckboxSchema> = {
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

export const companyTree: Record<string, CheckboxSchema> = {
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

export const performanceTree: Record<string, CheckboxSchema> = {
  foundation: {
    isChecked: false,
  },
  midnight: {
    isChecked: false,
  },
}

export const workspacesTree: Record<string, CheckboxSchema> = {
  apple: {
    isChecked: false,
  },
}
