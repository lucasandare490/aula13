import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const DishDetail = ({ dish }) => {
  // Renderiza os detalhes do prato em um Card
  const renderDish = (dish) => {
    if (dish) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            <CardText>
              <strong>Preço:</strong> R$ {dish.price}
            </CardText>
            <CardText>
              <strong>Ingredientes:</strong>
              <ul>
                {dish.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </CardText>
          </CardBody>
        </Card>
      );
    }
    return <div></div>;
  };

  // Renderiza os comentários em uma lista não estilizada
  const renderComments = (comments) => {
    if (comments) {
      return (
        <div>
          <h4>Comentários</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author}, {new Date(comment.date).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <div></div>;
  };

  if (!dish) return <div></div>;

  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">{renderDish(dish)}</div>
      <div className="col-12 col-md-5 m-1">{renderComments(dish.comments)}</div>
    </div>
  );
};

export default DishDetail;