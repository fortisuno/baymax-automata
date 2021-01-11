import '../styles/globals.scss'

import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
