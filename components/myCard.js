import Link from "next/link";
import moment from "moment";
const MyCard = (props) => {
  return (
    <>
      <div className="blog-item">
        <div className="img">
          <img src={props.article.image} />
        </div>
        <h4>{props.article.title}</h4>
        <small>By {props.article.athor}</small>
        <div className="card-footer">
          <Link href= {`article/${props.article.id}`}>
            <a>Read article</a>
          </Link>
          <span>{moment(props.article.createdAt).format("ll")}</span>
        </div>
      </div>
    </>
  );
};
export default MyCard;
