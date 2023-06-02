import { gql } from '@apollo/client';

export const GET_TEASER = () => {
	return gql`
		query {
			teaser {
			data {
				id
				attributes {
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
		}`;
};
