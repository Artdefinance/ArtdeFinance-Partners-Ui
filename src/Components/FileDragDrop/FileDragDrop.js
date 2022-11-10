/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { FileDrop } from 'react-file-drop';
import './FileDragDrop.scss';
import Icons from '../Icons/Icons';

export default function FileDragDrop({ boxTypeClass }) {
  const inputRef = useRef();
  const [filenames, setNames] = useState([]);

  const onClickDelete = (targetFile) => () => {
    setNames(filenames.filter((file) => file !== targetFile));
  };

  const fileHandler = (files) => {
    const extension = files[0].name.split('.')[1]?.toLowerCase();

    if (filenames.length === 0) {
      // 첫번째 드롭
      if (extension !== undefined) {
        const fNames = Object.keys(files).map((name, index) => {
          const temp = 'string';
          return {
            name: files[name].name,
            icon: files[name].name.split('.')[1]?.toUpperCase().trim(),
            size: files[name].size,
            number: index,
          };
        });
        setNames((prev) => [...prev, fNames].flat());
      }
    } else {
      const fNames = Object.keys(files).map((name, index) => {
        const temp = 'string';
        return {
          name: files[name].name,
          icon: files[name].name.split('.')[1]?.toUpperCase().trim(),
          size: files[name].size,
          number: filenames.length + index,
        };
      });
      setNames((prev) => [...prev, fNames].flat());
    }
  };

  const filePicker = () => {
    inputRef.current.click();
  };

  const fileContainer = {
    backgroundImage: 'url(/assets/images/component/img_upload_cloud.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const fileDefault = {
    backgroundImage: 'url(/assets/images/component/img_file.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const fileError = {
    backgroundImage: 'url(/assets/images/component/img_file_error.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div
      className={
        boxTypeClass === 'multiple_container'
          ? 'drag-drop_container multiple_container'
          : 'drag-drop_container'
      }
    >
      {/* <div className="drag-drop dropbox_disabled"> */}
      <div className="drag-drop">
        <FileDrop onTargetClick={filePicker} onDrop={(f) => fileHandler(f)}>
          <div className="drag-drop__content">
            <i style={fileContainer} className="drop_icon" />
            <p className="drag-drop__title">
              <span>Select a file</span>
              {' '}
              or Drag and Drop here (Up to 1, 50 MB)
            </p>
            <p className="drag-drop__text">
              Supports : Select between a JPG, GIF, SVG, PNG. The File size
              limit is up to 50 MB.
            </p>
          </div>
          <input
            value=""
            style={{ visibility: 'hidden', opacity: 0 }}
            ref={inputRef}
            multiple
            type="file"
            onChange={(e) => fileHandler(e.target.files)}
          />
        </FileDrop>
      </div>
      <div>
        {filenames.map((file) => (
          <div key={file.number}>
            <div className="drag-drop__item">
              <div className="drag-drop__box">
                <i style={fileDefault} />
                <p>{file.name}</p>
                <span>
                  (
                    {file.size}
                  KB )
                </span>
                <button type="button" className="preview">
                  Preview
                </button>
              </div>
              <button type="button" className="trash" onClick={onClickDelete(file)}>
                <Icons shape="trash" color="#BBBBBB" />
                <span className="a11y">휴지통으로 이동</span>
              </button>
            </div>
            {/* <div className="drag-drop__item error__item">
              <div className="drag-drop__box">
                <i style={fileError} />
                <p>{file.name}</p>
                <span>
                  (
                  {file.size}
                  KB
                  )
                </span>
              </div>
              <button type="button" className="delete">
                <Icons shape="close-circle-bk" />
                <span className="a11y">삭제</span>
              </button>
              <p className="error_text">Something went wrong. Try uploading your document again.</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
