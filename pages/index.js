import Header from "../components/header";
import Footer from "../components/footer";
import MyCard from "../components/myCard";
const Home = (props) => {
  // console.log(props);
  // for checking the received data
  return (
    <>
      <Header />
      <main>
        <section className="home-cover">
          <img src="../assets/home-cover.png" />
          <div className="overlay">
            <div className="container">
              <h1>Simple Blog.</h1>
              <p>A blog created by FikraCamps</p>
            </div>
          </div>
        </section>
        <section className="container blog-list">
          {props.posts.articles.map((article) => (
            <MyCard key={article.createdAt} article={article} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

//////////////////////////////////////////////////////////////////////////////

export async function getStaticProps() {
  const res = await fetch("https://mashriq.herokuapp.com/dash/v1/articles");
  const posts = await res.json();
  return { props: { posts } };
}

export default Home;
