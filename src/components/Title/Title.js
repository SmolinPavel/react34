import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Title.module.css';

export const Title = ({ bordered = false, children, tag: Tag, color }) => {
  const style = { color };

  return (
    <Tag
      className={classnames(styles.Title, {
        // Title_Title__3cQPx
        [styles['Title--bordered']]: bordered, // Title_Title--bordered__3RakP
      })}
      style={style}
    >
      Hello React #{children}
    </Tag>
  );
};

Title.defaultProps = {
  tag: 'h1',
  color: 'black',
};

Title.propTypes = {
  bordered: PropTypes.bool,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h5']),
  children: PropTypes.node,
};
