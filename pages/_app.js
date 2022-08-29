import '../styles/global.css'

const App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default App;


// Any styles imported from 'pages/_app.js' will be available to the entire app.