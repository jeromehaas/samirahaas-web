import { gql } from '@apollo/client';

export const GET_SAY_HELLO = () => {
	return gql`
    query {
        sayHello {
          data {
            id
            attributes {
                heading {
                  top
                  sub
                }
              text
              image {
                data {
                  id
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

