const express = require("express");
const router = express.Router();
const HotelSchemaData = require("../model/hotel");

//POST
router.post("/", async (request, response) => {
  try {
    const data = request.body;
    const newHotelData = new HotelSchemaData(data);
    const responsePostData = await newHotelData.save();
    response.status(200).json(responsePostData);
    console.log("Data POST");
  } catch (e) {
    response.status(500).json("Internal Error Data Is Not Post...");
  }
});

//GET
router.get("/", async (request, response) => {
  try {
    const data = request.body;
    const responseGetData = await HotelSchemaData.find(data);
    response.status(200).json(responseGetData);
    console.log("GET Data..");
  } catch (e) {
    response.status(500).json("Internal Error Data Is Not Get...");
  }
});

//PUT
router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = request.body;

    const responsePutData = await HotelSchemaData.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    response.status(200).json(responsePutData);
    console.log("Updated Data");
  } catch (e) {
    response.status(500).json("Internal Error..");
  }
});

//DELETE
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const responseDeleteData = await HotelSchemaData.findByIdAndDelete(id);
    response.status(200).json(responseDeleteData);
    console.log("Delete Data");
  } catch (e) {
    response.status(500).json("Internal Server Error..");
  }
});

module.exports = router;
