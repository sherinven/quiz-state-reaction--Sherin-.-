import React, { useState } from "react";

function TodoApp() {
    // State management
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

  // Handle input change (controlled input)
    const handleInputChange = (e) => {
    setInputValue(e.target.value);
    };

  // Add todo
    const handleAddTodo = () => {
    if (inputValue.trim() === "") return; // Prevent empty todos
    const newTodo = {
      id: Date.now(), // unique key
        text: inputValue,
    };
    setTodos([...todos, newTodo]); // update state immutably
    setInputValue(""); // clear input
    };

  // Delete todo
    const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    };

  // Handle Enter key
    const handleKeyPress = (e) => {
    if (e.key === "Enter") {
        handleAddTodo();
    }
    };

    return (
    <div style={styles.container}>
      {/* Input + Add button */}
        <div style={styles.inputContainer}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type a new task..."
            style={styles.input}
        />
        <button
            onClick={handleAddTodo}
          disabled={!inputValue.trim()} // Bonus: disable when empty
            style={styles.addButton}
        >
            Add
        </button>
        </div>

      {/* Conditional rendering */}
        {todos.length === 0 ? (
        <p style={styles.emptyMessage}>No tasks yet</p>
        ) : (
        <ul style={styles.list}>
            {todos.map((todo) => (
            <li key={todo.id} style={styles.listItem}>
                <span>{todo.text}</span>
                <button
                onClick={() => handleDeleteTodo(todo.id)}
                style={styles.deleteButton}
                >
                Delete
                </button>
            </li>
            ))}
        </ul>
        )}
    </div>
    );
}

// Basic styling
const styles = {
    container: {
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
    },
    inputContainer: {
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
    },
    input: {
        flex: 1,
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        color: "#333",
        fontSize: "14px",
    },
    addButton: {
        padding: "8px 12px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
    },
    list: {
        listStyle: "none",
        padding: 0,
    },
    listItem: {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
        borderBottom: "1px solid #81c395",
        color: "#1d7bda",
        fontWeight: "500",
    },
    deleteButton: {
        backgroundColor: "#2e201f",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        padding: "4px 8px",
    },
    emptyMessage: {
        textAlign: "center",
        color: "#efb8b2",
        fontSize: "16px",
        fontStyle: "italic",
    },
    
};

export default TodoApp;