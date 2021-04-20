import React from 'react';
import {useDropzone} from 'react-dropzone';
import { dropzone } from './styles';
import ButtonPay from '../button/buttonPay';
import IconHello from '../../assets/img/icon-hello.svg'


function AcceptMaxFiles(props) {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({    
    maxFiles:1, 
    accept: 'image/jpeg, image/png'
  });

  const files = acceptedFiles.map(file => (
    <div key={file.path} className="effectDiv alert fade show">
      <div className="row">
      <div className="col-md-12 text-center">
        <img src={IconHello} className="mb-3" alt=""/>
        <h4 className="effectDiv__title">Hello</h4>
      </div>
      <div className="col-md-12 text-center">
       <p>{file.path} - {file.size}</p> 
      </div>
      <div className="col-md-12 text-center">
        <ButtonPay />
      </div>
       </div>
    </div>
  ));

  return (
    <section className="container p-0 mt-2">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        {files}
      </aside>
    </section>
  );
}

export default AcceptMaxFiles;