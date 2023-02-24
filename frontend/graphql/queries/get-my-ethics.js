import { gql } from '@apollo/client';

export const GET_MY_ETHICS = () => {
	return gql`
	query {
		myEthic {
		data {
		  attributes {
			heading
			values {
			  id
			  value
			}
			image {
				data {
					attributes {
						formats
					}
				}
			}
		  }
		}
	  }
	}
	`
};

