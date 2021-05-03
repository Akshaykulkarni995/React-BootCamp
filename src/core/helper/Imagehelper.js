import React from "react";
import { API } from "../../backend";


const Imagehelper = ({ product }) => {
  const imageurl = product ? `${API}/product/photo/${product._id}` : `logo512.png`

  return (
    <div>
      <div className="rounded border border-success p-2">
        <img
          src={imageurl}
          alt="photo"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          className="mb-3 rounded"
        />
      </div>
    </div>

  );
}

export default Imagehelper;