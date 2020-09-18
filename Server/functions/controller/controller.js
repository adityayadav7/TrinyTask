const dialogflow = require('@google-cloud/dialogflow');
const rr =require('../config/TrinyTask-12bead48582b.json')
const projectId='trinytask-289705'
const intentsClient = new dialogflow.IntentsClient({
    keyFilename:'config/TrinyTask-12bead48582b.json'
});

async function listIntents(req,res) {
  const projectAgentPath = intentsClient.agentPath(projectId);

  console.log(projectAgentPath);

  const request = {
    parent: projectAgentPath,
  };

  const [response] = await intentsClient.listIntents(request);
  let intents=[];
  response.forEach(intent => {
        let info=intent

      intents.push({
        info
      })
  });
 
   
  res.status(200).json(intents)
}
module.exports=listIntents