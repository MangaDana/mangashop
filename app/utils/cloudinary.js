const cloudinary = require("cloudinary-core")

var cl = new cloudinary.Cloudinary({ cloud_name: "dugewmeeh", secure: true });
console.log('hi');
export default cl;
