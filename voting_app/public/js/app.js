const ProductList = () => {
  const products = Seed.products.sort((a, b) => b.votes - a.votes);

  const productComponents = products.map((product) => (
    <Product
      key={'product-' + product.id}
      id={product.id}
      title={product.title}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
    />
  ));
  return <div className="ui unstackable items">{productComponents}</div>;
};

const Product = (props) => {
  return (
    <div className="item">
      <div className="image">
        <img src={props.productImageUrl} />
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a>
            <i className="large caret up icon" />
          </a>
          {props.votes}
        </div>
        <div className="description">
          <a href={props.url}>{props.title}</a>
          <p>{props.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img className="ui avatar image" src={props.submitterAvatarUrl} />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<ProductList />, document.getElementById('content'));
