import { ACTIONS } from "../constants/types";

const initialState = {
  notes: [
    {
      title: "Mohd Sharif",
      note: "My name is Mohammed Sharif and I am a Full Stack Software Developer. I specialize in building applications using the MERN stack, and have a great interest in frontend designing and development. My skills in problem solving and data structures & algorithms make me a valuable asset to any team. I am highly proficient in technologies such as Java, JavaScript, ExpressJs, ReactJs, Redux, HTML/CSS, Bootstrap, MaterialUI, and MongoDb. I am passionate about creating high-quality software and am always looking for new challenges to tackle. If you're looking for a skilled software developer, look no further than me. I would be happy to work on your next project and help bring your ideas to life.",
    },
  ],
};

export const notesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_NOTE:
      return {
        ...state,
        notes: state.notes.concat([payload]),
      };
    case ACTIONS.DELETE_NOTE:
      return {
        notes: state.notes.filter((c, index) => index !== payload),
      };
    default:
      return state;
  }
};
