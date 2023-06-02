import { gql } from '@apollo/client';

export const GET_STORYTELLING = () => {
	return gql`
	query {
		storytelling {
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
				}
			}
		}
	}
	`;
};
