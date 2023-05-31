import { gql } from '@apollo/client';

export const GET_MY_ETHICS = () => {
	return gql`
	query {
		myEthic {
		data {
		  id
		  attributes {
			heading
			values {
			  id
			  value
			}
			image {
				data {
					id
					attributes {
						formats
						url
					}
				}
			}
		  }
		}
	  }
	}
	`;
};
