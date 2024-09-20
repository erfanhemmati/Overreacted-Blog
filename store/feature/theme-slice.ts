import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState = {
  value: ThemeState
}

type ThemeState = {
  isDark: boolean
}

const initialState: InitialState = {
  value: {
    isDark: true
  }
}

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return {
        value: {
          isDark: !state.value.isDark
        }
      }
    },

    setTheme: (_, action: PayloadAction<boolean>) => {
      return {
        value: { isDark: action.payload }
      }
    }
  }

})

export const { toggleTheme, setTheme } = theme.actions
export default theme.reducer
