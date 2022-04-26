import React ,{ useState } from 'react'
import aws from 'aws-sdk'
// import { uploadFile } from 'react-s3'
import shortid from 'shortid'

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET_NAME
const REGION = process.env.REACT_APP_S3_REGION_NAME
const ACCESS_KEY = process.env.REACT_APP_S3_ACCESS_KEY
const SECRET_ACCESS_KEY = process.env.REACT_APP_S3_SECRET_ACCESS_KEY


console.log(process.env)

// const config = {
//     bucketName: S3_BUCKET,
//     region: REGION,
//     accessKeyId: ACCESS_KEY,
//     secretAccessKey: SECRET_ACCESS_KEY,
// }

aws.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY
})

const myBucket = new aws.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

// const myBucket = new aws.S3({
//   S3_BUCKET,
//   REGION,
//   ACCESS_KEY,
//   SECRET_ACCESS_KEY,
// });
const UploadImage = () => {

  const [selectedFile, setSelectedFile] = useState(null)
  console.log(process.env)
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const handleUpload = async (file) => {

    const fileType = file.type.split('/')[1]
    const imageName = `${file.name}_${shortid.generate()}.${fileType}`
    const params = {
      ACL: 'public-read',
      Key: imageName,
      ContentType: file.type,
      Body: file,
    }
    console.log('file', file)
    // uploadFile(file, config)
    //     .then(data => console.log(data))
    //     .catch(err => console.error(err))
    return new Promise((resolve, reject) => {
      myBucket.putObject(params, function checkErr(err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.request.params);
        }
      });
    });
  }

  return <div>
      <div>React S3 File Upload</div>
      <input type="file" onChange={handleFileInput}/>
      <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
  </div>
}

export default UploadImage;