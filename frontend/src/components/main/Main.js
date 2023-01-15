import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { deleteNote } from "../../redux/actions/noteActions";

import "./main.css";

const initialValues = {
  title: "",
  note: "",
};
export const Main = () => {
  const notes = useSelector((state) => state.allNotes.notes);
  console.log(notes);
  const [formData, setFormData] = useState(initialValues);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (id) => {
    console.log("Sja");
    console.log(id);
    dispatch(deleteNote(id));
  };
  return (
    <main id="main" className="container">
      <div className="notes_card">
        {notes.length === 0 ? (
          <h2>Start taking your notes</h2>
        ) : (
          notes.map((note, index) => {
            return (
              <div key={index} className="note_item">
                <input type="text" value={note.title} onChange={handleChange} />
                <textarea
                  name="textarea"
                  id=""
                  cols="30"
                  rows="10"
                  value={note.note}
                  onChange={handleChange}
                ></textarea>
                <div className="button_wrapper">
                  <button
                    onClick={() => handleDelete(index)}
                    title="DELETE"
                    className="del_btn"
                  >
                    <DeleteIcon
                      sx={{ fontSize: "2rem", verticalAlign: "middle" }}
                    />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
};
