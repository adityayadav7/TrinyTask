const dialogflow = require('@google-cloud/dialogflow');
const rr =require('../config/TrinyTask-12bead48582b.json')
// Instantiates clients
const projectId='trinytask-289705'
const intentsClient = new dialogflow.IntentsClient({
    keyFilename:'config/TrinyTask-12bead48582b.json'
});

async function listIntents(req,res) {
  // Construct request

  // The path to identify the agent that owns the intents.
  const projectAgentPath = intentsClient.agentPath(projectId);

  console.log(projectAgentPath);

  const request = {
    parent: projectAgentPath,
  };

  // Send the request for listing intents.
  const [response] = await intentsClient.listIntents(request);
  let intents=[];
  response.forEach(intent => {
        let info=intent

      intents.push({
        info
      })
  //   console.log('====================');
  //   console.log(`Intent name: ${intent.name}`);
  //   console.log(`Intent display name: ${intent.displayName}`);
  //   console.log(`Action: ${intent.action}`);
  //   console.log(`Root folowup intent: ${intent.rootFollowupIntentName}`);
  //   console.log(`Parent followup intent: ${intent.parentFollowupIntentName}`);

  //   console.log('Input contexts:');
  //   intent.inputContextNames.forEach(inputContextName => {
  //     console.log(`\tName: ${inputContextName}`);
  //   });

  //   console.log('Output contexts:');
  //   intent.outputContexts.forEach(outputContext => {
  //     console.log(`\tName: ${outputContext.name}`);
  //   });
  });
  // console.log(intents);
   
  res.status(200).json(intents)
}
module.exports=listIntents