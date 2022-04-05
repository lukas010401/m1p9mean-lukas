module.exports = mongoose => {
    const Livreur = mongoose.model(
      "livreur",
      mongoose.Schema(
        {
          nom: String,
          telephone: String
        },
        { timestamps: true }
      )
    );
    return Livreur;
  };