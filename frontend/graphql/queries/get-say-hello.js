import { gql } from '@apollo/client';

export const GET_SAY_HELLO = () => {
	return gql`
    query {
        sayHello {
          data {
            attributes {
                heading 
              text
              image {
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

