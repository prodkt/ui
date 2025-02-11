import { CodeBlock, CodeBlockContent } from '@repo/code-block';

const code = [
  {
    language: 'JavaScript',
    filename: 'MyComponent.jsx',
    code: `function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`,
  },
  {
    language: 'Typescript',
    filename: 'MyComponent.tsx',
    code: `function MyComponent(props: { name: string }) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`,
  },
];

export const Example = () => (
  <div className="p-4">
    <CodeBlock
      value={code[0].language}
      onValueChange={() => {}}
      defaultValue={code[0].language}
    >
      {code.map((item) => (
        <CodeBlockContent key={item.language} value={item.language}>
          {item.code}
        </CodeBlockContent>
      ))}
    </CodeBlock>
  </div>
);
