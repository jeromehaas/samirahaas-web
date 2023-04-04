import { gql } from '@apollo/client';

export const GET_IMPRINT = () => {
	return gql`
        query {
            imprint {
                data {
                    attributes {
                        heading {
                            top
                            sub
                        }
                        contributors {
                            id
                            address {
                                id
                                text
                                link
                            }
                            heading
                        }
                    }
                }
            }
        }
    `
};