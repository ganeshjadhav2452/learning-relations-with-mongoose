const Staff = require("../model/staffModel");

module.exports = staffController = {
  createStaff: async (req, res) => {
    const { name, email } = req.body;

    try {
      const staff = await Staff.create({
        name,
        email,
      });
      await staff.save()
      return res.status(200).json({ message: "staff created successfully" });
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "sorry staff cannot be created" });
    }
  },
};
