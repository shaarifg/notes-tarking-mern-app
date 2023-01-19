import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { deleteNote, setNotes } from "../../redux/actions/noteActions";
import axios from "axios";

import SendIcon from "@mui/icons-material/Send";

import "./main.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Share from "../Share";

export const Main = () => {
  const [share, setShare] = useState(false);
  const notes = useSelector((state) => state.allNotes.notes);
  console.log(notes);
  const [formData, setFormData] = useState({ note:'', title:'' });
  console.log(Object.keys(formData).length);
  const dispatch = useDispatch();
  console.log(formData);

  const handleChange = (e, id) => {
    console.log(e, id)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = async (index, id1) => {
    console.log(id1);
    await axios.delete(`http://localhost:3002/note/${id1}`).then((res) => {
      toast.success(res.data.message, {
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      dispatch(deleteNote(index));
    });
  };

  const handleShare = (note, title) => {};

  useEffect(() => {
    const fetchNotes = async () => {
      await axios
        .get(`http://localhost:3002/notes`)
        .then((response) => dispatch(setNotes(response.data.notes)))
        .catch((error) => console.log(error));
    };
    fetchNotes();
    // eslint-disable-next-line
  }, []);
  return (
    <main id="main" className="container">
      <div className="notes_card">
        {notes.length === 0 ? (
          <h2>Start taking your notes</h2>
        ) : (
          notes.map((note, index) => {
            return (
              <div key={index} className="note_item">
                <input type="text" name='title' value={
                  `{${Object.keys(formData).length}===0}` ? note.title : formData.title
                }
                onChange={(e)=>handleChange(e, note._id)}
                onClick={() => setFormData(note)} />
                <textarea
                  name="note"
                  cols="30"
                  rows="10"
                  value={
                    `{${Object.keys(formData).length}===0}` ? note.note : formData.note
                  }
                  onChange={(e)=>handleChange(e, note._id)}
                  onClick={() => setFormData(note)}
                ></textarea>
                <div className="buttons_wrapper">
                  <button
                    onClick={() => handleDelete(index, note._id)}
                    title="DELETE"
                    className="del_btn"
                  >
                    <DeleteIcon
                      sx={{ fontSize: "1.5rem", verticalAlign: "middle" }}
                    />
                  </button>
                  <Share props={note} />
                </div>
              </div>
            );
          })
        )}
        <ToastContainer />
      </div>
    </main>
  );
};
