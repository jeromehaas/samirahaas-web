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
						navigation {
          		next {
            		data {
              		id
            		}
          		}
          		previous {
            		data {
              		id
            		}
          		}
        		}
					}
				}
			}
		}
	`;
};
