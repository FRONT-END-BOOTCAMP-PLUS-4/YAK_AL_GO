export class User {
  id: string;
  name: string;
  email?: string;
  image: string;
  member_type?: number;

  constructor(props: { id: string; name: string; email?: string; image: string; member_type?: number }) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.image = props.image;
    this.member_type = props.member_type;
  }
}
