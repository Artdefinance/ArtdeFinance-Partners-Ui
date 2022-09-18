import React, { useRef, useState } from 'react';
import { FileDrop } from 'react-file-drop';
import './FileDragDrop.scss';

export default function FileDragDrop() {
  const inputRef = useRef();
  const [filenames, setNames] = useState([]);

  const fileHandler = (files) => {
    const extension = files[0].name.split('.')[1]?.toLowerCase();

    if (extension !== undefined) {
      const fNames = Object.keys(files).map((name) => {
        const temp = 'string';
        return {
          name: files[name].name,
          icon: files[name].name.split('.')[1]?.toUpperCase().trim(),
          size: files[name].size,
        };
      });
      setNames((prev) => [...prev, fNames].flat());
    } else {
      alert('file type not supported');
    }
  };

  const filePicker = () => {
    inputRef.current.click();
  };

  const imgStyle2 = {
    backgroundImage: 'url(/assets/images/component/img_file.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="drag-drop_container">
      <div className="drag-drop">
        <FileDrop onTargetClick={filePicker} onDrop={(f) => fileHandler(f)}>
          <div className="drag-drop__content">
            <p className="drag-drop__title">
              <span>Select a file</span>
              or Drag and Drop here (Up to 1, 50 MB)
            </p>
            <p className="drag-drop__text">
              Supports : Select between a JPG, GIF, SVG, PNG. The File size
              limit is up to 50 MB.
            </p>
          </div>
          <input
            accept=".xls, .png, .psd, .doc, .docx, .ai, .pdf, .jpg, .jpeg"
            value=""
            style={{ visibility: 'hidden', opacity: 0 }}
            ref={inputRef}
            multiple="multiple"
            type="file"
            onChange={(e) => fileHandler(e.target.files)}
          />
        </FileDrop>
      </div>
      <div>
        {filenames.map((file, i) => (
          <div className="drag-drop__item">
            <div className="drag-drop__box">
              <i style={imgStyle2} />
              <p>{file.name}</p>
              <span>
                (
                {file.size}
                KB
                )
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
