export default function ProjectStatus({ProjectName,TeamMember,ProjectStatus}){
return(
        <>
         <div style={{
            padding:"10px",
            border:"1px solid red",
            borderRadius:"5px",
           marginTop:"10px"
         }}>
            <h1>Project Status</h1>
            <h5>Project Name: {ProjectName} </h5>
            <h5>Team Member: {TeamMember} </h5>
            <h5>Project Status: {ProjectStatus == true?"done" : "Not done,need more people"} </h5>
            {/* here we i used && it means if the projectStatus is true then it will return "done"  then i used || it means if not true return "add more"*/}
            <h5>Project Status: {ProjectStatus && "done" || ProjectStatus || "add more"} </h5> 
            {/* here if project status is true then it will show done or project is not true then it will show add more.if true it will not go to add more */}
    
         </div>
        </>
    )
}