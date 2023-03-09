import val from "validate.js";

const Validate = (string) => {
  var constraints = {
    string: {
      presence: {
        allowEmpty: false,
        message: "cannnot be empty",
      },
    },
  };
  return val({ string: string }, constraints);
};

export default Validate;
