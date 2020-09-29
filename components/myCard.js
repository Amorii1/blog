import Link from "next/link";
import moment from "moment";
const MyCard = ({article}) => {
  return (
    <>
      <div className="blog-item">
        <div className="img">
          <img src={article.image} />
        </div>
        <h4>{article.title}</h4>
        <small>By {article.athor}</small>
        <div className="card-footer">
          <Link href= {`article/${article.id}`}>
            <a>Read article</a>
          </Link>
          <span>{moment(article.createdAt).format("ll")}</span>
        </div>
      </div>
    </>
  );
};
export default MyCard;
