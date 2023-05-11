import { gql } from '@apollo/client';

export const GET_HERO = () => {
	return gql`
		query{
		  hero {
		    data {
		      attributes {
		        heading
		        text
		      }
		    }
		  }
		}
	`
};

