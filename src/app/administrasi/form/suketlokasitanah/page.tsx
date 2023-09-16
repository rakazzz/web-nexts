import { prisma } from "@/../route";
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link';
import InputItem from "./inputItem";
import fs from 'fs';
import Docxtemplater from 'docxtemplater';
import fetch from 'node-fetch';

// Your Dropbox access token
const DROPBOX_ACCESS_TOKEN = 'sl.BmBRyceXLo_uITpWFgmnBxY_0J6maaHhC-3Zq6c_eKGFVCkBp_7ode-owhUz5tE9p3ludqJ898mYDCjh4-_wzVs8_NxRiyAipOWbsZLcGi78W2udfJiVzA4gWjtovWPlpfarYTUOAm5Z';

// Function to upload a file to Dropbox
async function uploadToDropbox(filePath: string, fileContent: any) {
  const url = `https://content.dropboxapi.com/2/files/upload`;
  const headers = {
    'Authorization': `Bearer ${DROPBOX_ACCESS_TOKEN}`,
    'Dropbox-API-Arg': JSON.stringify({
      path: `/Surat-Sipakamaseta/${filePath}`,
      mode: 'add',
      autorename: true,
      mute: false,
    }),
    'Content-Type': 'application/octet-stream',
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: fileContent,
  });

  if (response.status === 200) {
    console.log('File uploaded to Dropbox successfully.');
  } else {
    console.error('Error uploading file to Dropbox:', response.statusText);
  }
}

export default function Page() {
  async function addData(dataX: { get: any; }) {
    'use server'
    const path = require('path');
    try {
      const templateFilePath = path.join(process.cwd(), './public/templates/temp_suketlokasitanah.docx');
      const templateContent = fs.readFileSync(templateFilePath);

      const x = await generateWordDocument(dataX, templateContent);
      console.log('User ${x}');

      await prisma.suketlokasitanah.create({
        data: {
          namepemilik: dataX.get('namepemilik') as string,
          alamattanah: dataX.get('alamattanah') as string,
          luastanah: dataX.get('luastanah') as string,
          luasbangunan: dataX.get('luasbangunan') as string,
          dusun: dataX.get('dusun') as string,
          nosertiftanah: dataX.get('nosertiftanah') as string,
        },
      });

      console.log('User input data added to the database.');

    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function generateWordDocument(data: { get: (arg0: string) => string; }, templateContent: Buffer) {
    'use server'
    try {
      const doc = new Docxtemplater(templateContent);

      doc.setData({
        name: data.get('name') as string,
        alamattanah: data.get('alamattanah') as string,
        luastanah: data.get('luastanah') as string,
        luasbangunan: data.get('luasbangunan') as string,
        dusun: data.get('dusun') as string,
        nosertiftanah: data.get('nosertiftanah') as string,
      });

      doc.render();
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const fileName = `output_${timestamp}.docx`;
      const buffer = doc.getZip();

      await uploadToDropbox(fileName, buffer);

    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-row items-center">
        <Link href='/administrasi' passHref>
          <HiArrowSmLeft className="h-10 w-10 m-4" />
        </Link>
        <h1 className="font-bold">Surat Keterangan Lokasi Tanah</h1>
      </div>
      <form className="w-full max-w-lg mx-auto p-4" action={addData}>
        <InputItem />
        <button type="submit">Generate Certificate</button>
      </form>
    </div>
  );
}
