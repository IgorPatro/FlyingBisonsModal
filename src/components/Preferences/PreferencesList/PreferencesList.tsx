import React from "react"
import Checkbox from "../../common/Checkbox/Checkbox"
import { type CheckboxSchema } from "../Preferences.data"
import * as S from "./PreferencesList.styled"

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
    <S.PreferencesList>
      {Object.entries(preferences).map(([name, child]) => {
        return (
          <S.PreferencesListItem key={name}>
            <Checkbox
              label={name}
              isChecked={preferences[name].isChecked}
              onChange={() => updateChild(name)}
            />
            {child.children && (
              <S.PreferencesList>
                {Object.entries(child.children).map(
                  ([subChildName, subChild]) => (
                    <S.PreferencesListItem key={subChildName}>
                      <Checkbox
                        label={subChildName}
                        isChecked={subChild.isChecked}
                        onChange={() =>
                          updateSubChild(name, subChildName, {
                            isChecked: !subChild.isChecked,
                          })
                        }
                      />
                    </S.PreferencesListItem>
                  )
                )}
              </S.PreferencesList>
            )}
          </S.PreferencesListItem>
        )
      })}
    </S.PreferencesList>
  )
}

export default PreferencesList
