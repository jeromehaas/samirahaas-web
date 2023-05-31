import { gql } from '@apollo/client';

export const GET_DATA_PRIVACY = () => {
	return gql`
	query {
		dataPrivacy {
		  data {
			id
			attributes {
			  heading {
				top 
				sub
			  }
			paragraph {
				id
				heading
				text
			  }
			}
		  }
		}
	  }
	`;
};
