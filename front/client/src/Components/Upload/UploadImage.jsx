import { useState } from "react";

const UploadImage = ({ handleChangeImage, user }) => {
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState("");

  const upload = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "staffsphere");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtqhqhc9e/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    console.log(file.secure_url);
    handleChangeImage(file.secure_url);
  };

  return (
    <div className="w-60  lg:ml-4  flex gap-4 items-end justify-start text-start">
      <div className="">
        <h3 className="pb-4">Image</h3>
        <label className="bg-white p-2 rounded cursor-pointer" htmlFor="image">
          Upload Image
        </label>
        <input
          className="hidden"
          type="file"
          name="file"
          id="image"
          onChange={upload}
        />
        {/* <img
          src={user}
          alt="profilepic"
          className="rounded-md border-none shadow-none text-transparent w-auto h-10 object-cover"
        /> */}
      </div>
    </div>
  );
};

export default UploadImage;
