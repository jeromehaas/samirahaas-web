import { gql } from '@apollo/client';

export const GET_PROJECTS_BY_ID = (id) => {
	return gql`
		query {
			project (id: ${ id }) {
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

