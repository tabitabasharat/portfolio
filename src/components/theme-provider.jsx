// "use client"
// import { ThemeProvider as NextThemesProvider } from "next-themes"

// export function ThemeProvider({ children, ...props }) {
//   return <NextThemesProvider  {...props}>{children}</NextThemesProvider>
// }
"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider
      attribute="class"       // This adds "class=dark" or "class=light" to <html>
      defaultTheme="system"   // You can also set this to "light" or "dark" if you want
      enableSystem={true}     // Allow system theme preference
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
