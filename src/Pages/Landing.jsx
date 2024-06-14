import Header from "../components/Header";

import Card from "../components/Card";

import TodoContainer from"../components/TodoContainer";





function Landing() {
   

  return (
    <div className='bg-black p-16'>
      {/* Header Section */}
      <div className="bg-white p-10 border rounded-md">
<Header/>

{/* CardSection */}
<div className="flex justify-between gap-5 p-2 flex-wrap">
  <Card bgcolor={"#8299f2"} title={"24°C"} subtitle={"Chennai"}/>
  <Card bgcolor={"#e58478"} title={"December"} subtitle={"14:03:34"}/>
  <Card bgcolor={"#c0e580"} title={"Bulid Using"} subtitle={"React"}/>
</div>

{/* Todo Section */}

<TodoContainer/>



      </div>




    </div>
  );
}

export default Landing;
