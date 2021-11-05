const url = "http://localhost:3004/todolist";

export async function getTodos() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function addTodo(taskName) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        task: taskName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    alert("Error when adding a task");
  }
}

export async function deleteTodo(todoId) {
  try {
    const response = await fetch(`${url}/${todoId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    alert("Failed to delete task");
  }
}

export async function updateTodo(updatedName, id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: Number(id),
        task: updatedName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    alert("Update Failed!");
  }
}
