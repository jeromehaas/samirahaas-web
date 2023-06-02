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
							url
							width
							heigth
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
							width
							height
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
