import axios from "axios";

export default function uploadImageHundler(e) {
  var formdata = new FormData();
  formdata.append("image", e.target.files[0]);
  axios.post("https://api.imgur.com/3/image/", formdata , { headers: {"Authorization" : "Client-ID 7e59e44c6994107"}})
    .then(result => console.log(result.data.data.link))
    .catch(error => console.log('error', error));
}
