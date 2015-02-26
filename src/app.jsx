var React = require('react');
var Layout = require("./components/common/layout.jsx")

var app = React.createClass({

  render: function() {
    return (
      <Layout>
        <h1> Hai Dunia keep now is good for dev! </h1>
      </Layout>
    );
  }

});
module.exports = app;