import { createWriteStream } from 'fs';
import * as mkdirp from 'mkdirp';
import * as shortid from 'shortid';

const uploadDir = './uploads';

mkdirp.sync(uploadDir);

const storeUpload = async ({ stream, filename }) => {
  const id = shortid.generate();
  const path = `${uploadDir}/${id}.${filename.split('.').reverse()[0]}`;
  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ id, path }))
      .on('error', reject)
  );
};

export const processUpload = async upload => {
  const { createReadStream, filename, mimetype, encoding } = await upload;
  const stream = createReadStream();
  const { id, path } = await storeUpload({ stream, filename });
  return { id, filename, mimetype, encoding, path };
};
