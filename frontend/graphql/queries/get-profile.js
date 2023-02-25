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
				  text
				  link
				}
				
			  }
			  education {
				heading
				training {
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

