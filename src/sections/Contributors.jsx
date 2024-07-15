import React from 'react';
import ContributorsDetails from '../contribution/con';



function Contributors () {
  return (
    <>
      <section id="contributors" className="min-h-[100vh] flex flex-col items-center border-2">
        <header className= "w-full mt-60 ml-60  ">
       <p className="bg-green-200 w-60 rounded-lg pl-5 text-green-600">People behind the magic</p>
       <br />
       <h1 className="text-3xl font-bold">Contributors</h1>
       </header>
      <ContributorsDetails /> 
      </section>
    </>
  );
};

export default Contributors;
