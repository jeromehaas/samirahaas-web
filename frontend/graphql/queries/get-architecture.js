import { gql } from '@apollo/client';

export const GET_ARCHITECTURE = () => {
	return gql`
	query {
		architecture {
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

