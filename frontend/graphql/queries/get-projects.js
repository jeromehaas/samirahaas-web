import { gql } from '@apollo/client';

export const GET_ALL_PROJECTS = () => {
	return gql`
		query {
			projects {
				data {
					id
					attributes {
						heading
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
					}
				}
			}
		}
	`;
};
