import { gql } from '@apollo/client';

export const GET_CORPORATE = () => {
	return gql`
	query {
		corporate {
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
