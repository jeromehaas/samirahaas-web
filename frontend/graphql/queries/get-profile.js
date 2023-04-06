import { gql } from '@apollo/client';

export const GET_PROFILE = () => {
	return gql`
	query {
		profile {
		  data {
			id
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

