import Header from'../../components/header';
import Footer from'../../components/footer';
import { useEffect, useState } from 'react';
import moment from "moment";

const Article=(props)=>{
  // console.log(props.post.article);
  //For checking


  const [article, setArticle] = useState({});
  useEffect(() => {
    setArticle(props.post.article);
  }, []);
    return(
       <>
 
 <Header/>
    
    <main>
        <section className="container title-sec">
            <div>
            <h1>{article.title}</h1>
            <span>By {article.athor}</span>
             </div>
             <small>{moment(article.createdAt).format('ll')}</small>
       </section>

       <section className="cover container">
        <img src={article.image}/>
           <p className="dots">...</p>
        </section>
        <section className="box-info container">
            <h3>{article.title}</h3>
            <div className="caption" dangerouslySetInnerHTML={{__html: article.text}}/>

          </section>
    
   </main>

<Footer/>

       </>
    );
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//SERVER SIDE RENDERING for each page, depends on the id at the link

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://mashriq.herokuapp.com/dash/v1/article/${context.params.id}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { post:data } }
}

//STATIC GENERATION + makes each article ready in the out folder after building
// so its ready to read, no need to render

// export async function getStaticPaths(){
//     const res=await fetch("https://mashriq.herokuapp.com/dash/v1/articles");
//     const posts=await res.json();
//     const paths=posts.articles.map((post)=>({
//       params:{id:post.id.toString()},
//     }));
//     return{paths,fallback:false}
//   }
  
//   export async function getStaticProps({params}){
//     const res=await fetch(
//       `https://mashriq.herokuapp.com/dash/v1/article/${params.id}`
//     );
//     const post=await res.json();
//     return {props:{post}};
//   }
  
  export default Article;