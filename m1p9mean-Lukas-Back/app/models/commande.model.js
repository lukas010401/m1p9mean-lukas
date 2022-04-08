const platModel = require("./plat.model");

module.exports = mongoose => {
    const Commande = mongoose.model(
      "commande",
      mongoose.Schema(
        {
          plat: platModel,
        //   adresse: String
        },
        { timestamps: true }
      )
    );
    return Commande;
  };