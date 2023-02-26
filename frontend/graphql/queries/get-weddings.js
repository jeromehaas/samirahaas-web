import { gql } from '@apollo/client';

export const GET_WEDDING = () => {
	return gql`
	query {
		wedding {
		  data {
			attributes {
			  heading {
				top
				sub
			  }
			  projects {
				data {
				  id
				  attributes {
					heading
					teaser {
					  data {
						attributes {
						  formats
						}
					  }
					}
					preview {
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
		  }
		}
	  }
	`
};

