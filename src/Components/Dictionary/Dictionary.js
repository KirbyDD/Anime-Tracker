import React, { Component } from "react";
import { fetchTerms } from "../../apiCalls";
import Term from "../Term/Term";
import "./Dictionary.scss";

export class Dictionary extends Component {
  constructor() {
    super();
    this.state = {}
  }

  async componentDidMount() {
    await fetchTerms()
      .then(result=> this.setState({terms: result.data}))
      .catch(error => error.message)
  }

  filterTermsByCat(category) {
    return this.state.terms.filter(term => term.attributes.category === category)
  }

  renderTerms(terms) {
    return terms.map(term => <Term {...term.attributes}/>);
  }

  render() {
    let generalTerms, relationshipTerms, animeCategoryTerms;
    if (this.state.terms) {
      generalTerms = this.renderTerms(this.filterTermsByCat('general'))
      relationshipTerms = this.renderTerms(this.filterTermsByCat('personality_relationships'))
      animeCategoryTerms = this.renderTerms(this.filterTermsByCat('anime_category'))
    }
    return (
      <section className="dictionary">
        <h2 className="title">Anime Community Dictionary</h2>
        <div className='i-box'>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fAUR9rRHpqo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen='true'
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4pBHb4s4zoM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="category">General Terms</h3>
        {generalTerms}
        <h3 className="category">Anime Category</h3>
        {animeCategoryTerms}
        <h3 className="category">Personality/Relationship Terms</h3>
        {relationshipTerms}
      </section>
    );
  }
}

export default Dictionary;
