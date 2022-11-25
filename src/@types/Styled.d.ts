import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string
    }
    weights: {
      regular: number
      medium: number
      semiBold: number
      bold: number
    }
  }
}
