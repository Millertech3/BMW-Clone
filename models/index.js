import express from 'express'

import mongoose from "mongoose";
// const mongoose = require("mongoose");
mongoose
	.connect("mongodb://localhost:27017/bmwdat", {})

	.then(() => {
		console.log("Mongo Connection Open");
	})
	.catch((err) => {
		console.log("OHH No Error Encontered");
		console.log(err);
	});

// const userSchema = new mongoose.Schema({
// 	first: String,
// 	last: String,
// 	address: [{street: String, city: String, State: String, country: String}],
// });
const BmwSchema = new mongoose.Schema({
    carName: String,
    carBrand: String,
    modelYear: Number
})
//sighs
const User = mongoose.model("User", BmwSchema);
const makeUser = async () => {
	const u = new User({
	carName: 'AMG M6 BMW car',
    carBrand: 'BMW',
    modelYear: 2016
	});

	// u.address.push({
	// 	street: "123 Hogwatt st",
	// 	city: "Northumberland ",
	// 	state: "Nl",
	// 	country: "England",
	// });
	const res = await u.save();
	console.log(res);
};
makeUser();
