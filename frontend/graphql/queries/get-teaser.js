// import { gql } from '@apollo/client';

// export const GET_TEASER = () => {
// 	return gql`
// 		query {
// 			teaser {
// 				data {
// 					attributes {
// 						projects {
// 							data {
// 								attributes {
// 									heading
// 									preview {
// 										data {
// 											attributes {
// 												formats
// 											}
// 										}
// 									}
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// `
// };

import { gql } from '@apollo/client';

export const GET_TEASER = () => {
	return gql`
		query {
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

