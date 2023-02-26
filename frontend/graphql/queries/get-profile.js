import { gql } from '@apollo/client';

export const GET_PROFILE = () => {
	return gql`
	query {
		profile {
		  data {
			attributes {
			  contact {
				heading
				address {
				id
				  text
				  link
				}
				
			  }
			  education {
				heading
				training {
				  id
				  period
				  description
				}
			  }
			}
		  }
		}
	  }
	`
};

