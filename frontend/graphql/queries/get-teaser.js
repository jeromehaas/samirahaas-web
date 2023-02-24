import { gql } from '@apollo/client';

export const GET_TEASER = () => {
	return gql`
		query {
			teaser {
			data {
				attributes {
				projects {
					data {
					id
					attributes {
						heading
						category
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
		}`
	};
