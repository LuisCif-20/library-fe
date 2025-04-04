export interface Role {
  code: string;
  name: string;
}

export interface User {
  id:         string;
  email:      string;
  name:       string;
  cui:        string;
  birthDate:  string;
  imageUrl:   string;
  role:       Role
}
