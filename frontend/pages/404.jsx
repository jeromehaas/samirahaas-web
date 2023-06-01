import BlankPage from 'components/04-layouts/blank-page/blank-page';
import Navigation from 'components/03-organisms/navigation/navigation';
import Error from 'components/03-organisms/error/error';

const PageNotFound = () => {

	return (
		<BlankPage meta={ { title: '404', description: 'Lorem ipsum' } }>
			<Navigation />
			<Error />
		</BlankPage>
	);

};

export default PageNotFound;
