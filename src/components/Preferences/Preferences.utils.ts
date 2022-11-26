import { type Preferences } from "./Preferences.types"

export const toggleChild = (childName: string, prevState: Preferences) => ({
  ...prevState,
  [childName]: {
    ...prevState[childName],
    isChecked: !prevState[childName].isChecked,
  },
})

export const toggleSubChild = (
  childName: string,
  subChildName: string,
  prevState: Preferences
) => ({
  ...prevState,
  [childName]: {
    ...prevState[childName],
    children: toggleChild(subChildName, prevState[childName].children!),
  },
})

export const calculateChecked = (preferences: Preferences): number => {
  let count = 0

  Object.values(preferences).forEach((child) => {
    if (child.isChecked) {
      count++
    }

    if (child.children) {
      count += calculateChecked(child.children)
    }
  })

  return count
}

export const calculateTotalOptions = (preferences: Preferences): number => {
  let count = 0

  Object.values(preferences).forEach((child) => {
    count++

    if (child.children) {
      count += calculateTotalOptions(child.children)
    }
  })

  return count
}
