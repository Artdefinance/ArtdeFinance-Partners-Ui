import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import IconStyle from '../Icons/Icons';
import './UploadProgress.scss';

const BorderLinearProgress = withStyles(() => ({
  root: {
    height: 4,
    borderRadius: 2,
  },
  colorPrimary: {
    backgroundColor: '#f4f4f4',
  },
  bar: {
    borderRadius: 2,
    background: 'linear-gradient(90.01deg, #5f44ff 5.34%, #5e43ff 101.38%)',
    boxShadow: '0px 2px 5px rgba(95, 68, 255, 0.2)',
  },
}))(LinearProgress);

function UploadProgress({ fileName, fileSize, progress, onClickAbort }) {
  return (
    <div className="upload-progress">
      <div className="upload-progress__status">
        <span className="upload-progress__icon">
          <IconStyle
            shape="document-img-disabled"
            width={32}
            height={32}
            viewBox="0 0 32 32"
          />
        </span>
        <span className="upload-progress__name">{fileName}</span>
        <span className="upload-progress__size">{`(${fileSize})`}</span>
        <span className="upload-progress__progress">
          {`Uploading... ${progress}%`}
        </span>
        <button type="button" className="upload-progress__btn-abort" onClick={onClickAbort}>
          <span className="a11y">abort uploading</span>
          <IconStyle shape="close-circle" width={24} height={24} viewBox="0 0 24 24" />
        </button>
      </div>
      <BorderLinearProgress variant="determinate" value={progress} />
    </div>
  );
}

UploadProgress.propTypes = {
  fileName: PropTypes.string.isRequired,
  fileSize: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  onClickAbort: PropTypes.func.isRequired,
};

export default UploadProgress;
