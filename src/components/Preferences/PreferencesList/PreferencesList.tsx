import React from "react"
import Checkbox from "../../common/Checkbox/Checkbox"

export interface CheckboxSchema {
  isChecked: boolean
  children?: Record<string, CheckboxSchema>
}

interface Props {
  preferences: Record<string, CheckboxSchema>
  updateChild: (name: string) => void
  updateSubChild: (
    name: string,
    subChildName: string,
    subChild: CheckboxSchema
  ) => void
}

const PreferencesList = ({
  preferences,
  updateChild,
  updateSubChild,
}: Props) => {
  return (
    <div>
      {Object.entries(preferences).map(([name, child]) => {
        return (
          <div key={name}>
            <Checkbox
              label={name}
              isChecked={preferences[name].isChecked}
              onChange={() => updateChild(name)}
            />
            {child.children &&
              Object.entries(child.children).map(([subChildName, subChild]) => (
                <div style={{ paddingLeft: "20px" }} key={subChildName}>
                  <Checkbox
                    label={subChildName}
                    isChecked={subChild.isChecked}
                    onChange={() =>
                      updateSubChild(name, subChildName, {
                        isChecked: !subChild.isChecked,
                      })
                    }
                  />
                </div>
              ))}
          </div>
        )
      })}
    </div>
  )
}

export default PreferencesList
