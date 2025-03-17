export default async function LoadingUsers() {
  const pokemon = await Pokemon.updateById({});
  console.log(">>",  );
  console.log("I loaded");
  return <div>Loading user data...</div>;
}
