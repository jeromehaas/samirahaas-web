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
					description
					category
					preview {
					  data {
						attributes {
						  formats
							url
							width
							height
						}
					  }
					}
					images {
							id
							group {
								data {
									id
									attributes {
										formats
										url
										width
										height
									}
								}
							}
						}
					teaser {
					  data {
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
		  }
		}
	  }
	`;
};
