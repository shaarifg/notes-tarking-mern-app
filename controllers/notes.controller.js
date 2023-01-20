const notesModel = require("../models");

// Function to create a note
const createNote = (noteData) => {
  return new Promise((reject, resolve) => {
    const newNote = new notesModel();
    newNote.title = noteData.title;
    newNote.note = noteData.note;
    newNote.date = noteData.date
    newNote.save((error, data) => {
      if (error) {
        reject({ message: "Something went wrong", status: 501 });
      } else {
        resolve({ message: "Note Taken Successfuly", status: 200, data:data });
      }
    });
  });
};

// Function to get all the notes
const getAllNotes = () => {
  return new Promise(async (reject, resolve) => {
    const notes = await notesModel.find();
    if (!notes) {
      reject({ message: "Claims not found 🎈", status: 500 });
    } else {
      resolve({
        message: "FOUND ALL claims successfully ✔😊",
        status: 201,
        notes: notes,
      });
    }
  });
};

//Function to update the note
const updateNote = (claimId, updateData) => {
  console.log(updateData);
  return new Promise(async (reject, resolve) => {
    const updatedNote = await notesModel.findByIdAndUpdate(claimId, {
      title: updateData.title,
      note: updateData.note,
    },{returnDocument: 'after'});
    if (!updatedNote) {
      reject({ message: "Claims not found", status: 500 });
    } else {
      resolve({
        message: "Claim is UPDATED successfully ✔😊",
        status: 201,
        data:updatedNote
      });
    }
  });
};

const deleteNote = (id) => {
  return new Promise(async (reject, resolve) => {
    const deletedNote = await notesModel.findByIdAndDelete(id);

    if (!deletedNote) {
      reject({ message: "Claim Not Found", status: 501 });
    } else {
      resolve({ message: "Note deleted Successfully", status: 200, data:deletedNote });
    }
  });
};

module.exports = {
  createNote,
  getAllNotes,
  deleteNote,
  updateNote
};
