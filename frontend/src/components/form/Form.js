import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/actions/noteActions";
import AddIcon from "@mui/icons-material/Add";

import "./form.css";
import axios from "axios";
const initialValues = {
  title: "",
  note: "",
};

const Form = () => {
  const [formData, setFormData] = useState(initialValues);
  const dispatch = useDispatch();

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (formData.title.trim().length > 0) {
      await axios.post(`http://localhost:3002/notes`, {
        title:formData.title.trim(),
        note:formData.note.trim()
      });
      dispatch(addNote({
        title:formData.title.trim(),
        note:formData.note.trim()
      }));
      setFormData(initialValues);
    } else {
      alert("Please Enter Title");
    }
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
