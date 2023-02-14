import { gql } from '@apollo/client';

export const GET_ALL_PROJECTS = () => {
	return gql`
		query {
			projects {
				data {
					id
					attributes {
						title
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
	`
};

