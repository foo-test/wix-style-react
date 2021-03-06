import React from 'react';
import PropTypes from 'prop-types';
import style from './SocialPreview.st.css';
import Text from '../Text';
import Box from '../Box';

/**
 * A displayer for a social post
 */
class SocialPreview extends React.Component {
  static displayName = 'SocialPreview';

  static propTypes = {
    dataHook: PropTypes.string,
    /** A social post link title */
    title: PropTypes.string,
    /** A social post link description */
    description: PropTypes.string,
    /** A url representation of the social post link */
    previewUrl: PropTypes.string,
    /** A slot to render a media item, most common will be the ImageViewer component */
    media: PropTypes.node,
  };

  render() {
    const { title, description, previewUrl, media } = this.props;

    return (
      <div {...style('root', {}, this.props)} data-hook={this.props.dataHook}>
        {media}
        <Box className={style.container} direction="vertical">
          <Text
            weight="normal"
            size="tiny"
            dataHook="socialPreview-url"
            className={style.socialPreviewUrl}
            ellipsis
          >
            {previewUrl && previewUrl.toUpperCase()}
          </Text>
          <Text
            weight="bold"
            size="small"
            dataHook="socialPreview-title"
            className={style.socialPreviewTitle}
            ellipsis
          >
            {title}
          </Text>
          <Text
            weight="thin"
            size="tiny"
            dataHook="socialPreview-description"
            className={style.socialPreviewDescription}
            ellipsis
          >
            {description}
          </Text>
        </Box>
      </div>
    );
  }
}

export default SocialPreview;
