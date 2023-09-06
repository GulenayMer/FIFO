const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is Required'],
    },
    email: {
      type: String,
      unique: [true, 'Email is not unique'],
      required: [true, 'Email is Required'],
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: 'Email is not valid',
      },
    },
    password: {
      type: String,
      minLength: [8, 'Password Must Be 8 characters or more!'],
      required: [true, 'Password is Required!'],
    },
  },
  {
    timestamps: true, // created at, update at
  }
);

// we want to the user write their password twice when they register very first time,
// for example: password & confirm password
/*
	virtual is creating a property that does not persisted in the database, but
	can be accessed & used like a regular propoerty
 */

userSchema
  .virtual('confirmPassword')
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

// Validation
userSchema.pre('validate', function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Passwords need to match');
  }
  next();
});

//Hashing
userSchema.pre('save', async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 6);
    console.log('hashedPassword', hashedPassword);
    console.log('PASSWORD', this.password);
    //Replacing the password with the hashed password
    this.password = hashedPassword;
  } catch (error) {
    console.log('error while hashing', error);
  }
  next();
});

const model = mongoose.model('User', userSchema);
module.exports = model;
