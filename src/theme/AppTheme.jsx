

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
     {children}
    </ThemeProvider>
  )
}
