import React from "react"
import Checkbox from "../../common/Checkbox/Checkbox"
import { type Preferences } from "../Preferences.data"
import * as S from "./PreferencesList.styled"
import { type Action } from "../Preferences"
import { type State } from "../Preferences.data"

interface Props {
  preferences: Preferences
  preferenceName: keyof State
  dispatch: (action: Action) => void
}

const PreferencesList = ({ preferences, preferenceName, dispatch }: Props) => {
  return (
    <S.PreferencesList>
      {Object.entries(preferences).map(([childName, child]) => {
        return (
          <S.PreferencesListItem key={childName}>
            <Checkbox
              label={childName}
              isChecked={preferences[childName].isChecked}
              onChange={() =>
                dispatch({
                  type: "TOGGLE_CHILD",
                  payload: {
                    preferenceName,
                    childName,
                  },
                })
              }
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
                          dispatch({
                            type: "TOGGLE_SUB_CHILD",
                            payload: {
                              preferenceName,
                              childName,
                              subChildName,
                            },
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
