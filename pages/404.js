export default function Custom404() {
    return (
        <Layout home>
        <Head>
            <title>404</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>
                The page you are looking for might have been removed had its name
                changed or is temporarily unavailable.
            </p>
            <p>
                <Link href="/">
                <a>Go to the homepage</a>
                </Link>
            </p>
            </p>
        </section>
        </Layout>
    );
}