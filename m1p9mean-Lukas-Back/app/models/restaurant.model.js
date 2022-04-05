module.exports = mongoose => {
    const Restaurant = mongoose.model(
      "restaurant",
      mongoose.Schema(
        {
          nom: String,
          adresse: String
        },
        { timestamps: true }
      )
    );
    return Restaurant;
  };