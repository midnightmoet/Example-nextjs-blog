import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const LisaExample = ({allPostsData}) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi! I'm Lisa, a Full Stack Developer passionate about solving real
          life problems with code. My background is in healthcare (crazy career
          change, right?), but my love for tech and building meaningful
          life-changing projects overtook me (the heart wants what it wants 🥰).
        </p>
        <p>
          I'm interested in using data for good by building front-end and
          back-end projects that meet the daily needs of users. I have a passion
          for front-end specifically, but I'm always open to learning new
          technologies and languages. I'm always looking for new opportunities
          to learn and grow.
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          {""} <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default LisaExample;
