import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let List = localStorage.getItem("list");
  if (List) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(null);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      //display alert
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      //deal with edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "succes", "value Changed");
    } else {
      //show alert
      showAlert(true, "success", "item added ti list");
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  //>>>>>>>>>>>>AlertShowing destructuring
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  //>>>>>>>>>>>>.to delete whole list
  const clearList = () => {
    showAlert(true, "danger", "empty listy");
    setList([]);
  };

  //>>>>>>>>>>>>>to delete specific item
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };

  //>>>>>>>>>>>editing item
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  //>>>>>>Local Storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3> Grocery Bud </h3>

        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. count Money"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className="grocery-container">
          <List removeItem={removeItem} editItem={editItem} items={list} />
          <button type="submit" onClick={clearList} className="clear-btn">
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
