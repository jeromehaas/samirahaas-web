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
		}`
	};
