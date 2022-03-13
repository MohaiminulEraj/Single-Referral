import '../styles/globals.css';
import '../styles/bootstrap.min.css';
import "react-widgets/styles.css";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
