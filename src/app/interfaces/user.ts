/**
 * Model for the user
 * @param id        - number of the user ID
 * @param name      - string of the user name
 * @param img       - URL of the user avatar image
 * @param username  - user nickname
 */
export interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}
