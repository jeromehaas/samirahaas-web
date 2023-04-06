import { gql } from '@apollo/client';

export const GET_DESIGN = () => {
	return gql`
	query {
		design {
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

