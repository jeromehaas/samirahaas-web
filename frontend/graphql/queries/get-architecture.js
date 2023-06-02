import { gql } from '@apollo/client';

export const GET_ARCHITECTURE = () => {
	return gql`
	query {
		architecture {
			data {
				id
				attributes {
					heading {
						top
						sub
					}
					showcase {
						id
						format
						project {
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
		}
	}	
	`;
};
