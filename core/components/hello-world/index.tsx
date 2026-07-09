type HelloWorldProps = {
    name: string;
    code?: string;
}
export function HelloWorld({ name, code }: HelloWorldProps) {
    return <div>Hello {name}. <br />{code ? `Here is the Code ${code}` : ""}</div>;
  }
  