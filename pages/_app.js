// pages/_app.js
import '../styles/globals.css';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThemedComponent Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}

const ThemedComponent = ({ Component, pageProps }) => {
  const { theme } = useTheme();

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <Component {...pageProps} />;
};

export default MyApp;
