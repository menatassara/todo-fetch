import React from "react";

var requestOptions = {
	method: "GET",
	redirect: "follow"
};

fetch(
	"https://assets.breatheco.de/apis/fake/todos/user/menatassara",
	requestOptions
)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log("error", error));

export default Todo;
