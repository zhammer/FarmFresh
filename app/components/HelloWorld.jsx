var React = require('react');

function Hello () {
    return (
        <div>
            Hello World!
        </div>
    )
}

var HelloWorld = React.createClass({
    render: function () {
        return (
            <Hello />
        )
    }
});

module.exports = HelloWorld;