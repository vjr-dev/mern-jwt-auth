export type CreateAccountParams = {
  email: string;
  password: string;
  userAgent?: string;
};

export const createAccount = async (data: CreateAccountParams) => {
  // verify existing user doesnt exist
  // create user
  // create verification code
  // send verification email
  // create sesssion
  // sign access token & refresh token
  // return user & tokens
};
