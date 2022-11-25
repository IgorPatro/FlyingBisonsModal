import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string
      white: string
      text: string
      green: string
      blue: string
    }
    weights: {
      regular: number
      medium: number
      semiBold: number
      bold: number
    }
  }
}
