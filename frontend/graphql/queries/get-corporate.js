import { gql } from '@apollo/client';

export const GET_CORPORATE = () => {
	return gql`
	query {
		corporate {
		  data {
			id
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
						id
						attributes {
						  formats
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
									}
								}
							}
						}
					teaser {
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

