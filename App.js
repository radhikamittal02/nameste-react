const heading = React.createElement( "div", {"id":"parent"},[
    React.createElement("h1", {"id":"heading"}, "hello world from React!"),
    React.createElement("h1", {"id":"heading"}, "hello world from React cfdg!")
]);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);