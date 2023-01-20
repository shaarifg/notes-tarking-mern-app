const express = require("express");
const router = express.Router();

const { createNote, updateNote, deleteNote, getAllNotes } = require("../controllers");

//Create a new Notes
router.post("/notes", (req, res) => {
  console.log(req.body);
  createNote(req.body)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.status(error.status).send(error);
    });
});

router.get('/notes', (req, res)=>{
    getAllNotes()
    .then((response)=>{
        res.send(response)
    })
    .catch((error)=>{
        res.send(error)
    })
})

//*Update the claim status by its id
router.put("/note/:id", (req, res) => {
  // console.log(req.params.id);
  updateNote(req.params.id, req.body)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((error) => {
      res.status(error.status).send(error);
    });
});

//*Delete a claim by claim id
router.delete("/note/:id", (req, res) => {
  // console.log(req.params.id);
  deleteNote(req.params.id)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((error) => {
      res.status(error.status).send(error);
    });
});

module.exports = router;
