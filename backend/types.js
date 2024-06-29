const zod = require('zod');

const createUser = zod.object({
  username: zod.string().min(1, "Username is required"),
  email: zod.string().email("Invalid email format"),
  password: zod.string().min(6, "Password must be at least 6 characters long")
});

const signInSchema = zod.object({
  username :zod.string().min(1, "Username is required"),
   password: zod.string().min(6, "Password must be at least 6 characters long")
})

const createProfile = zod.object({
      basicinformation: zod.array(),
    hardskills: zod.array(),
    softskills: zod.array(),
    interest: zod.array(),
    qualification: zod.string(),
    ctc: zod.number()
})
module.exports = {
  createUser,
  signInSchema,
  createProfile
};
