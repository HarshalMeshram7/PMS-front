// THIS IS SAMPLE CODE ONLY - NOT MEANT FOR PRODUCTION USE
import { BlobServiceClient} from '@azure/storage-blob';

const sasToken = "sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2022-11-29T18:59:15Z&st=2022-10-13T10:59:15Z&spr=https,http&sig=%2Bw2Bn%2Bipnm0i%2FtzXgEYsGnCTuqFIYSSAl73nE9drszc%3D"; // Fill string with your SAS token
const containerName = `data1`;
const storageAccountName = "samsmyhtp"; // Fill string with your Storage resource name

// Feature flag - disable storage feature to app if not configured
export const isStorageConfigured = () => {
  return !((!storageAccountName || !sasToken));
};

// return list of blobs in container to display
const getBlobsInContainer = async (containerClient) => {
  const returnedBlobUrls = [];

  // get list of blobs in container
  // eslint-disable-next-line
  for await (const blob of containerClient.listBlobsFlat()) {
    // if image is public, just construct URL
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }

  return returnedBlobUrls;
};


const createBlobInContainer = async (containerClient, file) => {
  
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(file.name);

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  // upload file
  await blobClient.uploadBrowserData(file, options);
 };

const uploadFileToBlob = async (file) => {
  if (!file) return [];

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );
  // get Container - full public read access
  const containerClient = blobService.getContainerClient(containerName);

  // upload file
  await createBlobInContainer(containerClient, file);

  // get list of blobs in container
  return getBlobsInContainer(containerClient);
};
// </snippet_uploadFileToBlob>

export const deleteBlob = async (blobName) => {

  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );
  // get Container - full public read access
  const containerClient = blobService.getContainerClient(containerName);

  // containerClient.uploadBlockBlob("/abc")
  containerClient.deleteBlob(`${blobName}`)

}

// priview
export const handlePriview = (fileName) => {
  return `https://samsmyhtp.blob.core.windows.net/data1/${fileName}`;
};

// retrive file name
export const getFileName = (url ) =>{
  if(url == "" ){
    return url
  }
  if(url == null ){
    return url
  }
  if(url == undefined ){
    return url
  }
  return url?.substring(url.lastIndexOf('/')+1)
}

export default uploadFileToBlob;

