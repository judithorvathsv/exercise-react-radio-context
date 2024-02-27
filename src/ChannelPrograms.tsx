const ChannelPrograms = ({ allPrograms }: any) => {
  console.log(allPrograms);
  return (
    <div>
      {allPrograms.map((oneProgram: any) => (
        <div key={oneProgram.id}>
          <img src={oneProgram.programimage} alt="" />
          <p>{oneProgram.name}</p>
          <p>{oneProgram.programcategory.name}</p>
          <p>{oneProgram.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ChannelPrograms;
