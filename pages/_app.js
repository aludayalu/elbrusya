import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { createTheme } from "@nextui-org/react"
import { SessionProvider } from "next-auth/react"

const theme = createTheme({
	type: "dark", // it could be "light" or "dark"
	theme: {
	  colors: {
		// brand colors
		primaryLight: '$green200',
		primaryLightHover: '$green300',
		primaryLightActive: '$green400',
		primaryLightContrast: '$green600',
		primary: '#4ADE7B',
		primaryBorder: '$green500',
		primaryBorderHover: '$green600',
		primarySolidHover: '$green700',
		primarySolidContrast: '$white',
		primaryShadow: '$green500',

		gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
		link: '#5E1DAD',

		// you can also create your own color
		myColor: '#ff4ecd'

		// ...  more colors
	  },
	  space: {},
	  fonts: {}
	}
  })

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
	<NextUIProvider theme={theme}>
		<SessionProvider session={session}>
	  	<Component {...pageProps} />
		</SessionProvider>
	</NextUIProvider>
  );
}

export default App;
