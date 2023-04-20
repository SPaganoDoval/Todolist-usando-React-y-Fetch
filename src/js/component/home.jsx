import React from "react";
import "../../styles/ToDoList.css";

//include images into your bundle

import AddTasks from "./Addtasks.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="text-center">
                <h1 className="text-center mt-5">To Do List</h1>
            </div>
			<AddTasks/>

		</div>
	);
};

export default Home;
