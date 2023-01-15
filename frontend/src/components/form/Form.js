import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../redux/actions/noteActions";
import AddIcon from "@mui/icons-material/Add";

import "./form.css";
const initialValues = {
  title: "",
  note: "",
};

const Form = () => {
  const notes = useSelector((state) => state.allNotes.notes);
  // console.log(notes);
  const [formData, setFormData] = useState(initialValues);

  const dispatch = useDispatch();

  const handleAddNote = (e) => {
    e.preventDefault();
    localStorage.setItem("notes", JSON.stringify(notes));
    if (formData.title.length > 0) {
      dispatch(addNote(formData));
      setFormData(initialValues);
    } else {
      alert("Please Enter Title");
    }
    // console.log("Sharif");
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form_wrapper container">
      <form action="" className="input_form" onSubmit={handleAddNote}>
        <div className="title_input">
          <input
            type="text"
            placeholder="Enter Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="textarea">
          <textarea
            name="note"
            id=""
            value={formData.note}
            onChange={handleChange}
            placeholder="Enter Your Notes Here"
          ></textarea>
        </div>
        <button type="submit" className="add_btn" title="ADD NOTE">
          <AddIcon sx={{ fontSize: "2rem", verticalAlign: "middle" }} />
        </button>
      </form>
    </div>
  );
};

export default Form;
