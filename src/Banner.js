var Icon=React.createClass({
  render: function(){
    return (
      <img src={this.props.src} height={this.props.ht} className="icon" alt="icon" />
      )
  }
});
var Banner=React.createClass({
  render: function() {
    return (
      <div id="banner">
          <Icon src="flogo.svg" ht="130"/>
        <h2>FIHM Admin Page</h2>
      </div>
    );
  }
});