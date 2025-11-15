import Card from "@/components/Card"
import Button from "@/components/Button";


const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="View Detail" size="medium" shape="rounded-full"/>
      <Card />
      
      {/* Small buttons */}
      <Button title="Small Rounded SM" size="small" shape="rounded-sm" />
      <Button title="Small Rounded MD" size="small" shape="rounded-md" />
      <Button title="Small Full" size="small" shape="rounded-full" />

      {/* Medium buttons */}
      <Button title="Medium Rounded SM" size="medium" shape="rounded-sm" />
      <Button title="Medium Rounded MD" size="medium" shape="rounded-md" />
      <Button title="Medium Full" size="medium" shape="rounded-full" />

      {/* Large buttons */}
      <Button title="Large Rounded SM" size="large" shape="rounded-sm" />
      <Button title="Large Rounded MD" size="large" shape="rounded-md" />
      <Button title="Large Full" size="large" shape="rounded-full" />
    </div>
  )
}
export default Landing