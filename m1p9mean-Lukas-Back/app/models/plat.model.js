module.exports = mongoose => {
    const Plat = mongoose.model(
      "plat",
      mongoose.Schema(
        {
          nom: String,
          description: String,
          prix: Number,
          image_url: String
        },
        { timestamps: true }
      )
    );
    return Plat;
  };