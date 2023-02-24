import { gql } from '@apollo/client';

export const GET_ABOUT_ME = () => {
	return gql`
	query {
		aboutMe {
		  data {
			attributes {
			  heading
			  text 
			  image {
				data {
				  attributes {
					formats
				  }
				}
			  }
			  button {
				  label
				link
			  }
			}
		  }
		}
	  }
	`
};

