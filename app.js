//const heading=React.createElement("h1",{},"hello world form react");
      //  const root= ReactDOM.createRoot(document.getElementById("root"));
      //  root.render(heading)



const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Hi I'am h1 tag"),
            React.createElement('h2',{},"hi I'am h2 tag")
        ]
    )
)

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)
