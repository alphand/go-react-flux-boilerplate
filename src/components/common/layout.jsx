var React = require('react');

var layout = React.createClass({

  render: function() {
    return (
      <div className="layout">
        <div className="main-wrapper">
          {this.props.children}
          <div className="footer-push"></div>
        </div>
        <div className="footer">
        just some simple footer
        </div>
      </div>
    );
  }

});

module.exports = layout;