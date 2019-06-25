export const handler = async (event: any) => {
  const name = event.arguments.name;
  return `Hello ${name}, my name is ${process.env.NAME}`;
};
