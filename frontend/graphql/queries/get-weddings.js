import { gql } from '@apollo/client';

export const GET_WEDDING = () => {
	return gql`
	query {
		wedding {
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

