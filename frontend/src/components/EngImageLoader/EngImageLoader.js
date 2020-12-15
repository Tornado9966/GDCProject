import React, { Component, Fragment } from 'react';
import {
    Image, Button, Icon, Progress, Placeholder
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { uploadFile, getFileUrl } from 'services/firebase';

import './styles.scss';

export class EngImageLoader extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    initialValue: PropTypes.object,
    className: PropTypes.string,
    handleSave: PropTypes.func
  };

  static defaultProps = {
    className: 'user-image', 
    initialValue: null,
    handleSave: () => {}
  };

  state = {
    url: this.props.image,
    load: false,
    save: false, 
    image: null,
    progress: 0
  };

  fileInputRef = React.createRef();

  displayLoader = () => 
    this.setState(prevState => {
      return {
        ...prevState, 
        load: !prevState.load
      };
    });

  onProgress = ({bytesTransferred, totalBytes}) => {
    const progress = Math.round((bytesTransferred / totalBytes) * 100);
    return this.setState({progress});
  };

  onError = error => this.setState({progress: error});

  onComplete = (folder, { name: image }) => {
    const { name } = this.props;
    return getFileUrl(folder, image)
      .then(url => this.props.handleSave(name, {userImage: url}));
  };

  fileUpload = () => {
    const { image } = this.state;
    const folder = 'users';
    const stateChanged = 'state_changed';

    return uploadFile(folder, image)
      .on(stateChanged, 
        snapshot => this.onProgress(snapshot), 
        error => this.onError(error),
        () => this.onComplete(folder, image)
      );
  };
    
  fileChange = ({target: {files}}) => {
    const image = files[0];
    const url = URL.createObjectURL(files[0]);
    return this.setState({image, url, save: true});
  };

  handleExit = () => {
    return this.setState({
      url: this.props.image, 
      save: false, 
      load: false, 
      progress: 0
    });
  };

  isButtonDisabled = progress => progress > 0 && progress < 100;

  getIcon = process => process === 100 ? 'check circle' : 'x';
   
  render() {
    const { url, load, save, progress } = this.state;
    const { className, initialValue } = this.props;

    const exitIconClasses = classnames({
      'x-icon': progress < 100, 
      'save-icon': progress === 100
    });

    return (
      <Fragment>
        {url !== initialValue ?
          <Fragment>
            <div className='load-buttons'>
              {load &&  
                <Fragment>
                  <Button 
                    icon 
                    className='loader-icon' 
                    disabled={this.isButtonDisabled(progress)} 
                    onClick={() => this.fileInputRef.current.click()}
                  >
                    <Icon name='upload' />
                  </Button>
                  <input
                    hidden
                    type="file"
                    ref={this.fileInputRef}
                    accept=".png, .jpg, .jpeg"
                    onChange={this.fileChange}
                  />
                </Fragment>
              }
              {save &&
                <Fragment>
                  <Button 
                    icon 
                    className='save-icon' 
                    onClick={this.fileUpload} 
                    disabled={this.isButtonDisabled(progress)}
                  >
                    <Icon name='save' />
                  </Button>
                  <Button 
                    icon 
                    className={exitIconClasses} 
                    onClick={this.handleExit} 
                    disabled={this.isButtonDisabled(progress)}
                  >
                    <Icon name={this.getIcon(progress)} />
                  </Button>
                </Fragment>
              }
            </div>
            <Image 
              src={url}
              onClick={this.displayLoader}
              className={className}
            />
            {Boolean(progress) &&              
              <Progress
                indicating
                percent={progress}
                error={isNaN(progress)}
                className='image-loader-progress'
              />
            }
          </Fragment>
        :
        <Placeholder className='profile-placeholder'>
            <Placeholder.Image />
        </Placeholder>
        }
      </Fragment>      
    );
  }
}
