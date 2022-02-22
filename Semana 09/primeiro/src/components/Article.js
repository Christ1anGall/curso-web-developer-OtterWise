const Article = (props) => {
  const { article } = props;

  return (
    <div className="article">
      <p>{article}</p>
    </div>
  );
};

export default Article;
