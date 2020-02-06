import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import { buildDirectory } from '../utils/paths';

export const login = async ({ email, password }) => {
  const { data: token } = await axios.post('https://us-central1-muil-io.cloudfunctions.net/auth/login', {
    email,
    password,
  });

  return token;
};

export const upload = async ({ token }) => {
  const bodyData = new FormData();
  const files = await fs.readdirSync(buildDirectory);

  files.forEach(file => bodyData.append('templateFile', fs.createReadStream(path.resolve(buildDirectory, file))));

  await axios.post('https://us-central1-muil-io.cloudfunctions.net/templates', bodyData, {
    headers: { ...bodyData.getHeaders(), Authorization: `Bearer ${token}` },
  });
};
