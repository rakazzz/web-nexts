
import { prisma } from "@/../route";
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link';
import InputItem from "./inputItem";
import { google } from 'googleapis';
import Docxtemplater from 'docxtemplater';
import fs from 'fs';

// Initialize the Google Drive API client
const drive = google.drive({
  version: 'v3',
  auth: '35552792444-1oauq8bdotdbf1i817mce9hdgiqcl0q1.apps.googleusercontent.com',
});
 
async function generateWordDocument(data: FormData, templatePath: string) {
  try {

    const templateContent = fs.readFileSync(templatePath);
    const doc = new Docxtemplater(templateContent);

    doc.setData({
      name: data.get('name') as string,
      tempatlahir: data.get('tempatlahir') as string,
      tgl: data.get('tgl') as string,
      gender: data.get('gender') as string,
      alamat: data.get('alamat') as string,
      duration: data.get('duration') as string,
      jabatan: data.get('jabatan') as string,
    });

    doc.render();
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `output_${timestamp}.docx`;
    const buffer = doc.getZip();
    await drive.files.create({
      requestBody: {
        name: fileName,
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        parents: ['1husVE9suJ9IfetTcPNly9cmPMye9bSzQ'],
      },
      media: {
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        body: buffer,
      },
    });

    console.log(`Word document generated and uploaded to Google Drive as ${fileName}.`);
  } catch (error) {
    console.error('Error:', error);
  }
}

export default async function Page() {
  async function addData(dataX: FormData) {
    'use server'
    try {
      const templatePath = 'direktorinya woi';

      await prisma.suketjabatan.create({
        data: {
          name: dataX.get('name') as string,
          tempatL: dataX.get('tempatlahir') as string,
          tglL: dataX.get('tgl') as string,
          gender: dataX.get('gender') as string,
          alamat: dataX.get('alamat') as string,
          lamajabatan: dataX.get('duration') as string,
          jabatan: dataX.get('jabatan') as string,
        },
      });

      await generateWordDocument(dataX, templatePath)

      console.log('User input data added to the database.');

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
        <h1 className="font-bold">Surat Keterangan Jabatan</h1>
      </div>
      <form className="w-full max-w-lg mx-auto p-4" action={addData}>
        <InputItem />
        <button type="submit">Generate Certificate</button>
      </form>
    </div>
  );
}
 