class Button extends React.Component {
    render() {
        return (
            <a className="btn btn-default">I am a button! Click me!</a>
        );
    }
}

class Link extends React.Component {
    render() {
        return (
            <div>
              <a href="http://google.com" onClick={this.handleClick} data-link="Google">Google</a>
              <br/>
              <a href="http://facebook.com" onClick={this.handleClick} data-link="Facebook">Facebook</a>
            </div>
        );
    }

    handleClick(e) {
        e.preventDefault();

        alert("You clicked " + e.target.dataset.link);
    }
}

class LinkList extends React.Component {
    render() {
        return (
            <ul>
              <LinkListItem text="turtles."/>
            </ul>
        );
    }
}

class LinkListItem extends React.Component {
    render() {
        return (
            <li>
              {this.props.text}
            </li>
        );
    }
}

class Likes extends React.Component {
    render() {
        return (
            <div>
              <LikesListWrapper>
                <LikesListItem text="turtles"/>
              </LikesListWrapper>
            </div>
        );
    }
}

class LikesListWrapper extends React.Component {
    render() {
        return (
            <ul>
              { this.props.children }
            </ul>
        );
    }
}

class LikesListItem extends React.Component {
    render() {
        return (
            <li>
              {this.props.text}
            </li>
        );
    }
}

class LikeComponent extends React.Component {
    // getInitialState seems not work in class syntax
    // See https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
    constructor(props) {
        super(props);
        this.state = {response: ""};
    }

    render() {
        return (
            <div>
              Do you like fish sticks?

              <br/><br/>

              Response: I {this.state.response || "_____"} fishsticks.

              <br/><br/>

              <a className="btn btn-success" onClick={this.handleLike.bind(this)}>I like it.</a>
              <a className="btn btn-danger" onClick={this.handleDislike.bind(this)}>I dislike it.</a>
            </div>
        );
    }

    handleLike(e) {
        e.preventDefault();

        this.setState({
            response: "like"
        });
    }

    handleDislike(e) {
        e.preventDefault();

        this.setState({
            response: "dislike"
        });
    }
}

React.initializeTouchEvents(true);

var target = document.querySelector("section");
// React.render(<Button/>, document.querySelector("section"));
// React.render(<Link/>, document.querySelector("section"));
// React.render(<LinkListItem/>, document.querySelector("section"));
// React.render(<Likes/>, document.querySelector("section"));
React.render(<LikeComponent/>, target);
