module.exports = (mongoose) => {
  const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
      {
        fname: String,
        lname: String,
        phone: Number,
        clg: String,
      },
      { timestamps: true }
    )
  );

  return Tutorial;
};
