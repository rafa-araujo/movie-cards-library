import React from "react";
import PropType from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, /*rating,*/ imagePath } } = this.props;
    /*
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    */
    return (
      <div>
        <img src={ imagePath } alt={ `${title}` }/>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        
      </div>
    )
  }
}

MovieCard.propTypes = {
  movie: PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    rating: PropType.number,
    imagePath: PropType.string,
}).isRequired,
};

export default MovieCard;
