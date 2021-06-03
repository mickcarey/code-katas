const React = require("react");

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      wish: '',
      priority: 1
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.send(this.state);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='name' value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})} id='name' />
        <textarea id='wish' name='wish' value={this.state.wish} onChange={(e)=>this.setState({wish: e.target.value})}></textarea> 
        <select id='priority' value={this.state.priority} onChange={(e) => this.setState({priority: parseInt(e.target.value)})} name='priority'>
          <option value="1">Very Low</option>
          <option value="2">Low</option>
          <option value="3">Medium</option>
          <option value="4">High</option>
          <option value="5">Very High</option>
        </select>
        <button type="submit">Submit wish</button>
      </form>
    );
  }
};