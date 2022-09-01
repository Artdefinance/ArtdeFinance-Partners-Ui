import React from 'react';
import { FileUploader } from 'react-drag-drop-files';
import './FileDragDrop.scss';
import Icons from '../Icons/Icons';

const fileTypes = ['JPG', 'GIF', 'SVG', 'PNG'];

export default class FileDragDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  gotoTrash = () => {
    this.setState(() => ({
      file: '',
    }));
  };

  handleChange = (files) => {
    this.setState(() => ({
      file: files,
    }));
  };

  render() {
    const { file } = this.state;
    const imgStyle = {
      backgroundImage: 'url(/assets/images/component/img_upload_cloud.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    const imgStyle2 = {
      backgroundImage: 'url(/assets/images/component/img_file.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div className={file ? 'drag-drop active' : 'drag-drop'}>
        {file ? (
          <div className="drag-drop__item">
            <div className="drag-drop__box">
              <i style={imgStyle2} />
              <p>
                {`${file[0].name}`}
              </p>
              <span>
                (
                {`${(file[0].size / 1024).toFixed(2)}`}
                MB)
              </span>
              <button type="button" className="preview">Preview</button>
            </div>
            <button type="button" className="trash" onClick={this.gotoTrash}>
              <Icons shape="trash" color="#BBBBBB" />
              <span className="a11y">휴지통으로 이동</span>
            </button>
          </div>
        ) : (
          <>
            <FileUploader
              handleChange={this.handleChange}
              name="file"
              types={fileTypes}
              maxSize={150}
              multiple
            />
            <div className="drag-drop__content">
              <i style={imgStyle} />
              <p className="drag-drop__title">
                <span>Select a file</span>
                or Drag and Drop here (Up to 1, 50 MB)
              </p>
              <p className="drag-drop__text">
                Supports : Select between a JPG, GIF, SVG, PNG. The File size
                limit is up to 50 MB.
              </p>
            </div>
          </>
        )}
      </div>
    );
  }
}
