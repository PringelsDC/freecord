// pages/api/upload.js
import aws from 'aws-sdk';

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export default async (req, res) => {
  if (req.method === 'POST') {
    const { file } = req.body;

    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: file.name,
      Body: file.data,
      ContentType: file.type,
    };

    try {
      const data = await s3.upload(params).promise();
      res.status(200).json({ url: data.Location });
    } catch (err) {
      res.status(500).json({ error: 'Error uploading file' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
