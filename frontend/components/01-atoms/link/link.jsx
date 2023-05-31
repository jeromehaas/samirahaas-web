import NextLink from 'next/link';
import PropTypes from 'prop-types';

const Link = ({ className, children, href, onClick }) => {

	return (
		<NextLink className={ ` ${ className } link ` } href={ href } onClick={ onClick }>
			<span className="link__content">
				{ children }
			</span>
		</NextLink>
	);

};

Link.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	onClick: PropTypes.func,
};

Link.defaultProps = {
	className: '',
	href: '#',
	onClick: null,
};

export default Link;
