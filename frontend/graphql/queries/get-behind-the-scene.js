import { gql } from '@apollo/client';

export const GET_BEHIND_THE_SCENE = () => {
	return gql`
	query {
		behindTheScene {
			data {
			id
			  attributes {
				images {
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
