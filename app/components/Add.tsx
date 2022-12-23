import React,{useState} from 'react'
import axios from 'axios';
const AddProductAdmin = () => {
 const [name, setname] = useState("");
 const [price, setprice] = useState(0);
 const [categorie, setcategorie] = useState('');
 const [anime, setanime] = useState('');
 const [image, setimage] = useState('');
 const [description, setdescription] = useState("");
 const [size, setsize] = useState([]);
 const [stock, setstock] = useState(0);


 const [fileInputState, setFileInputState] = useState("");
 const [previewSource, setPreviewSource] = useState("");
 const [selectedFile, setSelectedFile] = useState();
console.log(fileInputState);

 const handleImageUpload = (e) => {
   const file = e.target.files[0];
   previewFile(file);
   setSelectedFile(URL.createObjectURL(file));
   setFileInputState(e.target.value);
 };

 const [imageUploader, setImageUploader] = useState({ current: null });

 const previewFile = (file) => {
   const reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onloadend = () => {
     setPreviewSource(reader.result);
   };
 };

 const add = (para:any) => {
  
   axios
     .post("http://localhost:3000/api/product",para)
     .then((res) => alert('added'))

     .catch((err) => console.log(err));
 };


  return (
    <>
      <div className="row">
        <div
          className="col-4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: "none",
            }}
          />
          <div className="" onClick={() => imageUploader.current.click()}>
            <img alt="not" className="" src={previewSource} />
          </div>
        </div>
        <div className="col-7">
          <div className="input-group mb-3 row">
            <input
              onChange={(e) => setname(e.target.value)}
              style={{
                padding: "8px",
                fontSize: "16px",
                borderWidth: "1px",
                borderColor: "#000",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                borderStyle: "solid",
                borderRadius: "15px",
              }}
              type="text"
              className="form-control"
              placeholder="product name"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3 row">
            <input
              onChange={(e) => setprice(Number(e.target.value))}
              style={{
                padding: "8px",
                fontSize: "16px",
                borderWidth: "1px",
                borderColor: "#000",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                borderStyle: "solid",
                borderRadius: "15px",
              }}
              type="number"
              className="form-control"
              placeholder="price"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3 row">
            <input
              onChange={(e) => setcategorie(e.target.value)}
              style={{
                padding: "8px",
                fontSize: "16px",
                borderWidth: "1px",
                borderColor: "#000",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                borderStyle: "solid",
                borderRadius: "15px",
              }}
              type="text"
              className="form-control"
              placeholder="categorie"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>{" "}
          <div className="input-group mb-3 row">
            <input
              onChange={(e) => setanime(e.target.value)}
              style={{
                padding: "8px",
                fontSize: "16px",
                borderWidth: "1px",
                borderColor: "#000",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                borderStyle: "solid",
                borderRadius: "15px",
              }}
              type="text"
              className="form-control"
              placeholder="anime"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>{" "}
          <div className="input-group mb-3 row">
            <input
              onChange={(e) => setdescription(e.target.value)}
              style={{
                padding: "8px",
                fontSize: "16px",
                borderWidth: "1px",
                borderColor: "#000",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                borderStyle: "solid",
                borderRadius: "15px",
              }}
              type="text"
              className="form-control"
              placeholder="description"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>{" "}
          <div className="input-group mb-3 row">
            <input
              onChange={(e) => setsize([e.target.value])}
              style={{
                padding: "8px",
                fontSize: "16px",
                borderWidth: "1px",
                borderColor: "#000",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                borderStyle: "solid",
                borderRadius: "15px",
              }}
              type="text"
              className="form-control"
              placeholder="size"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>{" "}
          <div className="input-group mb-3 row">
            <input
              onChange={(e) => setstock(Number(e.target.value))}
              style={{
                padding: "8px",
                fontSize: "16px",
                borderWidth: "1px",
                borderColor: "#000",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                borderStyle: "solid",
                borderRadius: "15px",
              }}
              type="number"
              className="form-control"
              placeholder="stock"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-9"></div>
        <div className="col-3">
          <button
            className="btn btn-outline-success"
            onClick={() =>
              add({
                name,
                price,
                categorie,
                anime,
                image: fileInputState,
                description,
                size,
                stock,
              })
            }
          >
            add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddProductAdmin