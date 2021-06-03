const React = require("react");

class BeastForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.beastToRelease = { value: this.props.beastName }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    unshackle(this.beastToRelease.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id='beastForm'>
        <input id='beastToRelease' type='hidden' />
        <button id='submit' type='submit'>Unshackle the beast</button>
      </form>
    )
  }
}