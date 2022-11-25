import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string
      white: string
      text: string
      green: string
      blue: string
      darkBlue: string
      gray: string
    }
    weights: {
      regular: number
      medium: number
      semiBold: number
      bold: number
    }
  }
}
