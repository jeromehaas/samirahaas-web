import { gql } from '@apollo/client';

export const GET_PROJECTS_BY_CATEGORY = (category) => {
	return gql`
		query {
			projects (filters: {category: { eq: "${ category }"}}) {
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
	`
};

